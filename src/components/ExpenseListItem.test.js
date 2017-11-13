import React from 'react';
import {shallow} from 'enzyme';
import {ExpenseListItem} from './ExpenseListItem';

import expenses from '../tests/fixtures/expenses';

test('should render ExpenseListItem with an expense', () => {
    const exp1 = expenses[1];
    const wrapper = shallow(
        <ExpenseListItem {...exp1}/>
    )
    expect(wrapper).toMatchSnapshot();
})