function Expense({expense}){
    return (
        <li>
            <p>{expense.description}</p>
            <p>{expense.amount}</p>
            <p>{expense.date}</p>        
        </li>
        
    )
}

export default Expense;