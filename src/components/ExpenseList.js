import Expense from "./Expense";
import { useState } from "react";

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
            <h2 className="text-center font-bold text-xl">Expense List</h2>
            <select value={selectedYear} onChange={(e)=> setSelectedYear(e.target.value)}>
                { yearsAvailable.map( year => (
                    <option key={year} value={year}>{year}</option>
                ))}
            </select>
            {}
        </div>
    )
};

export default ExpenseList;