import React, { FC } from 'react';
import './App.css';
import { Header } from './Components/Header/Header';
import { Propfile } from './Components/Profile/Propfile';
import { Dialogs, DialogsDateType } from './Components/Dialogs/Dialogs';
import { Route, Routes } from 'react-router-dom';
import { StateType } from './redux/types';


type AppPropsType = {
  data: StateType
}

export const App:FC<AppPropsType> = ({data}) => {
  return (
    <div className='container'>
      <div>
        <Header />
      </div>
      <div className='mainWrapper'>
        <Routes>
          <Route path='/Social-network' element={<Propfile post={data.profilePage.post} />} />
          <Route path='/profile' element={<Propfile post={data.profilePage.post} />} />
          <Route path='/dialogs' element={<Dialogs dialogsDate={data.dialogsPage.dialog} messageDate={data.dialogsPage.message} />} />
        </Routes>
      </div>
    </div>
  );
}
