import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import ExpenseForm from './ExpenseForm.jsx';
import {addExpense} from '../actions/expensesActionGenerators';

// import AddExpense from './AddExpense.jsx';
// const AddExpense = (props) => {
export
class AddExpense extends React.Component {
    
    onSubmit = (expense) => {
        this.props.addExpense(expense);
        this.props.history.push('/');
    }

    render() {
        return (
            <div>
                <h1>Add Expense</h1>
                <ExpenseForm onSubmit={this.onSubmit}/>
            </div>
        );
    }

};

const mapDispatchToProps = (dispatch) => {
    return {
        addExpense: (expenseObj) => dispatch(addExpense(expenseObj))
    }
};


export default connect(undefined, mapDispatchToProps)(AddExpense);
