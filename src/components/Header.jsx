import React from 'react';
import PropTypes from 'prop-types';
import {  NavLink} from 'react-router-dom';


// import Header from './Header.jsx';
// const Header = (props) => {
const Header = ({whatever1, whatever2}) => {
    // no lifecycle methods
    // no refs

    const methodName = (e) => {
        //
    }

    return (
        <div>
            <h1>Expensify</h1>
            <NavLink to="/create" activeClassName="is-active">
                create
            </NavLink>
            <NavLink to="/edit" activeClassName="is-active">
                edit
            </NavLink>
            <NavLink to="/help" activeClassName="is-active">
                help
            </NavLink>
            <NavLink to="/" exact={true} activeClassName="is-active">
                home
            </NavLink>
        </div>
    );
};


// Header.defaultProps = {};
// Header.propTypes = {
//     name:        PropTypes.string.isRequired,
//     hndleIptChg: PropTypes.func,
//     id:          PropTypes.oneOfType([ PropTypes.number, PropTypes.string ]).isRequired,
//     message:     PropTypes.shape({ title: PropTypes.string, text: PropTypes.string }).isRequired,
//     comments:    PropTypes.arrayOf(React.PropTypes.object),
//     todos:       PropTypes.array,
//     isComplete:  PropTypes.bool,
//     id:          PropTypes.number,
//     date:        PropTypes.instanceOf(Date)
// };
//
// PropTypes -> array, bool, func, number, object, string, symbol

export default Header;
