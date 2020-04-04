import React, { StrictMode } from 'react';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom';
import 'moment/locale/tr';
import store from './core/store';
import './assets/styles/bootstrap-grid.scss'; // Import Bootstrap Grid's
import './assets/styles/global.scss';
import * as serviceWorker from './serviceWorker';
import Root from './core/Root';

ReactDOM.render(
    <StrictMode>
        <Provider store={store}>
            <Root />
        </Provider>
    </StrictMode>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
