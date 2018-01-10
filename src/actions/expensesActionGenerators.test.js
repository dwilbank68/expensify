import {addExpense, startAddExpense,
        removeExpense, startRemoveExpense,
        editExpense, startEditExpense,
        setExpenses, startSetExpenses
} from './expensesActionGenerators';
import expenses from '../tests/fixtures/expenses.js';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import database from '../firebase/firebase.js';

const createMockStore = configureMockStore([thunk]);

beforeEach((done) => {
    const expensesData = {};
    expenses.forEach(({id, description, note, amount, createdAt}) => {
        expensesData[id] = {description, note, amount, createdAt};
    })
    database
        .ref('expenses')
        .set(expensesData)
        .then(() => done());                                            // 1
})

// 1 -  without 'done', the tests might start before the db was populated



//////////////////////// CREATE /////////////////////////

test('should return ADD_EXPENSE action obj', () => {
    const expenseObj = expenses[2];
    const action = addExpense(expenseObj);
    expect(action).toEqual({
        type:'ADD_EXPENSE',
        expense: expenses[2]
    })
})

test('should add expense to database and store', (done) => {
    const store = createMockStore({});
    const expenseData = {
        description: 'Mouse', amount: 3000, note: 'sqweek' , createdAt: 1000
    }
    store
        .dispatch(startAddExpense(expenseData))
        .then(() => {                                   // 1
            const actions = store.getActions();
            expect(actions[0]).toEqual({                // 2
                type: 'ADD_EXPENSE',
                expense: {
                    id: expect.any(String),
                    ...expenseData
                }
            })
            return database
                .ref(`expenses/${actions[0].expense.id}`)
                .once('value')
        })
        .then(snapshot => {
            expect(snapshot.val()).toEqual(expenseData)
            done();
        })
})

test('should add expense with defaults to database and store', (done) => {
    const store = createMockStore({});
    const expectedDefaultExpense = {
        description: '',
        amount: 0,
        createdAt: 0,
        note: ''
    }
    store
        .dispatch(startAddExpense({}))
        .then(() => {                                   // 1
            const actions = store.getActions();

            expect(actions[0]).toEqual({                // 2
                type: 'ADD_EXPENSE',
                expense: {
                    id: expect.any(String),
                    ...expectedDefaultExpense
                }
            })
            return database
                .ref(`expenses/${actions[0].expense.id}`)
                .once('value')
        })
        .then(snapshot => {
            expect(snapshot.val()).toEqual(expectedDefaultExpense)
            done();
        })
})


// 1 -  we can only chain 'then' because we RETURNed 'database.ref.push.then'
//      in the action generator

/////////////////////////////// READ ////////////////////////////

test('should return SET_EXPENSES action obj with data', () => {
    const action = setExpenses(expenses);
    expect(action).toEqual({
        type:'SET_EXPENSES',
        expenses: expenses
    });
})

test('should fetch expenses from firebase', (done) => {
    const store = createMockStore({});
    store
        .dispatch(startSetExpenses({}))
        .then(() => {                                   // 1
            const actions = store.getActions();

            expect(actions[0]).toEqual({                // 2
                type: 'SET_EXPENSES',
                expenses
            });
            done();
        });
})

////////////////////// UPDATE //////////////////////////

test('should return EDIT_EXPENSE action obj', () => {
    const updatesObj = {note: 'new note stuff'};
    const action = editExpense('123abc', updatesObj);
    expect(action).toEqual({
        type:'EDIT_EXPENSE',
        id:'123abc', updates: updatesObj
    });
})

test('should edit expense from firebase', (done) => {
    const store = createMockStore({});
    const id = expenses[2].id;
    const updates = {
        description: 'renty',
        amount: 666
    }
    store
        .dispatch(startEditExpense(id, updates))
        .then(() => {                                   // 1
            const actions = store.getActions();
            expect(actions[0]).toEqual({                // 2
                type: 'EDIT_EXPENSE',
                id,
                updates
            });
            return database
                .ref(`expenses/${id}`)
                .once('value')
        })
        .then(snapshot => {
            expect(snapshot.val()).toEqual({
                amount: 666, description: 'renty',
                note:'', createdAt: 345600000
            })
            done();
        });
})

///////////////////// DELETE ///////////////////////

test('should remove expenses from firebase', (done) => {
    const store = createMockStore({});
    const id = expenses[2].id;
    store
        .dispatch(startRemoveExpense({id}))
        .then(() => {                                   // 1
            const actions = store.getActions();
            expect(actions[0]).toEqual({                // 2
                type: 'REMOVE_EXPENSE',
                id
            });
            return database
                        .ref(`expenses/${id}`)
                        .once('value')
        })
        .then(snapshot => {
            expect(snapshot.val()).toBeFalsy();
            done();
        });
})

// .toBe        compare arrays - ensure they are same object, or check numbers
// .toEqual     compare content of arrays, objects

test('should return REMOVE_EXPENSE action obj', () => {
    const action = removeExpense({id:'123abc'});
    expect(action).toEqual({
        type:'REMOVE_EXPENSE',
        id: '123abc'
    })
})