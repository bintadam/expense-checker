import { useState } from "react";

function AddEXpense(){
    const [date, setDate] = useState('')

    const [amount, setAmount] = useState('')
    const [description, setDescription] = useState('')

    const getToday = () => {
        const today = new Date();
        const dd = String(today.getDate()).padStart(2,0)
        const mm = String(today.getMonth() + 1).padStart(2, '0'); 
        const yyyy = today.getFullYear();
        return yyyy + '-' + mm + '-' + dd;

    }

    const handleClick = (e) => {
        e.preventDefault()
        if(!amount && !description){
            return "fields cannot be empty"
        }else if(!amount){
            return "Amount field cannot be empty" 
        } else if(!description) {
            return "Description field cannot be empty"
        }else if(!date){
            setDate(getToday());
        }
    }

    return (
        <div className="pt-4 px-80">
            <form className="grid grid-cols-2 w-full text-black gap-5">
                <input type="text" value={description}placeholder="DESCRIPTION" className="w-full border border-sky-300 p-3 focus:outline-none" onChange={(e) => setDescription(e.target.value)}/>
                <input type="number" value={amount} placeholder="$0" className="border border-sky-300 p-2 focus:outline-none" onChange={(e) => setAmount(e.target.value)}/>
                <input type="date" value={date} onChange={(e) => setDate(e.target.value)} placeholder="date" className="w-full my-3 border border-sky-300 p-2 focus:outline-none"/>
            </form>
            <button className="bg-blue-400 p-3 w-full my-2 rounded-lg text-white text-lg font-bold" onClick={handleClick}>ADD EXPENSE
            </button>
        </div>
    )
}

export default AddEXpense;