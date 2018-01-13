import uuid from 'uuid';
import database from '../firebase/firebase.js';

////////////////////////////// Create //////////////////////////////

export const addExpense =
    (expense) => ({
        type: 'ADD_EXPENSE',
        expense
    });

export const startAddExpense =
    (expenseData={}) => {
        return (dispatch, getState) => {
            const uid = getState().auth.uid;
            const {description='', note='', amount=0, createdAt=0} = expenseData;
            const expense = {description, note, amount, createdAt};
            return (                                        // 1
                database
                    .ref(`users/${uid}/expenses`)
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

///////////////////////// READ ////////////////////////////

export const setExpenses = (expenses) => {
    return {
        type: 'SET_EXPENSES',
        expenses
    }
};

export const startSetExpenses =
    () => {
        return (dispatch, getState) => {
            const uid = getState().auth.uid;
            return (
                database
                    .ref(`users/${uid}/expenses`)
                    .once('value')
                    .then(snapshot => {
                        const expensesArray = [];
                        snapshot.forEach(s => {
                            expensesArray.push({
                                id: s.key,
                                ...s.val()
                            })
                        })
                        dispatch(setExpenses(expensesArray))
                    })
            )
        }
    };

////////////////////////////// Update //////////////////////////////

export const editExpense =
    (id, updates) => ({
        type: 'EDIT_EXPENSE',
        id, updates
    });

export const startEditExpense =
    (id, updates) => {
        return (dispatch, getState) => {
            const uid = getState().auth.uid;
            return (
                database
                    .ref(`users/${uid}/expenses`)            // 1
                    .child(id)
                    .update(updates)
                    .then(() => {
                        dispatch(editExpense(id, updates))
                    })
            )
        }
    }

// 1 -  or ref(`expenses/${id}`)

////////////////////////////// Delete //////////////////////////////

export const removeExpense =
    ({ id } = {}) => ({
        type: 'REMOVE_EXPENSE',
        id
    });

export const startRemoveExpense =
    ({id}) => {
        return (dispatch, getState) => {
            const uid = getState().auth.uid;
            return (
                database
                    .ref(`users/${uid}/expenses`)
                    .child(id)
                    .remove()
                    .then(() => {
                        dispatch(removeExpense({id}))
                    })
            )
        }
    }