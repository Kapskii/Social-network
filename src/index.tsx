import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { App } from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { state } from './redux/state';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

// const postDate = [
//   {id: '1', post: 'Hello World'},
//   {id: '2', post: 'My name Slava Kapski'},
//   {id: '3', post: 'I like React'},
//   {id: '5', post: 'Good job!'},
// ]

// const dialogsDate = [
//   { id: '1', name: 'Slava' },
//   { id: '2', name: 'Olya' },
//   { id: '3', name: 'Vadim' },
// ]

// const messageDate = [
//   { id: '1', message: 'Hi' },
//   { id: '2', message: 'How are you?' },
//   { id: '3', message: 'Hello' },
// ]

// post={postDate} dialogs={dialogsDate} message={messageDate}

root.render(
  <BrowserRouter>
    <App appState={state}  />
  </BrowserRouter>
);

reportWebVitals();
