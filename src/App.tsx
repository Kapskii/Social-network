import React, { FC } from 'react';
import './App.css';
import { Header } from './Components/Header/Header';
import { Propfile } from './Components/Profile/Propfile';
import { Dialogs } from './Components/Dialogs/Dialogs';
import { Route, Routes } from 'react-router-dom';
import { ActionType, StateType } from './redux/types';


type AppPropsType = {
  data: StateType
  dispatch: (action: ActionType) => void
}

export const App: FC<AppPropsType> = ({ data, dispatch}) => {
  return (
    <div className='container'>
      <div>
        <Header />
      </div>
      <div className='mainWrapper'>
        <Routes>
          <Route path='/profile' element={<Propfile profilePage={data.profilePage} dispatch={dispatch} />} />
          <Route path='/dialogs' element={<Dialogs dialogsPage={data.dialogsPage} dispatch={dispatch} />} />
        </Routes>
      </div>
    </div>
  );
}
