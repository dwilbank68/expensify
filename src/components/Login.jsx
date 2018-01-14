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
            <button onClick={startLogin}>
                Login
            </button>
        </div>
    );
};


const mapDispatchToProps = (dispatch) => ({
    startLogin: () => dispatch(startLoginAG())
});


export default connect(undefined, mapDispatchToProps)(Login);