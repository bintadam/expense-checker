import Expense from "./Expense";
import { useState } from "react";

function ExpenseList({expenses = []}){
    const now = new Date()
    const year = now.getFullYear()
    const [selectedYear, setSelectedYear] = useState(year)


    function groupExpensesByYear(expenses){
        return expenses.reduce((acc, expense) => {
            const year = new Date(expense.date).getFullYear();
            if(!acc[year]){
                acc[year] =[]
            }
            acc[year].push(expense);
            return acc

        }, {});
    }

    const groupedExpenses = groupExpensesByYear(expenses)

    const yearsAvailable = Object.keys(groupedExpenses).sort((a, b) => b-a);

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