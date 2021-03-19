import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import {Sidebar} from './components/Sidebar/Sidebar';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import {HashRouter, Route} from 'react-router-dom';
import {ActionsType, StoreType} from "./redux/state";

export type AppPropsType = {
    store: StoreType
    addPost: () => void
    updateNewPostText: (newText: string) => void
}

type  PropsType = {
    store: StoreType
    dispatch: (action: ActionsType) => void
}

const App: React.FC<PropsType> = (props) => {
    const state = props.store.getState()

    return (
       /* <HashRouter>*/
            <div className='app-wrapper'>
                <Header/>
                <Sidebar sidebar={state.sidebar}/>
                <div className='app-wrapper-content'>
                    <Route path='/dialogs'
                           render={() => <Dialogs
                               dialogsPage={state.dialogsPage}
                               dispatch={props.dispatch}
                           />}/>
                    <Route path='/profile'
                           render={() => <Profile
                               profilePage={state.profilePage}
                               dispatch={props.dispatch}
                           />}/>

                    <Route path='/news' render={() => <News/>}/>
                    <Route path='/music' render={() => <Music/>}/>
                    <Route path='/settings' render={() => <Settings/>}/>
                </div>
            </div>
        /*</HashRouter>*/
    );
}

export default App;
