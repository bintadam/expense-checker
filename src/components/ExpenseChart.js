function ExpenseChart({initialExpenses =[]}){

    const expenseData =initialExpenses.map((expense) =>{
        const month = new Date(expense.date).toLocaleString('default', {month:'short'})
        return {
            month: month,
            amount: expense.amount
        }
    })

    const highestExpense = Math.max(...expenseData.map(expense => expense.amount))

    const scaleFactor = 400/highestExpense
    return (
        <div>
            <h6>Expense Chart</h6>
            <div>
                {expenseData.map((expense, index) =>(
                    <div key={index} className="bar" style={{height:`${expense.amount * scaleFactor}px`}}>
                        <div className="bar-horizontal">{expense.month}</div>
                        <div className="bar-vertical">{expense.amount}</div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default ExpenseChart;