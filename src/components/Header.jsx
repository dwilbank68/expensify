import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {NavLink} from 'react-router-dom';
import {startLogoutAG} from "../actions/authActionGenerators.js";

// import Header from './Header.jsx';
// const Header = (props) => {
export
const Header = ({startLogout}) => {
    // no lifecycle methods
    // no refs

    const methodName = (e) => {
        //
    }

    return (
        <div>
            <h1>Expensify</h1>
            <NavLink to="/dashboard" activeClassName="is-active">
                Dashboard
            </NavLink>
            <NavLink to="/create" activeClassName="is-active">
                create
            </NavLink>
            <button onClick={startLogout}>
                Logout
            </button>
        </div>
    );
};


const mapDispatchToProps = (dispatch) => ({
    startLogout: () => dispatch(startLogoutAG())
})


export default connect(undefined, mapDispatchToProps)(Header);
