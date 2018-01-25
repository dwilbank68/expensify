import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import ExpenseForm from './ExpenseForm.jsx';
import {startAddExpense} from '../actions/expensesActionGenerators';

// import AddExpense from './AddExpense.jsx';
// const AddExpense = (props) => {
export
class AddExpense extends React.Component {
    
    onSubmit = (expense) => {
        this.props.startAddExpense(expense);
        this.props.history.push('/');
    }

    render() {
        return (
            <div>
                <div className="page-header">
                    <div className="content-container">
                        <h1 className="page-header__title">
                            Add Expense
                        </h1>

                    </div>
                </div>
                <div className="content-container">
                    <ExpenseForm onSubmit={this.onSubmit}/>
                </div>
            </div>
        );
    }

};

const mapDispatchToProps = (dispatch) => {
    return {
        startAddExpense: (expenseObj) => dispatch(startAddExpense(expenseObj))
    }
};


export default connect(undefined, mapDispatchToProps)(AddExpense);
