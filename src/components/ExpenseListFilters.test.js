import React from 'react';
import {shallow} from 'enzyme';
import moment from 'moment';
import {ExpenseListFilters} from './ExpenseListFilters';

import {filters, noFilters} from '../tests/fixtures/filters';

let setTextFilter, sortByDate, sortByAmount,
    setStartDate, setEndDate, wrapper;

beforeEach(() => {
    setTextFilter = jest.fn();
    sortByDate = jest.fn();
    sortByAmount = jest.fn();
    setStartDate = jest.fn();
    setEndDate = jest.fn();
    wrapper = shallow(
        <ExpenseListFilters filters={noFilters}
                            setTextFilter={setTextFilter}
                            sortByDate={sortByDate}
                            sortByAmount={sortByAmount}
                            setStartDate={setStartDate}
                            setEndDate={setEndDate}/>
    );
})

test('should render ExpenseListFilters with noFilters', () => {
    expect(wrapper).toMatchSnapshot();
})

test('should render ExpenseListFilters with filters', () => {
    wrapper.setProps({filters:filters});
    expect(wrapper).toMatchSnapshot();
})

test('should handle text change', () => {
    const value = 'diddly';
    wrapper
        .find('input')
        .find('input').at(0)
        .simulate('change', {target: {value}})
    expect(setTextFilter).toHaveBeenLastCalledWith(value);
})

test('should sort by date', () => {
    const value = 'date';
    wrapper.setProps({filters:noFilters});
    wrapper
        .find('select')
        .simulate('change', {target: {value}})
    expect(sortByDate).toHaveBeenCalled();
 })

test('should sort by amount', () => {
    const value = 'amount';
    wrapper
        .find('select')
        .simulate('change', {target: {value}})
    expect(sortByAmount).toHaveBeenCalled();
})

test('should handle date changes', () => {
    const startDate = moment(0).add(4, 'years');
    const endDate = moment(0).add(8, 'years');
    wrapper
        .find('DateRangePicker')
        .prop('onDatesChange')({startDate, endDate})
    expect(setStartDate).toHaveBeenCalledWith(startDate);
    expect(setEndDate).toHaveBeenCalledWith(endDate);
})

test('should handle date focus changes', () => {
    const calendarFocused = 'endDate'           // 1
    wrapper
        .find('DateRangePicker')
        .prop('onFocusChange')(calendarFocused)
    expect(wrapper.state('calendarFocused')).toBe(calendarFocused);
})

// 1 -  or null, or 'startDate'