import React from 'react';
import {shallow} from 'enzyme';
import LoadingPage from './LoadingPage';

let wrapper, startLogout;

beforeEach(() => {
    startLogout = jest.fn();
    wrapper = shallow(
        <LoadingPage />
    );
})

test('should render LoadingPage', () => {
    expect(wrapper).toMatchSnapshot();
});