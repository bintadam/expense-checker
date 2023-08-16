function AddExpense({onAdd, date, setDate, amount, setAmount, description, setDescription}){

    const getToday = () => {
        const today = new Date();
        const dd = String(today.getDate()).padStart(2,0)
        const mm = String(today.getMonth() + 1).padStart(2, '0'); 
        const yyyy = today.getFullYear();
        return yyyy + '-' + mm + '-' + dd;

    }

    const handleClick = (e) => {
        e.preventDefault()

        onAdd({
            id: Date.now(),
            amount,
            description,
            date: date || getToday()
          });
      
          setDate('');
          setAmount('');
          setDescription('');
    }

    return (
        <div className="w-2/3">
            <form className="block text-black gap-5 bg-blue-100 p-4">
                <input type="text" value={description}placeholder="DESCRIPTION" className="w-full border  p-3 rounded focus:outline-none" onChange={(e) => setDescription(e.target.value)}/>
                <input type="number" value={amount} placeholder="$0" className="w-full  mt-2 border rounded p-2 focus:outline-none" onChange={(e) => setAmount(e.target.value)}/>
                <input type="date" value={date} onChange={(e) => setDate(e.target.value)} placeholder="date" className="w-full my-3 border rounded p-2 focus:outline-none"/>
            </form>
            <button className="bg-blue-400 p-3 w-full my-2 rounded-lg text-white text-lg font-bold" onClick={handleClick}>ADD EXPENSE
            </button>
        </div>
    )
}

export default AddExpense;