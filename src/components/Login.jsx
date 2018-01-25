import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {startLoginAG} from '../actions/authActionGenerators.js';
// import Login from './Login.jsx';
// const Login = (props) => {
export
const Login = ({startLogin}) => {

    return (
        <div className="box-layout">
            <div className="box-layout__box">
                <h1 className="box-layout__title">
                    Expensify
                </h1>
                <p>Get your expenses under control</p>
                <button onClick={startLogin}
                        className="button">
                    Login with Google
                </button>
            </div>
        </div>
    );
};


const mapDispatchToProps = (dispatch) => ({
    startLogin: () => dispatch(startLoginAG())
});


export default connect(undefined, mapDispatchToProps)(Login);