import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

   url:string = 'https://reqres.in/api';

  constructor( private http: HttpClient ) { }


  getUsers() {
    debugger;

    return this.http.get(`${ this.url }/users?per_page=6&delay=3`)
          .pipe(
            map( resp => resp['data'])
          );
  }

  getUsersById(id:string) {
    debugger;

    return this.http.get(`${ this.url }/users/${id}`)
          .pipe(
            map( resp => resp['data'])
          );
  }

}
