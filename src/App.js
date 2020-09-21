import React from 'react';
import './App.css';
import { Switch , Route } from "react-router-dom";
import Home from './pages/home'
import Admin from './pages/admin'
import Login from './pages/login'


function App() {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route exact path='/adminpage' component={Admin}/>
        <Route exact path='/login' component={Login}/>
      </Switch>
    </div>
  );
}

export default App; 

