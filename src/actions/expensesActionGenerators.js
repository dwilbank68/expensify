import uuid from 'uuid';
import database from '../firebase/firebase.js';

export const addExpense =
    (expense) => ({
        type: 'ADD_EXPENSE',
        expense
    });

export const startAddExpense =
    (expenseData={}) => {
        return (dispatch) => {
            const {description='', note='', amount=0, createdAt=0} = expenseData;
            const expense = {description, note, amount, createdAt};
            return (                                        // 1
                database
                    .ref('expenses')
                    .push(expense)
                    .then(ref => {
                        dispatch(addExpense({
                            id: ref.key,
                            ...expense
                        }))
                    })
            )
        }
    }

// 1 -  returned so that another promise can be chained for testing
//      purposes. Test will therefore not run until after expense
//      has been pushed onto 'expenses' and addExpense has been
//      dispatched

export const removeExpense =
    ({ id } = {}) => ({
        type: 'REMOVE_EXPENSE',
        id
    });

export const editExpense =
    (id, updates) => ({
        type: 'EDIT_EXPENSE',
        id, updates
    });

export const setExpenses = (expenses) => {
    return {
        type: 'SET_EXPENSES',
        expenses
    }
};

export const startSetExpenses =
    () => {
        return (dispatch) => {
            return (
                database
                    .ref('expenses')
                    .once('value')
                    .then(snapshot => {
                        const expensesArray = [];
                        snapshot.forEach(s => {
                            expensesArray.push({
                                id: s.key,
                                ...s.val()
                            })
                        })
                        console.log('------------------------------------------');
                        console.log('expensesArray ',expensesArray);
                        console.log('------------------------------------------');
                        dispatch(setExpenses(expensesArray))
                    })
            )
        }
    };