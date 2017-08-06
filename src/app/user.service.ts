import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import { HttpClient } from '@angular/common/http';

import 'rxjs/add/operator/toPromise';

import { User } from "./classes"


@Injectable()
export class UserService {

  private headers = new Headers({'Content-Type': 'application/json'});
  private usersUrl:string = 'http://localhost:3000/api/users';
  private loginUrl:string = 'http://localhost:3000/login';
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

  getUser(id:string):Promise<User> {
    const url = `${this.usersUrl}/${id}`
    return this.http.get(url)
      .toPromise()
      .then(response => response.json() as User)
      .catch(this.handleError);
  }

  addUser(user:User):Promise<User> {
    return this.http.post(this.usersUrl, JSON.stringify(user), {headers: this.headers})
      .toPromise()
      .then(res => res.json() as User)
      .catch(this.handleError);
  }

  deleteUser(id:string):Promise<User> {
    const url = `${this.usersUrl}/${id}`
    return this.http.delete(url, {headers: this.headers})
      .toPromise()
      .then(res => res.json() as User)
      .catch(this.handleError);
  }

  deleteAllUsers():Promise<User[]> {
    const url = `${this.usersUrl}/all`
    const head = new Headers({'Content-Type': 'text/plain'})
    return this.http.delete(url, {headers: head})
      .toPromise()
      .then(res => res.json() as User[])
      .catch(this.handleError)
  }

  login(data:any):Promise<any> {
    return this.http.post(this.loginUrl, JSON.stringify(data), {headers: this.headers})
      .toPromise()
      .then(res => {
        console.log(res)
      })
      .catch(this.handleError)
  }
}