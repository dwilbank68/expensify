import {createStore, combineReducers} from 'redux';

import _ from 'lodash';
import {} from '../actions/types';

let expDefaultState = [];

var expensesReducer = (state=expDefaultState, action) => {
    switch(action.type){
        // case : return ;
        default: return state;
    };
};

let filtersReducerDefaultState = {
    text: '',
    sortBy: 'date',
    startDate: undefined,
    endDate: undefined
};

var filtersReducer = (state=filtersReducerDefaultState, action) => {
    switch(action.type){
        // case : return ;
        default: return state;
    };
};

export default expensesReducer;

const store = createStore(
    combineReducers({
        expenses: expensesReducer,
        filters: filtersReducer
    })
);
console.log('------------------------------------------');
console.log('store.getState() ',store.getState());
console.log('------------------------------------------');

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

const demoState = {
    expenses: [
        {
            amount: 54500,
            createdAt: 0,
            description: 'Jan rent',
            id: 'asdfasda',
            note: 'final payment'
        }
    ],
    filters: {
        text: 'rent',
        sortBy: 'amount', // or date
        startDate: undefined,
        endDate: undefined
    }
}