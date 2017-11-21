const totalExpenses = (expenses) => {
    return expenses
                .map(exp => exp.amount)
                .reduce((total, amt) => total + amt, 0);
}

export default totalExpenses;