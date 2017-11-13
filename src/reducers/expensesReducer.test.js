import expensesReducer from './expensesReducer';
import expenses from '../tests/fixtures/expenses'

test('should set up default values', () => {
    const state = expensesReducer(undefined, {type: '@@INIT'});
    expect(state).toEqual([]);
})

test('should remove expense by id', () => {
    const action = {
        type: 'REMOVE_EXPENSE',
        id: expenses[1].id
    }
    const state = expensesReducer(expenses, action);
    expect(state).toEqual([expenses[0], expenses[2]]);
})

test('should not remove expense by wrong id', () => {
    const action = {
        type: 'REMOVE_EXPENSE',
        id: 'bad-id'
    }
    const state = expensesReducer(expenses, action);
    expect(state).toEqual(expenses);
})

test('should add expense', () => {
    const expense = {
        id: '999', description: 'Porcupine',
        note: '', amount: 999999,
        createdAt: 981984981981
    };
    const action = {
        type: 'ADD_EXPENSE',
        expense
    }
    const state = expensesReducer(expenses, action);
    expect(state).toEqual([...expenses, expense]);
})

test('should edit expense', () => {
    const updates = {
        description: 'Porcupine Feet',
    };
    const action = {
        type: 'EDIT_EXPENSE',
        id: '2',
        updates
    }
    const state = expensesReducer(expenses, action);
    expect(state[1].description).toEqual('Porcupine Feet');
})

test('should not edit expense without proper id', () => {
    const updates = {
        description: 'Porcupine Feet',
    };
    const action = {
        type: 'EDIT_EXPENSE',
        id: 'wrongId ',
        updates
    }
    const state = expensesReducer(expenses, action);
    expect(state).toEqual(expenses);
})