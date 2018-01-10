import React from 'react';
import {shallow} from 'enzyme';
import {Login} from './Login';

let startLogin, wrapper;

beforeEach(() => {
   startLogin = jest.fn();
   wrapper = shallow(
       <Login startLogin={startLogin}/>
   );
})

test('should render Login', () => {
    expect(wrapper).toMatchSnapshot();
})

test('should call startLogin on button click', () => {
    wrapper
        .find('button')
        .simulate('click')      //  or 'change', 'submit'
    expect(startLogin).toHaveBeenCalled();

})