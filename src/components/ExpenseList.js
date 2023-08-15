import Expense from "./Expense";

function ExpenseList({expenses}){
    const groupedExpenses = groupExpensesByYear()
    return (
        <div>
            <h2 className="text-center font-bold text-xl">Expense List</h2>
            {Object.entries(groupedExpenses).sort((a, b) => b[0] - a[0]).map(([year, expensesForYear]) => (
                <div key={year} className="mt-4">
                    <h3 className="text-center font-semibold text-lg">{year}</h3>
                    <ul>
                        {expensesForYear.map((expense) => (
                            <Expense key={expense.id} expense={expense}/>
                            ))}
                    </ul>
                </div>
            ))}
        </div>
    )
};

export default ExpenseList;