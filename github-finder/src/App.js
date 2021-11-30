import React, { Fragment } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/layouts/Navbar';
import About from './components/pages/About';
import User from './components/users/User';
import Users from './components/users/Users';

const App = () => {
  return (
    <Router>
      <div className='app'>
        <Navbar title='GitHub Finder' />
        <div className='container'>
          <Switch>
            <Fragment>
              <Route path='/' exact component={Users}></Route>
              <Route path='/about' exact component={About}></Route>
              <Route path='/user/:login' exact component={User}></Route>
            </Fragment>
          </Switch>
        </div>
      </div>
    </Router>
  );
};

export default App;
