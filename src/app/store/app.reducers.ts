import { ActionReducerMap } from '@ngrx/store';
import * as reducers from './reducers';
// import { Usuario } from '../models/usuario.model';
// import { usuariosReducer } from './reducers/usuarios.reducer';


export interface AppState {
   usuarios:reducers.UsuariosState,
   usuario:reducers.UsuarioState
}



export const appReducers: ActionReducerMap<AppState> = {
  usuarios: reducers.usuariosReducer ,
  usuario:reducers.usuarioReducer
}
