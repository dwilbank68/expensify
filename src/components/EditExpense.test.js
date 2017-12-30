import React from 'react';
import {shallow} from 'enzyme';
import {EditExpense} from './EditExpense';

import expenses from '../tests/fixtures/expenses';

let startEditExpense, startRemoveExpense, history, wrapper;

beforeEach(() => {
    startEditExpense = jest.fn();
    startRemoveExpense = jest.fn();
    history = {push: jest.fn()};
    wrapper = shallow(
        <EditExpense    startEditExpense={startEditExpense}
                        startRemoveExpense={startRemoveExpense}
                        history={history}
                        expense={expenses[2]}/>
    );
})

test('should render EditExpense', () => {
    expect(wrapper).toMatchSnapshot();
})

test('should handle startEditExpense', () => {
    wrapper
        .find('ExpenseForm')
        .prop('onSubmit')
        (expenses[2])
    expect(history.push).toHaveBeenLastCalledWith('/');
    expect(startEditExpense).toHaveBeenLastCalledWith(expenses[2].id, expenses[2]);
})
//
test('should handle removeExpense', () => {
    wrapper
        .find('button')
        .simulate('click');
    expect(history.push).toHaveBeenLastCalledWith('/');
    expect(startRemoveExpense).toHaveBeenLastCalledWith({'id': expenses[2].id});
})
// // 1 -  or 'click', 'change'
// //      note that you pass a mock 'event' as the 2nd arg,
// //      otherwise the component's 'onSubmit' func will try to
// //      call 'preventDefault' on nothing
//

