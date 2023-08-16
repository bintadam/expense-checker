import Expense from "./Expense";
import { useState } from "react";
import ExpenseChart from "./ExpenseChart"

function ExpenseList({expenses = []}){
    const [selectedYear, setSelectedYear] = useState('')


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
            <select value={selectedYear} onChange={(e)=> setSelectedYear(e.target.value)}>
                { yearsAvailable.map( year => (
                    <option className="bg-blue-400 text-white" key={year} value={year}>{year}</option>
                ))}
            </select>
            <ExpenseChart/>
            {selectedYear && groupedExpenses[selectedYear] && (
                <div>
                    <h6>EXPENSE LIST</h6>
                    <ul>
                        {groupedExpenses[selectedYear].map((expense) => (
                            <Expense key={expense.id} expense={expense}/>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    )
};

export default ExpenseList;