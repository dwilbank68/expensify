import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';

import AppRouter, {history} from './routers/AppRouter';

import configureStore from './store/configureStore';

import {startSetExpenses} from './actions/expensesActionGenerators';
import {loginAG, logoutAG} from './actions/authActionGenerators';

import 'normalize.css/normalize.css';
import './styles/styles.scss';
import 'react-dates/lib/css/_datepicker.css';

import {firebase} from './firebase/firebase.js';

const store = configureStore();

const jsx = (
    <Provider store={store}>
        <AppRouter/>
    </Provider>
)

let hasRendered = false;

const renderApp = () => {
    if (!hasRendered) {
        ReactDOM.render(jsx, document.getElementById('app'));
        hasRendered = true;
    }
}

ReactDOM.render(<p>Loading...</p>, document.getElementById('app'));

firebase
    .auth()
    .onAuthStateChanged((user) => {
        if (user) {
            console.log('log in');
            store.dispatch(loginAG(user.uid));
            store
                .dispatch(startSetExpenses())
                .then(() => {
                    renderApp();
                    if (history.location.pathname === '/') {    // 1
                        history.push('/dashboard');
                    }
                });
        } else {
            console.log('log out');
            store.dispatch(logoutAG());
            renderApp();
            history.push('/');
        }
    });

// 1 -  only redirect the user to the dashboard if he is coming from
//      the login page. If the user starts the app from an edit url,
//      for example, as long as he is logged in, he will reach the
//      edit link and will not be redirected to the dashboard