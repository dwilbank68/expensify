import React from 'react';
import {shallow} from 'enzyme';
import {EditExpense} from './EditExpense';

import expenses from '../tests/fixtures/expenses';

let editExpense, startRemoveExpense, history, wrapper;

beforeEach(() => {
    editExpense = jest.fn();
    startRemoveExpense = jest.fn();
    history = {push: jest.fn()};
    wrapper = shallow(
        <EditExpense    editExpense={editExpense}
                        startRemoveExpense={startRemoveExpense}
                        history={history}
                        expense={expenses[2]}/>
    );
})

test('should render EditExpense', () => {
    expect(wrapper).toMatchSnapshot();
})

test('should handle editExpense', () => {
    wrapper
        .find('ExpenseForm')
        .prop('onSubmit')
        (expenses[2])
    expect(history.push).toHaveBeenLastCalledWith('/');
    expect(editExpense).toHaveBeenLastCalledWith(expenses[2].id, expenses[2]);
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

