function Expense({expense}){

    return (
        <div>
            <div className="bg-blue-400 my-2 p-4 rounded-md flex ">
                <ul className="text-white">
                    <li className="font-thin text-sm bg-blue-200 py-2 block rounded-lg">{expense.date}</li>
                    <div className="grid grid-cols-2">
                        <li>{expense.description}</li>
                        <li className="">{expense.Amount}$</li>
                    </div>     
                </ul>
            </div>
        </div>  
    )
}

export default Expense;