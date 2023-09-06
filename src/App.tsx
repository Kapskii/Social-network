import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import {  HashRouter, Route, Routes } from 'react-router-dom';
import Settings from './components/Settings/Settings';
import Music from './components/Music/Music';
import News from './components/News/News';


const App = () => {
  return (
    <HashRouter>
      <div className='app-wrapper'>
        <Header />
        <Navbar />
        <div className="app-wrapper-content">
          <Routes>
          <Route path='/dialogs' Component={Dialogs} />
          <Route path='/profile' Component={Profile} />
          <Route path='/settings' Component={Settings}/>
          <Route path='/music' Component={Music}/>
          <Route path='/news' Component={News}/>
          </Routes>
        </div>
      </div>
    </HashRouter>
  );
}

export default App;


