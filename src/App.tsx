import React from 'react';
import './App.css';
import Header from './components/Header/Header';
//import {Sidebar} from './components/Sidebar/Sidebar';
import Profile from './components/Profile/Profile';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import {HashRouter, Route} from 'react-router-dom';
import {ActionsType, StoreType} from "./redux/store";
import {store} from "./redux/redux-store";
import {DialogsContainer} from "./components/Dialogs/DialogsContainer";
import {SidebarContainer} from './components/Sidebar/SidebarContainer';

// export type AppPropsType = {
//     store: StoreType
//     addPost: () => void
//     updateNewPostText: (newText: string) => void
// }

export type  PropsType = {
    //store: typeof store
    store: StoreType
    dispatch: (action: ActionsType) => void
}

const App = () => {
    //const state = props.store.getState()

    return (
       /* <HashRouter>*/
            <div className='app-wrapper'>
                <Header/>
                {/*<Sidebar sidebar={state.sidebar}/>*/}
                <SidebarContainer/>
                <div className='app-wrapper-content'>
                    <Route path='/dialogs' render={() => <DialogsContainer />}/>
                    <Route path='/profile' render={() => <Profile />}/>

                    <Route path='/news' render={() => <News/>}/>
                    <Route path='/music' render={() => <Music/>}/>
                    <Route path='/settings' render={() => <Settings/>}/>
                </div>
            </div>
        /*</HashRouter>*/
    );
}

export default App;
