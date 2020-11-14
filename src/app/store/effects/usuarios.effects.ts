import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { mergeMap, tap, map, catchError } from 'rxjs/operators';
import * as usuariosActions from '../actions/usuarios.actions';
import {UsuarioService} from '../../services/usuario.service'
// import { cargarUsuariosSucces } from '../actions/usuarios.actions';
import { Usuario } from '../../models/usuario.model';
import { of } from 'rxjs';
@Injectable()
export class UsuariosEffects {

  constructor(
    private actions$: Actions,
    private usuarioServices:UsuarioService
  ) {

  }


  cargarUsuarios$ = createEffect(
    () => this.actions$.pipe(
      ofType(usuariosActions.cargarUsuarios),//verificar q solo pase por la accion indicada
      tap(data => console.log('effect tap',data)),
      mergeMap(()=> this.usuarioServices.getUsers()
      .pipe(

        map(users => usuariosActions.cargarUsuariosSucces({usuarios:users}) ) ,
        catchError(err => of(usuariosActions.cargarUsuariosError({payload:err})))

      )


      )
    )
  );

}


