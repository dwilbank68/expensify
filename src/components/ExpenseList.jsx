import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import ExpenseListItem from './ExpenseListItem.jsx';
import getVisibleExpenses from '../selectors/expenseFunctions';
// import ExpenseList from './ExpenseList.jsx';
// const ExpenseList = (props) => {
export
const ExpenseList = ({expenses}) => {

    const renderExpenses = () => {

        return expenses.length === 0 ?
            <div className="list-item--message">
                <span>
                    No expenses
                </span>
            </div> :
            expenses.map((e) => {
                return <ExpenseListItem {...e} key={e.id}/>
            })
    }

    return (
        <div className="content-container">
            <div className="list-header">
                <div className="show-for-mobile">Expenses</div>
                <div className="show-for-desktop">Expense</div>
                <div className="show-for-desktop">Amount</div>
            </div>
            <div className="list-body">
                {renderExpenses()}
            </div>
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