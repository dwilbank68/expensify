import _ from 'lodash';
// import {} from '../actions/types';

let defaultState = [];

var expensesReducer = (state=defaultState, action) => {
    switch(action.type){
        case 'ADD_EXPENSE' : return [
            ...state, action.expense
        ];
        case 'REMOVE_EXPENSE' : return (
            state.filter(({id}) => id !== action.id)
        );
        case 'EDIT_EXPENSE': return (
            state.map( expense => {
                if (expense.id === action.id) {
                    return { ...expense, ...action.updates }
                } else {
                    return expense;
                };
            })
        )
        default: return state;
    };
};

export default expensesReducer;

////////// paste this in index.js - expensesReducer //////////////

// import expensesReducer from './expensesReducer';

// expensesReducer: expensesReducer

//////////// paste this in test ///////////////

// var expect = require("expect");
// var df = require('deep-freeze-strict');

// var reducers = require("reducers");

// describe('expensesReducer', () => {
//    it('should ', () => {
//        var action = {
//            type: DO_IT
//        }
//        var res = reducers.expensesReducer(df(), df(action));
//        expect(res).toEqual();
//    });
// });



// to return an object when action.payload is an array,
// return _.mapKeys(action.payload.data, 'id');