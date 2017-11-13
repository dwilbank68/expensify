import _ from 'lodash';
import moment from 'moment';
// import {} from '../actions/types';

let defaultState = {
    text: '',
    sortBy: 'date',
    startDate: moment().startOf('month'),
    endDate: moment().endOf('month')
}

var filtersReducer = (state=defaultState, action) => {
    switch(action.type){
        case 'SET_TEXT_FILTER': return {
            ...state, text: action.text
        };
        case 'SORT_BY_AMOUNT': return {
            ...state, sortBy: 'amount'
        };
        case 'SORT_BY_DATE': return {
            ...state, sortBy: 'date'
        };
        case 'SET_START_DATE': return {
            ...state, startDate: action.startDate
        };
        case 'SET_END_DATE': return {
            ...state, endDate: action.endDate
        };
        default: return state;
    };
};

export default filtersReducer;

////////// paste this in index.js - filtersReducer //////////////

// import filtersReducer from './filtersReducer';

// filtersReducer: filtersReducer

//////////// paste this in test ///////////////

// var expect = require("expect");
// var df = require('deep-freeze-strict');

// var reducers = require("reducers");

// describe('filtersReducer', () => {
//    it('should ', () => {
//        var action = {
//            type: DO_IT
//        }
//        var res = reducers.filtersReducer(df(), df(action));
//        expect(res).toEqual();
//    });
// });



// to return an object when action.payload is an array,
// return _.mapKeys(action.payload.data, 'id');