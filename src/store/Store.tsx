import { Event, isUpdateEvent, isWatchEvent, isEffectEvent }  from "../store/Event";
import { withLatestFrom, map, share, filter  } from 'rxjs/operators';
import { interval, BehaviorSubject, Subject} from 'rxjs';
import { useState, useEffect } from 'react';

// === Definición del Store ===

export class Store<T> {
  public state$: Observable<T>;
  public events$: Observable<Event>;

  public constructor(initialState: T) {
    this.state$ = new BehaviorSubject<T>(initialState);
    this.events$ = new Subject<Event>().pipe(share());
    this._subscribe();
  }

  public emit(event: Event): void {
    this.events$.next(event);
  }

  private _subscribe(): void {
    this.events$.pipe(
      filter(event => isUpdateEvent(event)),
      withLatestFrom(this.state$),
    ).subscribe(([event, state]) => this._processUpdateEvent(event, state));

    this.events$.pipe(
      filter(event => isWatchEvent(event)),
      withLatestFrom(this.state$),
    ).subscribe(([event, state]) => this._processWatchEvent(event, state));

    this.events$.pipe(
      filter(event => isEffectEvent(event)),
      withLatestFrom(this.state$),
    ).subscribe(([event, state]) => this._processEffectEvent(event, state));
  }

  private _processUpdateEvent(event: Event, state: T) {
    const newState = event.update(state);
    this.state$.next(newState);
  }

  private _processWatchEvent(event: Event, state: T) {
    const newEvents$ = event.watch(state);
    newEvents$.subscribe(event => this.events$.next(event));
  }

  private _processEffectEvent(event: Event, state: T) {
    event.effect(state);
  }
}


// === Hook para suscribirse al store ===

export function useRef(store: Store, selector: func) {
  const [value, setValue] = useState(null);

  useEffect(() => {
    store.state$.subscribe((state) => {
      const newValue = selector(state);
      if (newValue !== value) {
        setValue(selector(state));
      }
    });
  });

  return value;
}

// Mejoras:
// - gestión de errores
// - que WatchEvent.watch pueda devolver una promesa además de un observable
