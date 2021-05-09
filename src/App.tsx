import React from "react";
import "./App.css";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import {HashRouter, Route} from "react-router-dom";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import {SidebarContainer} from "./components/Sidebar/SidebarContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer'";
import HeaderContainer from "./components/Header/HeaderContainer";
import LoginPage from './components/Login/LoginPage';

const App = () => {

    return (
        <HashRouter>
            <div className='app-wrapper'>
                <HeaderContainer />
                <SidebarContainer/>
                <div className='app-wrapper-content'>
                    <Route path="/login" render={() => <LoginPage/>}/>
                    <Route path='/dialogs' render={() => <DialogsContainer/>}/>
                    <Route path="/profile/:userId?" render={() => <ProfileContainer/>}/>
                    <Route path='/users' render={() => <UsersContainer/>}/>

                    <Route path='/news' render={() => <News/>}/>
                    <Route path='/music' render={() => <Music/>}/>
                    <Route path='/settings' render={() => <Settings/>}/>
                </div>
            </div>
        </HashRouter>
    );
}

export default App;
