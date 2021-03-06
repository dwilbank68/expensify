import React from 'react';
import {Router, Route, Switch, Link, NavLink} from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import AddExpensePage from '../components/AddExpense';
import EditExpensePage from '../components/EditExpense';
import ExpenseDashboardPage from '../components/ExpenseDashboard';
import Login from '../components/Login';
import NotFoundPage from '../components/NotFound';
import PrivateRoute from './PrivateRoute.js';
import PublicRoute from './PublicRoute.js';

export
const history = createHistory();

const AppRouter = ({whatever1, whatever2}) => (
    <Router history={history}>
        <div>
            <Switch>
                <PublicRoute path="/" component={Login} exact={true} />
                <PrivateRoute path="/dashboard" component={ExpenseDashboardPage} />
                <PrivateRoute path="/create" component={AddExpensePage} />
                <PrivateRoute path="/edit/:id" component={EditExpensePage} />
                <Route          component={NotFoundPage} />
            </Switch>
        </div>
    </Router>
);

export default AppRouter;