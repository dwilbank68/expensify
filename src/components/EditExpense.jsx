import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import ExpenseForm from './ExpenseForm';
import {editExpense, removeExpense} from '../actions/expensesActionGenerators';
// import EditExpense from './EditExpense.jsx';
// const EditExpense = (props) => {

export
class EditExpense extends React.Component {

    removeExp = () => {
        this.props.removeExpense({id:this.props.expense.id});
        this.props.history.push('/');
    }

    onSubmit = (expense) => {
        this.props.editExpense(this.props.expense.id, expense);
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
        editExpense: (id, expObj) => (
            dispatch(editExpense(id, expObj))
        ),
        removeExpense: (expObj) => (
            dispatch(removeExpense(expObj))
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