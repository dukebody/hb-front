import { Observable } from 'rxjs';
import { ajax } from 'rxjs/ajax';

import { UserData } from './user.type';

import { OpenApi } from './types';


export class UserDataService {


  public static getAll(): Observable<UserData> {
    return ajax.get(`http://localhost:3001/users`);
  }

  public static get(id: string): Observable<UserData> {
    return ajax.get(`http://localhost:3001/users/${id}`);
  }

  public static login(id: string): Observable<UserData> {
    return ajax.get(`http://localhost:3001/users/login`,data);
  }

  public static signup(data: UserData): Observable<UserData> {
    return ajax.post(`http://localhost:3001/users/signup`,data);
  }

  public static update(data: UserData, id:any): Observable<UserData> {
    return ajax.put(`http://localhost:3001/users/${id}`,data);
  }

  public static delete(id:any): Observable<UserData> {
    return ajax.delete(`http://localhost:3001/users/${id}`);
  }

  public static deleteAll(id:any): Observable<UserData> {
    return ajax.delete(`http://localhost:3001/users`);
  }


}