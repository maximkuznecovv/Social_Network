import {applyMiddleware, combineReducers, createStore} from "redux";
import {profileActionsType, profileReducer} from './profile-reducer';
import {dialogsActionsType, dialogsReducer} from './dialogs-reducer';
import {sidebarActionsType, sidebarReducer} from './sidebar-reducer';
import {usersReducer} from "./users-reducer";
import thunk, { ThunkAction } from 'redux-thunk';
import {authActionsType, authReducer} from './auth-reducer';


export const rootReducer = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    sidebar: sidebarReducer,
    usersPage: usersReducer,
    auth: authReducer,
})


export type AppStateType = ReturnType<typeof rootReducer>

export type AppActionsType = authActionsType | dialogsActionsType | profileActionsType | sidebarActionsType
export type AppThunkType<ReturnType = void> = ThunkAction<ReturnType,
    AppStateType,
    unknown,
    AppActionsType
    >


export let store = createStore(rootReducer, applyMiddleware(thunk))