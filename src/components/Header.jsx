import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {startLogoutAG} from "../actions/authActionGenerators.js";

// import Header from './Header.jsx';
// const Header = (props) => {
export
const Header = ({startLogout}) => {
    return (
        <header className="header">
            <div className="content-container">
                <div className="header__content">
                    <Link   to="/dashboard"
                            className="header__title">
                        <h1>Expensify</h1>
                    </Link>
                    <button onClick={startLogout}
                            className="button button--link">
                        Logout
                    </button>
                </div>
            </div>
        </header>
    );
};


const mapDispatchToProps = (dispatch) => ({
    startLogout: () => dispatch(startLogoutAG())
})


export default connect(undefined, mapDispatchToProps)(Header);
