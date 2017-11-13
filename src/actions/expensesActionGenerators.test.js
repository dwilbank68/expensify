import {addExpense,
        removeExpense,
        editExpense} from './expensesActionGenerators';


test('should return REMOVE_EXPENSE action obj', () => {
    const action = removeExpense({id:'123abc'});
    expect(action).toEqual({
        type:'REMOVE_EXPENSE',
        id: '123abc'
    })
})

test('should return EDIT_EXPENSE action obj', () => {
    const updatesObj = {note: 'new note stuff'};
    const action = editExpense('123abc', updatesObj);
    expect(action).toEqual({
        type:'EDIT_EXPENSE',
        id:'123abc', updates: updatesObj
    })
})

test('should return ADD_EXPENSE action obj', () => {
    const expenseObj = {
        description: 'Test Rent',
        amount: 109500,
        createdAt: 1000,
        note: 'Test notey notes woohoo'
    }
    const action = addExpense(expenseObj);
    expect(action).toEqual({
        type:'ADD_EXPENSE',
        expense: {
            ...expenseObj,
            id: expect.any(String)
        }
    })
})

test('should return ADD_EXPENSE action obj with default values', () => {
    const action = addExpense();
    expect(action).toEqual({
        type:'ADD_EXPENSE',
        expense: {
            description:'',
            note:'',
            amount: 0,
            createdAt:0,
            id: expect.any(String)
        }
    })
})
