import ReactDOM from 'react-dom/client';
import './index.css';
import { App } from './App';
import {  HashRouter } from 'react-router-dom';
import { addPost } from './redux/state';
import { StateType } from './redux/types';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

export let rerenderEntire = (state:StateType) => {
  root.render(
    <HashRouter>
      <App data={state} addPost={addPost}/>
    </HashRouter>
  );
}