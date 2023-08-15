import { useState } from "react";

function AddEXpense(){
    const [date, setDate] = useState('')

    return (
        <div className="pt-24 px-80">
            <form className="grid grid-cols-2 w-full">
                <input type="number" placeholder="$0" className="border-0"/>
                <input type="text" placeholder="name"/>
                <input type="text" placeholder="Description" className="w-full my-2"/>
                <input type="text" placeholder="Category" className="w-full my-2 outline-0"/>
                <input type="date" value={date} onChange={(e) => setDate(e.target.value)} placeholder="date" className="w-full my-2 relative z-0"/>
            </form>
            <button className="bg-fuchsia-400 p-3 w-full my-2 rounded-lg">ADD EXPENSE
            </button>
        </div>
    )
}

export default AddEXpense;