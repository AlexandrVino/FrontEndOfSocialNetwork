import './index.css';
import reportWebVitals from './reportWebVitals';
import {renderPage} from "./render";
import {addPost} from "./redux/state";
import state from "./redux/state";

renderPage(state, addPost)

reportWebVitals();
