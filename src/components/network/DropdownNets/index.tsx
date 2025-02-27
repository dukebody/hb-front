//a variation of dropddown specific for time
import { useState } from "react";




// -- componente sumador --
export class Resetear implements UpdateEvent {
  public update(state: object): object {
    return produce(state, draft => {
      draft.sumador.valor = 0;
    });
  }
}


export class Sumar implements UpdateEvent {
  public constructor(private valor: int) {}

  public update(state: object): object {
    return produce(state, draft => {
      draft.sumador.valor += this.valor;
    });
  }
}

export default function DropdownNets() {

  const [network, setNetwork] = useState("");

  return (

    <div className="header-search__nets">
      <div className="header-search__net-picker">
      <input type="text" className="header-search--nets" placeholder='Selecciona red'></input>
      </div>
    </div>
  );
}
