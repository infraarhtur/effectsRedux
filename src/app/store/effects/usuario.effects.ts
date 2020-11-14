import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { mergeMap, tap, map, catchError } from 'rxjs/operators';
import * as usuarioActions from '../actions/usuario.actions';
import {UsuarioService} from '../../services/usuario.service'
// import { cargarUsuariosSucces } from '../actions/usuarios.actions';
import { Usuario } from '../../models/usuario.model';
import { of } from 'rxjs';
@Injectable()
export class UsuarioEffects {

  constructor(
    private actions$: Actions,
    private usuarioServices:UsuarioService
  ) {

  }


  cargarUsuario$ = createEffect(
    () => this.actions$.pipe(
      ofType(usuarioActions.cargarUsuario),//verificar q solo pase por la accion indicada
      tap(data => console.log('effect tap',data)),
      mergeMap((action)=> this.usuarioServices.getUsersById(action.id)
      .pipe(

        map(user => usuarioActions.cargarUsuarioSucces({usuario:user}) ) ,
        catchError(err => of(usuarioActions.cargarUsuarioError({payload:err})))

      )


      )
    )
  );

}


