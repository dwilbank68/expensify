import {loginAG, logoutAG} from './authActionGenerators.js';

test('should return LOGIN action obj', () => {
    const action = loginAG('hoopdy-doo');
    expect(action).toEqual({
        type:'LOGIN',
        uid: 'hoopdy-doo'
    })
})

test('should return LOGOUT action obj', () => {
    const action = logoutAG();
    expect(action).toEqual({
        type:'LOGOUT'
    })
})