import {useState }from "react";
import AddExpense from "./components/AddExpense";
import ExpenseList from "./components/ExpenseList";

const initialExpenses =[
  {id:1, Amount:145, description:"ipods", date:"2021-09-04"},
  {id:3, Amount:215, description:"curtains", date:"2021-11-05"},
  {id:7, Amount:98, description:"printer", date:"2022-02-21"},
  {id:2, Amount:105, description:"trip", date:"2022-07-09"},
  {id:8, Amount:125, description:"dining outside", date:"2022-11-16"},
  {id:9, Amount:35, description:"gym membership", date:"2023-05-16"},
]


function App() {
  const [date, setDate] = useState('') 
  const [expenses, setExpense] = useState('')
  const [amount, setAmount] = useState('')
  const [description, setDescription] = useState('')

  const addExpense = (newExpense) => {
    setExpense([...expenses, newExpense])
  }
  return (
    <div className="grid place-items-center h-screen">
      <h1 className="font-bold text-2xl text-blue-800">TRACK YOUR EXPENSE</h1>
      <AddExpense onAdd={addExpense}
        date={date} setDate={setDate}
        amount={amount} setAmount={setAmount}
        description={description} setDescription={setDescription}/>
      <ExpenseList expenses={initialExpenses}/>
    </div>
  );
}

export default App;
