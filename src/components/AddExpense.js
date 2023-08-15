function AddEXpense(){
    return (
        <div>
            <form>
                <input type="number" placeholder="$0"/>
                <input type="text" placeholder="Category"/>
                <input type="text" placeholder="Description"/>
                <input type="date" placeholder="date"/>
                <button>ADD EXPENSE</button>
            </form>
        </div>
    )
}

export default AddEXpense;