import React from 'react';
import {shallow} from 'enzyme';
import {ExpensesSummary} from './ExpensesSummary';

import expenses from '../tests/fixtures/expenses';

test('should render ExpensesSummary with 1 expense', () => {
    const wrapper = shallow(
        <ExpensesSummary    expenseCount={1}
                            expenseTotal={9500}/>
    )
    expect(wrapper).toMatchSnapshot();
})

test('should render ExpensesSummary with 2 expenses', () => {
    const wrapper = shallow(
        <ExpensesSummary    expenseCount={2}
                            expenseTotal={19500}/>
    )
    expect(wrapper).toMatchSnapshot();
})