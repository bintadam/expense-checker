function Expense({expense}){

    return (
        <div className="">
            <div className="bg-sky-700 rounded-md p-2 mb-2">
                <ul className="text-white">
                    <li className="font-thin text-sm py-2 block">{expense.date}</li>
                    <div className="flex justify-between gap-20">
                        <li>{expense.description}</li>
                        <li >${expense.amount}</li>
                    </div>     
                </ul>
            </div>
        </div>  
    )
}

export default Expense; 