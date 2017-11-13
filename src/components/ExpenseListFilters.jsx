import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {DateRangePicker} from 'react-dates';

import { setTextFilter,
        sortByAmount,
        sortByDate,
        setStartDate,
        setEndDate } from '../actions/filtersActionGenerators';

// const ExpenseListFilters = (props) => {
// const ExpenseListFilters = ({filters, dispatch}) => {
export
class ExpenseListFilters extends Component {

    state = {
        calendarFocused: null
    }

    handleOnChange = (e) => {
        e.target.value === 'amount' ?
            this.props.sortByAmount() :
            this.props.sortByDate();
    }

    onDatesChange = ({startDate, endDate}) => {
        this.props.setStartDate(startDate);
        this.props.setEndDate(endDate);
    }

    onFocusChange = (calendarFocused) => {
        this.setState(() => ({ calendarFocused }));
    }

    onTextChange = (e) => {
        this.props.setTextFilter(e.target.value)
    }

    render() {
        return (
            <div className="expense-list-filters">
                <input  type="text"
                        onChange={this.onTextChange}
                        value={this.props.filters.text}/>
                <select name="" id=""
                        onChange={this.handleOnChange}
                        value={this.props.filters.sortBy}>
                    <option value="date">Date</option>
                    <option value="amount">Amount</option>
                </select>

                <DateRangePicker    startDate={this.props.filters.startDate}
                                    endDate={this.props.filters.endDate}
                                    onDatesChange={this.onDatesChange}
                                    focusedInput={this.state.calendarFocused}
                                    onFocusChange={this.onFocusChange}

                                    numberOfMonths={1}
                                    isOutsideRange={(day) => false}
                                    showClearDates={true}/>

            </div>
        );
    }


};

const mapStateToProps = (state, ownProps) => ({
    filters: state.filters
});

const mapDispatchToProps = (dispatch) => ({
    setTextFilter: (text) => dispatch(setTextFilter(text)),
    sortByDate: () => dispatch(sortByDate()),
    sortByAmount: () => dispatch(sortByAmount()),
    setStartDate: (startDate) => dispatch(setStartDate(startDate)),
    setEndDate: (endDate) => dispatch(setEndDate(endDate)),
})

// ExpenseListFilters.defaultProps = {};
// ExpenseListFilters.propTypes = {
//     name:        PropTypes.string.isRequired,
//     id:          PropTypes.oneOfType([ PropTypes.number, PropTypes.string ]).isRequired,
//     message:     PropTypes.shape({ title: PropTypes.string, text: PropTypes.string }).isRequired,
//     comments:    PropTypes.arrayOf(React.PropTypes.object),
//     date:        PropTypes.instanceOf(Date)
// };
//
// PropTypes -> array, bool, func, number, object, string, symbol

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ExpenseListFilters);