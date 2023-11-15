import React, { FC } from 'react';
import './App.css';
import { Header } from './Components/Header/Header';
import { Propfile } from './Components/Profile/Propfile';
import { Dialogs } from './Components/Dialogs/Dialogs';
import { Route, Routes } from 'react-router-dom';
import { StateType } from './redux/types';


type AppPropsType = {
  data: StateType
  addPost: (text:string | undefined)=>void
}

export const App:FC<AppPropsType> = ({data, addPost}) => {
  return (
    <div className='container'>
      <div>
        <Header />
      </div>
      <div className='mainWrapper'>
        <Routes>
          <Route path='/profile' element={<Propfile post={data.profilePage.post} addPost={addPost}/>} />
          <Route path='/dialogs' element={<Dialogs dialogsDate={data.dialogsPage.dialog} messageDate={data.dialogsPage.message} />} />
        </Routes>
      </div>
    </div>
  );
}
