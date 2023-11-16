import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { store } from './redux/state';
// import { addPost, state, subscribe, updateTextArea } from './redux/state';
import { App } from './App';
import { HashRouter } from 'react-router-dom';
import { StateType } from './redux/types';
import './index.css';



const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);

const rerenderEntire = (props: StateType) => {
    root.render(
        <HashRouter>
            <App data={store.getState()} addPost={store.addPost.bind(store)} updateTextArea={store.updateTextArea.bind(store)} />
        </HashRouter>
    );
}


rerenderEntire(store.getState());

store.subscribe(rerenderEntire);

reportWebVitals();

