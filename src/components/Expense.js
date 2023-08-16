function Expense({expense}){

    return (
        <div>
            <div className="bg-blue-300 my-2 p-4 rounded-md w-2/3">
                <ul>
                    <li className="font-thin text-sm ">{expense.date}</li>  
                    <li>{expense.description}</li>
                    <li>{expense.amount}</li>   
                </ul>
            </div>
        </div>  
    )
}

export default Expense;