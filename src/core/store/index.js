import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from '../reducers';
import { debounce } from '../utils';
import { screenResize } from '../actions/globalActions';

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

// update currentDevice props upon browser resize
window.addEventListener(
    'resize',
    debounce(() => {
        store.dispatch(screenResize());
    }, 500)
);
store.dispatch(screenResize());

export default store;
