function Expense({expense}){

    return (
        <div>
            <div className="bg-blue-300 my-2 p-4 rounded-md flex ">
                <ul className="">
                    <li className="font-thin text-sm ml-auto ">{expense.date}</li>  
                    <li>{expense.description}</li>
                    <li className="ml-auto">{expense.amount}</li>   
                </ul>
            </div>
        </div>  
    )
}

export default Expense;