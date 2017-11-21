import expenses from '../tests/fixtures/expenses';
import expenseTotal from './expenseTotal';


test('should return 0 if no expenses', () => {
    const result = expenseTotal([]);
    expect(result).toBe(0);
})

test('should correctly sum a single expenses', () => {
    const result = expenseTotal([expenses[1]]);
    expect(result).toBe(expenses[1].amount);
})

test('should correctly sum multiple expenses', () => {
    const result = expenseTotal(expenses);
    expect(result).toBe(114195);
})

// .toBe        compare arrays - ensure they are same object, or check numbers
// .toEqual     compare content of arrays, objects

