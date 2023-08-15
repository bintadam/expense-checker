function Expense({expense}){

    function groupExpensesByYear(){
        return expense.reduce((acc, expense) => {
            const year = new Date(expense.date).getFullYear();
            if(!acc[year]){
                acc[year] =[]
            }
            acc[year].push(expense);
            return acc

        }, {});
    }

    return (
        <li>
            <p>{expense.description}</p>
            <p>{expense.amount}</p>
            <p>{expense.date}</p>        
        </li>
        
    )
}

export default Expense;