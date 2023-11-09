import React from 'react';
import './App.css';
import { Header } from './Components/Header/Header';
import { Propfile } from './Components/Profile/Propfile';
import { Dialogs, DialogsDateType } from './Components/Dialogs/Dialogs';
import { Route, Routes } from 'react-router-dom';

type PropsType = {
  post: PostType[]
  dialogs: DialogsType[]
  message: MessageType[]
}

export type PostType = {
  id: string
  post: string
}

export type DialogsType = {
  id: string
  name: string
}

export type MessageType = {
  id: string
  message: string
}


export const App = (props:PropsType) => {
  return (
    <div className='container'>
      <div>
        <Header />
      </div>
      <div className='mainWrapper'>
        <Routes>
          <Route path='/Social-network' element={<Propfile post={props.post} />} />
          <Route path='/profile' element={<Propfile post={props.post} />} />
          <Route path='/dialogs' element={<Dialogs dialogsDate={props.dialogs} messageDate={props.message} />} />
        </Routes>
      </div>
    </div>
  );
}
