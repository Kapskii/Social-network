import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { addPost, state, subscribe, updateTextArea } from './redux/state';
import { App } from './App';
import { HashRouter } from 'react-router-dom';
import { StateType } from './redux/types';
import './index.css';



const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);

const rerenderEntire = (state: StateType) => {
    root.render(
        <HashRouter>
            <App data={state} addPost={addPost} updateTextArea={updateTextArea} />
        </HashRouter>
    );
}


rerenderEntire(state);

subscribe(rerenderEntire);

reportWebVitals();

