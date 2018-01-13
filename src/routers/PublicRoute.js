import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {Route, Redirect} from 'react-router-dom';

import ExpenseDashboard from '../components/ExpenseDashboard.jsx';

// import PublicRoute from './PublicRoute.jsx';
// const PublicRoute = (props) => {
const PublicRoute = ({isAuthenticated, component: Component, ...rest}) => {
    return (
        <Route {...rest} component={props => (
            isAuthenticated ?
                <div>
                    <Redirect to="/dashboard" />
                </div>
                :
                <Component {...props}/>
        )}/>
    );
}


const mapStateToProps = state => ({
   isAuthenticated: !!state.auth.uid
});

export default connect(mapStateToProps)(PublicRoute);