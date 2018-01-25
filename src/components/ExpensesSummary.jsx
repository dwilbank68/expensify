import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

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
            <div className="page-header">
                <div className="content-container">
                    <h1 className="page-header__title">
                        Viewing <span>{expenseCount}</span> {units} totalling <span>{expenseTotalFormatted}</span>
                    </h1>
                    <div className="page-header__actions">
                        <Link   to="/create"
                                className="button">
                            Add Expense
                        </Link>
                    </div>
                </div>
            </div>
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