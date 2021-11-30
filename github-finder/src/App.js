import React, { useState } from 'react';
import './App.css';
import Navbar from './components/layouts/Navbar';
import Users from './components/users/Users';

const App = () => {
  return (
    <div className='app'>
      <Navbar title='GitHub Finder' />
      <div className='container'>
        <Users />
      </div>
    </div>
  );
};

export default App;
