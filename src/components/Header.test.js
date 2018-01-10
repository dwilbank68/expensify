import React from 'react';
import {shallow} from 'enzyme';
import {Header} from './Header';

let wrapper, startLogout;

beforeEach(() => {
    startLogout = jest.fn();
    wrapper = shallow(
        <Header startLogout={startLogout}/>
    );
})

test('should render Header', () => {
    expect(wrapper).toMatchSnapshot();
});

test('should call startLogout on button click', () => {
    wrapper
        .find('button')
        .simulate('click')
    expect(startLogout).toHaveBeenCalled();
})

// .toBe        compare arrays - ensure they are same object, or check numbers
// .toEqual     compare content of arrays, objects