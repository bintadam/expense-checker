import Expense from "./Expense";
import { useState } from "react";


function ExpenseList({expenses = []}){
    const currentYear = new Date().getFullYear()
    const [selectedYear, setSelectedYear] = useState(currentYear)


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
        <div className="text-white">
            <select className="bg-sky-700 font-base focus:outline-none text-lg" value={selectedYear} onChange={(e)=> setSelectedYear(e.target.value)}>
                { yearsAvailable.map( year => (
                    <option key={year} value={year}>{year}</option>
                ))}
            </select>

            {selectedYear && groupedExpenses[selectedYear] && (
                <div>
                    <h6 className="font-semibold m-1">EXPENSE LIST</h6>
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