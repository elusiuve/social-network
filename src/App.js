import React, {Component} from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import {BrowserRouter, Route, withRouter} from 'react-router-dom';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import HeaderContainer from './components/Header/HeaderContainer';
import Login from './components/Login/Login';
import {connect} from 'react-redux';
import {compose} from 'redux';
import {initializeApp} from './redux/app_reducer';
import Preloader from './components/Common/Preloader/Preloader';

const DialoguesContainer = React.lazy(() => import('./components/Dialogues/DialoguesContainer'))
const ProfileContainer = React.lazy(() => import('./components/Profile/ProfileContainer'))
const UsersContainer = React.lazy(() => import('./components/Users/UsersContainer'))

class App extends Component {
    componentDidMount() {
        this.props.initializeApp()
    }

    render() {
        if (!this.props.initialized) {
            return <Preloader/>
        }
        return (
            <BrowserRouter basename={process.env.PUBLIC_URL}>
                <div className='app-wrapper'>
                    <HeaderContainer/>
                    <Navbar/>
                    <div className='app-wrapper-content'>
                        <React.Suspense fallback={<h1>Loading...</h1>}>
                            <Route path='/dialogues' render={() => < DialoguesContainer/>}/>
                            <Route path='/profile/:userId?' render={() => < ProfileContainer/>}/>
                            <Route path='/login' render={() => < Login/>}/>
                            <Route path='/news' render={() => < News/>}/>
                            <Route path='/music' render={() => < Music/>}/>
                            <Route path='/settings' render={() => < Settings/>}/>
                            <Route path='/users' render={() => < UsersContainer/>}/>
                        </React.Suspense>
                    </div>
                </div>
            </BrowserRouter>)
    }
}

const mapStateToProps = (state) => {
    return {
        initialized: state.app.initialized
    }
}

export default compose(withRouter, connect(mapStateToProps, {initializeApp}))(App);