import './index.css';
import reportWebVitals from './reportWebVitals';
import {rerenderEntire} from './render'
import { state } from './redux/state';



rerenderEntire(state);


reportWebVitals();

