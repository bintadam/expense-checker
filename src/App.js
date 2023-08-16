import {useState }from "react";
import AddExpense from "./components/AddExpense";
import ExpenseList from "./components/ExpenseList";
import ExpenseChart from "./components/ExpenseChart";

const initialExpenses =[
  {id:1, Amount:145, description:"ipods", date:"2021-09-04"},
  {id:3, Amount:215, description:"curtains", date:"2021-11-05"},
  {id:7, Amount:98, description:"printer", date:"2022-02-21"},
  {id:2, Amount:105, description:"trip", date:"2022-07-09"},
  {id:8, Amount:125, description:"dining outside", date:"2022-11-16"},
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
    <div className="h-screen">
      <h1 className="text-center font-bold text-2xl text-blue-800 pt-16">TRACK YOUR EXPENSE</h1>
      <div className="grid grid-cols-2 gap-10">
        <div className="pt-8 px-12">
          <AddExpense onAdd={addExpense}
            date={date} setDate={setDate}
            amount={amount} setAmount={setAmount}
            description={description} setDescription={setDescription}/>
          </div>
          <div>
            <ExpenseList expenses={initialExpenses}/>
            <ExpenseChart/>
          </div>
        </div>
    </div>
  );
}

export default App;
