import moment from 'moment';

import { setTextFilter,
        sortByDate, sortByAmount,
        setStartDate, setEndDate } from './filtersActionGenerators';

test('should generate SET_START_DATE action obj', () => {
    const action = setStartDate(moment(0));
    expect(action).toEqual({
        type: 'SET_START_DATE',
        startDate: moment(0)
    })
})

test('should generate SET_END_DATE action obj', () => {
    const action = setEndDate(moment(0));
    expect(action).toEqual({
        type: 'SET_END_DATE',
        endDate: moment(0)
    })
})

test('should generate SORT_BY_DATE action obj', () => {
    const action = sortByDate();
    expect(action).toEqual({
        type: 'SORT_BY_DATE'
    })
})

test('should generate SORT_BY_AMOUNT action obj', () => {
    const action = sortByAmount();
    expect(action).toEqual({
        type: 'SORT_BY_AMOUNT'
    })
})

test('should generate SET_TEXT_FILTER action obj', () => {
    const action = setTextFilter('dibby');
    expect(action).toEqual({
        type: 'SET_TEXT_FILTER',
        text: 'dibby'
    })
})

test('should generate SET_TEXT_FILTER action obj with default', () => {
    const action = setTextFilter();
    expect(action).toEqual({
        type: 'SET_TEXT_FILTER',
        text: ''
    })
})