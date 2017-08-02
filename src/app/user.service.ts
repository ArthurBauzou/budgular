import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { User } from "./classes"


@Injectable()
export class UserService {

  private headers = new Headers({'Content-Type': 'application/json', 'Access-Control-Allow-Origin': 'http://localhost:3000/api'});
  private usersUrl:string = 'http://localhost:3000/api/users';
  private handleError(error: any): Promise<any> {
    console.error('Une erreur est survenue avec user.service', error);
    return Promise.reject(error.message || error);
  }

  constructor(private http: Http) { }

  getUsers():Promise<User[]> {
    return this.http.get(this.usersUrl)
      .toPromise()
      .then(response => response.json() as User[])
      .catch(this.handleError);
  }

  addUser(user:User):Promise<User> {
    return this.http.post(this.usersUrl, JSON.stringify(user), {headers: this.headers})
      .toPromise()
      .then(res => res.json() as User)
      .catch(this.handleError);
  }
}