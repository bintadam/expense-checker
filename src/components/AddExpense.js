import { useState } from "react";

function AddEXpense(){
    const [date, setDate] = useState('')

    const [amount, setAmount] = useState('')
    const [description, setDescription] = useState('')

    const handleClick = (e) => {
        e.preventDefault()
        if(!amount) return;
        if(!description) return;
        if(!date){
            return 
        }
    }

    return (
        <div className="pt-24 px-80">
            <form className="grid grid-cols-2 w-full">
                <input type="text" placeholder="DESCRIPTION" className="w-full my-2 focus:outline-none"/>
                <input type="number" placeholder="$0" className="border-0 focus:outline-none"/>
                <input type="date" value={date} onChange={(e) => setDate(e.target.value)} placeholder="date" className="w-full my-2 focus:outline-none"/>
            </form>
            <button className="bg-fuchsia-400 p-3 w-full my-2 rounded-lg text-white text-lg font-bold">ADD EXPENSE
            </button>
        </div>
    )
}

export default AddEXpense;