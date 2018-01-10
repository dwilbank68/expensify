import React from 'react';
import {shallow} from 'enzyme';
import moment from 'moment';
import ExpenseForm from './ExpenseForm';

import expenses from '../tests/fixtures/expenses';


test('should render ExpenseForm', () => {
    const wrapper = shallow(<ExpenseForm/>);
    expect(wrapper).toMatchSnapshot();
})

test('should render ExpenseForm with data', () => {
    const expense = expenses[1];
    const wrapper = shallow(<ExpenseForm expense={expense}/>);
    expect(wrapper).toMatchSnapshot();
})

test('should render error for invalid form data', () => {
    const wrapper = shallow(<ExpenseForm/>);
    expect(wrapper).toMatchSnapshot();
    wrapper
        .find('form')
        .simulate('submit', {
            preventDefault: () => {}
        })         // 1
    expect(wrapper.state('error').length).toBeGreaterThan(0);
    expect(wrapper).toMatchSnapshot();
})

// 1 -  or 'click', 'change'
//      note that you pass a mock 'event' as the 2nd arg,
//      otherwise the component's 'onSubmit' func will try to
//      call 'preventDefault' on nothing

test('should set description on input change', () => {
    const wrapper = shallow(<ExpenseForm/>);
    const value = 'New Descriptioni'
    wrapper
        .find('input').at(0)
        .simulate('change', {target: {value}})
    expect(wrapper.state('description')).toBe(value);
})

test('should set note on textarea change', () => {
    const wrapper = shallow(<ExpenseForm/>);
    const value = 'New stuff in notes'
    wrapper
        .find('textarea').at(0)
        .simulate('change', {target: {value}})
    expect(wrapper.state('note')).toBe(value);
})

test('should set amount if valid input', () => {
    const wrapper = shallow(<ExpenseForm/>);
    const value = '23.50';
    wrapper
        .find('input').at(1)
        .simulate('change', {target: {value}})
    expect(wrapper.state('amount')).toBe(value);
})

test('should not set amount if invalid input', () => {
    const wrapper = shallow(<ExpenseForm/>);
    const value = '12.122';
    wrapper
        .find('input').at(1)
        .simulate('change', {target: {value}})
    expect(wrapper.state('amount')).toBe('');
})

test('should call onSubmit prop upon valid submission', () => {
    const onSubmitSpy = jest.fn();
    const wrapper = shallow(<ExpenseForm expense={expenses[0]}
                                         onSubmit={onSubmitSpy}/>);
    wrapper
        .find('form')
        .simulate('submit', {
            preventDefault: () => {}
        });
    expect(wrapper.state('error')).toBe('');
    expect(onSubmitSpy).toHaveBeenLastCalledWith({
        description: expenses[0].description,
        amount: expenses[0].amount,
        note: expenses[0].note,
        createdAt: expenses[0].createdAt
    });
})

test('should set createdAt on date change', () => {
    const wrapper = shallow(<ExpenseForm/>);
    const now = moment();
    wrapper
        .find('SingleDatePicker')
        .prop('onDateChange')(now);
    expect(wrapper.state('createdAt')).toEqual(now);
})

test('should set calendarFocused on focus change', () => {
    const wrapper = shallow(<ExpenseForm/>);
    wrapper
        .find('SingleDatePicker')
        .prop('onFocusChange')({focused:true});
    expect(wrapper.state('calendarFocused')).toEqual(true);
})

// .toBe        compare arrays - ensure they are same object, or check numbers
// .toEqual     compare content of arrays, objects

// .toHaveBeenCalled()
// .toHaveBeenCalledTimes(number)
// .toHaveBeenCalledWith(x, y, ...)
// .toHaveBeenLastCalledWith(x, y, ...)