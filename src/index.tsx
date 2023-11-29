import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { store } from './redux/redux-store';
import { App } from './App';
import { BrowserRouter } from 'react-router-dom';
import { StateType } from './redux/types';
import './index.css';


const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);

const rerenderEntire = (props: StateType) => {
    root.render(
        <BrowserRouter>
            <App data={store.getState()} dispatch={store.dispatch.bind(store)} />
        </BrowserRouter>
    );
}


rerenderEntire(store.getState());

store.subscribe(() => {
    let state = store.getState();
    rerenderEntire(state)
});

reportWebVitals();

