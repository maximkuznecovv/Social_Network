import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Profile from "./components/Profile/Profile";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import {Route} from "react-router-dom";
import {store, ActionsType} from "./redux/redux-store";
import {DialogsContainer} from "./components/Dialogs/DialogsContainer";
import {SidebarContainer} from "./components/Sidebar/SidebarContainer";


export type  PropsType = {
    store: typeof store
    //store: StoreType
    dispatch: (action: ActionsType) => void
}

const App = () => {

    return (
        <div className='app-wrapper'>
            <Header/>
            <SidebarContainer/>
            <div className='app-wrapper-content'>
                <Route path='/dialogs' render={() => <DialogsContainer/>}/>
                <Route path='/profile' render={() => <Profile/>}/>

                <Route path='/news' render={() => <News/>}/>
                <Route path='/music' render={() => <Music/>}/>
                <Route path='/settings' render={() => <Settings/>}/>
            </div>
        </div>
    );
}

export default App;
