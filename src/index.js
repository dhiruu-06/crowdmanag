import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import login from './components/login';
import Home from './components/Home';
import station from './components/station';
import stationn from './components/stationn';
import stationnn from './components/stationnn';
import stationnnn from './components/stationnnn';



import {createStore} from 'redux';
import {Provider} from 'react-redux';





ReactDOM.render(
   
    <BrowserRouter>
        <Switch>
            <Route exact path='/' component={App}/>
            <Route exact path="/login" component={login}/>
            <Route exact path="/Home" component={Home}/>
            <Route exact path="/station1" component={station}/>
            <Route exact path="/station2" component={stationn}/>
            <Route exact path="/station3" component={stationnn}/>
            <Route exact path="/station4" component={stationnnn}/>
        </Switch>

    </BrowserRouter>

       
    , document.getElementById('root')
);


