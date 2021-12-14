import React, { Fragment } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/layouts/Navbar';
import About from './components/pages/About';
import User from './components/users/User';
import Users from './components/users/Users';
import GithubState from './context/github/GithubState';
import AlertState from './context/alert/AlertState';

const App = () => {
  return (
    <GithubState>
    <AlertState>
      <Router>
        <div className='app'>
          <Navbar title='GitHub Finder' />
          <div className='container'>
            <Switch>
              <Fragment>
                <Route path='/' exact component={Users}></Route>
                <Route path='/about' exact component={About}></Route>
                <Route path='/user/:logins' exact component={User}></Route>
              </Fragment>
            </Switch>
          </div>
        </div>
      </Router>
      </AlertState>
    </GithubState>
  );
};

export default App;
