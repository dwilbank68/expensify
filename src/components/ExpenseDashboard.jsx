import React from 'react';
import PropTypes from 'prop-types';
import ExpenseList from './ExpenseList';
import ExpensesSummary from './ExpensesSummary';

import ExpenseListFilters from './ExpenseListFilters.jsx';

// import ExpenseDashboard from './ExpenseDashboard.jsx';
// const ExpenseDashboard = (props) => {
const ExpenseDashboard = ({whatever1, whatever2}) => {
    // no lifecycle methods
    // no refs

    const methodName = (e) => {
        //
    }

    return (
        <div>
            <ExpensesSummary/>
            <ExpenseListFilters/>
            <ExpenseList/>
        </div>
    );
};


// ExpenseDashboard.defaultProps = {};
// ExpenseDashboard.propTypes = {
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

export default ExpenseDashboard;
