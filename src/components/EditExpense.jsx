import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import ExpenseForm from './ExpenseForm';
import {startEditExpense, startRemoveExpense} from '../actions/expensesActionGenerators';
// import EditExpense from './EditExpense.jsx';
// const EditExpense = (props) => {

export
class EditExpense extends React.Component {

    removeExp = () => {
        this.props.startRemoveExpense({id:this.props.expense.id});
        this.props.history.push('/');
    }

    onSubmit = (expense) => {
        this.props.startEditExpense(this.props.expense.id, expense);
        this.props.history.push('/');
    }

    render(){
        return (
            <div>
                <ExpenseForm    expense={this.props.expense}
                                onSubmit={this.onSubmit}/>
                <button onClick={this.removeExp}>
                    Remove
                </button>
            </div>
        );
    }

};

const mapDispatchToProps = (dispatch, props) => {
    return {
        startEditExpense: (id, expObj) => (
            dispatch(startEditExpense(id, expObj))
        ),
        startRemoveExpense: (expObj) => (
            dispatch(startRemoveExpense(expObj))
        )
    }
};

const mapStateToProps = (state, props) => {
    return {
        expense: state.expenses.find( exp => {
            return exp.id === props.match.params.id;
        })
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(EditExpense);