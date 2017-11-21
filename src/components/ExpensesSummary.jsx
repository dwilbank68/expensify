import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import totalExpenses from '../selectors/expenseTotal';
import getVisibleExpenses from '../selectors/expenseFunctions';

import numeral from 'numeral';

// import ExpensesSummary from './ExpensesSummary.jsx';
// const ExpensesSummary = (props) => {
export
const ExpensesSummary = ({expenseCount, expenseTotal}) => {

    const units = expenseCount === 1 ? 'expense' : 'expenses';
    const expenseTotalFormatted = numeral(expenseTotal/100).format('$0,0.00')

    return (
        <div className="expenses-summary">
            <pre>
                <h1>
                    Viewing {expenseCount} {units} totalling {expenseTotalFormatted}
                </h1>
            </pre>
        </div>
    );
};

const mapStateToProps = state => {
    const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
    return {
        expenseCount: visibleExpenses.length,
        expenseTotal: totalExpenses(visibleExpenses)
    }
};


// ExpensesSummary.defaultProps = {};
// ExpensesSummary.propTypes = {
//     name:        PropTypes.string.isRequired,
//     id:          PropTypes.oneOfType([ PropTypes.number, PropTypes.string ]).isRequired,
//     message:     PropTypes.shape({ title: PropTypes.string, text: PropTypes.string }).isRequired,
//     comments:    PropTypes.arrayOf(React.PropTypes.object),
//     date:        PropTypes.instanceOf(Date)
// };
//
// PropTypes -> array, bool, func, number, object, string, symbol

// export default ExpensesSummary;
export default connect(mapStateToProps)(ExpensesSummary);