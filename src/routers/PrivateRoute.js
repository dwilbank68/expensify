import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {Route, Redirect} from 'react-router-dom';
import Header from '../components/Header';

// import PrivateRoute from './PrivateRoute.jsx';
// const PrivateRoute = (props) => {
const PrivateRoute = ({isAuthenticated, component: Component, ...rest}) => {
    return (
        <Route {...rest} component={props => (
            isAuthenticated ?
                <div>
                    <Header/>
                    <Component {...props}/>
                </div>
                : <Redirect to="/"/>
        )}/>
    );
}


const mapStateToProps = state => ({
   isAuthenticated: !!state.auth.uid
});

export default connect(mapStateToProps)(PrivateRoute);