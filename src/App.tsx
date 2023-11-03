import React from 'react';
import './App.css';
import { Header } from './Components/Header/Header';
import { Propfile } from './Components/Profile/Propfile';
import { Dialogs } from './Components/Dialogs/Dialogs';
import { Route, Routes } from 'react-router-dom';

export const App = () => {
  return (
    <div className='container'>
      <div>
        <Header />
      </div>
      <div className='mainWrapper'>
        <Routes>
        <Route path='/' element={<Propfile/>}/>
          <Route path='/profile' element={<Propfile/>}/>
          <Route path='/dialogs' element={<Dialogs/>}/>
        </Routes>
      </div>
    </div>
  );
}
