import authReducer from './authReducer.js';

test('should LOGIN user with id', () => {
    const uid = "wonky";
    const action = {
        type: 'LOGIN',
        uid
    }
    const state = authReducer({}, action);
    expect(state).toEqual({uid});
})

test('should LOGOUT user', () => {
    const action = {type: 'LOGOUT'}
    const state = authReducer({uid:'boo'}, action);
    expect(state).toEqual({});
})