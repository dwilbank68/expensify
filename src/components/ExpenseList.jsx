import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import ExpenseListItem from './ExpenseListItem.jsx';
import getVisibleExpenses from '../selectors/expenseFunctions';
// import ExpenseList from './ExpenseList.jsx';
// const ExpenseList = (props) => {
export
const ExpenseList = ({expenses}) => {

    // no lifecycle methods
    // no refs

    const renderExpenses = () => {

        return expenses.length === 0 ?
            <p>No expenses</p> :
            expenses.map((e) => {
                return <ExpenseListItem {...e} key={e.id}/>
            })
    }

    return (
        <div className="expense-list">
            {renderExpenses()}
        </div>
    );
};

//function mapStateToProps(state, ownProps) {
//    return { whatever: state.whatever }
//}
//or
const mapStateToProps = state => ({
   expenses: getVisibleExpenses(state.expenses, state.filters)
});


// ExpenseList.defaultProps = {};
// ExpenseList.propTypes = {
//     name:        PropTypes.string.isRequired,
//     id:          PropTypes.oneOfType([ PropTypes.number, PropTypes.string ]).isRequired,
//     message:     PropTypes.shape({ title: PropTypes.string, text: PropTypes.string }).isRequired,
//     comments:    PropTypes.arrayOf(React.PropTypes.object),
//     date:        PropTypes.instanceOf(Date)
// };
//
// PropTypes -> array, bool, func, number, object, string, symbol

export default connect(mapStateToProps)(ExpenseList);