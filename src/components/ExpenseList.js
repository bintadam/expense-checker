import Expense from "./Expense";

function ExpenseList({expenses}){
    return (
        <div>
            <ul>
                {expenses.map((expense) => (
                    <Expense key={expense.id} expense={expense}/>
                ))}
            </ul>
        </div>
    )
};

export default ExpenseList;