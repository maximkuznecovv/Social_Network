import React from "react";
import "./App.css";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import {HashRouter, Route, withRouter} from "react-router-dom";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import {SidebarContainer} from "./components/Sidebar/SidebarContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import LoginPage from './components/Login/LoginPage';
import {compose} from 'redux';
import {connect, ConnectedProps} from 'react-redux';
import {initializeApp} from './redux/app-reducer';
import {AppStateType} from './redux/store';
import {Preloader} from './components/common/Preloader/Preloader';

/*const App = () => {

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
                    <Route path='/settings' render={() => <Settings/>}/>*/
class App extends React.Component<any> {
    componentDidMount() {
        this.props.initializeApp()
    }

    render() {
        if (!this.props.initialized) {
            return <Preloader/>
        }

        return (
            <HashRouter>
                <div className="app_wrapper">
                    <HeaderContainer/>
                    <SidebarContainer/>
                    <div className={'app_wrapper_content'}>
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
}

const mapStateToProps = (state: AppStateType): MapStateToProps => ({
    initialized: state.app.initialized
})

const connector = connect(mapStateToProps, {initializeApp})

export default compose<React.ComponentType>(
    withRouter,
    connector,
)(App)

// Types
export type AppPropsType = ConnectedProps<typeof connector>;
type MapStateToProps = {
    initialized: boolean
}
