import React from 'react';
import './App.css';
import { Header } from './Components/Header/Header';
import { Propfile } from './Components/Profile/Propfile';
import { Dialogs } from './Components/Dialogs/Dialogs';
import { Route, Routes } from 'react-router-dom';

export const App = () => {

  const dialogsDate = [
    { id: '1', name: 'Slava' },
    { id: '2', name: 'Olya' },
    { id: '3', name: 'Vadim' },
  ]

  const messageDate = [
    { id: '1', message: 'Hi' },
    { id: '2', message: 'How are you?' },
    { id: '3', message: 'Hello' },
  ]

//   const postDate = [
//     {id: '1', post: 'Hello World'},
//     {id: '2', post: 'My name Slava Kapski'},
//     {id: '3', post: 'I like React'},
//     {id: '5', post: 'Good job!'},
// ]

  return (
    <div className='container'>
      <div>
        <Header />
      </div>
      <div className='mainWrapper'>
        <Routes>
          <Route path='/Social-network' element={<Propfile/>} />
          <Route path='/profile' element={<Propfile/>} />
          <Route path='/dialogs' element={<Dialogs dialogsDate={dialogsDate} messageDate={messageDate} />} />
        </Routes>
      </div>
    </div>
  );
}
