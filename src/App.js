import {useState }from "react";
import {useMediaQuery} from 'react-responsive';
import AddExpense from "./components/AddExpense";
import ExpenseList from "./components/ExpenseList";

const initialExpenses =[
  {id:1, amount:145, description:"ipods", date:"2021-09-04"},
  {id:3, amount:215, description:"curtains", date:"2021-11-05"},
  {id:7, amount:98, description:"printer", date:"2022-02-21"},
  {id:2, amount:105, description:"trip", date:"2022-07-09"},
  {id:8, amount:125, description:"dining outside", date:"2022-11-16"},
  {id:9, amount:35, description:"gym membership", date:"2023-05-16"},
  {id:9, amount:365, description:"shopping for babies", date:"2022-04-13"},
  {id:9, amount:690, description:"wedding gift", date:"2023-11-28"},
  {id:9, amount:2387, description:"renovation", date:"2023-08-20"},
]


function App() {
  const [date, setDate] = useState('') 
  const [expenses, setExpense] = useState(initialExpenses)
  const [amount, setAmount] = useState('')
  const [description, setDescription] = useState('')
  const isDesktop = useMediaQuery({query: "(min-width:1224px)"})
  const isMobile = useMediaQuery({query: "(max-width:1224px)"})

  const addExpense = (newExpense) => {
    setExpense(prevExpenses => [...prevExpenses, newExpense])
  }
  return (
    <div>
      { isDesktop && (   
        <div className="h-screen place-content-center mt-20 ml-96">
            <div className="rounded bg-sky-300 px-12 py-8 w-2/3">
              <h1 className="text-center font-bold text-2xl text-white">TRACK YOUR EXPENSE</h1>
              <AddExpense
                onAdd={addExpense}
                date={date} setDate={setDate}
                amount={amount} setAmount={setAmount}
                description={description} setDescription={setDescription}/>
              <ExpenseList expenses={expenses}/>
            </div>
          </div>
        )}
        {isMobile && (
                  <div className="h-screen place-content-center mt-20 ml-96">
                  <div className="rounded bg-sky-300 px-12 py-8 w-2/3">
                    <h1 className="text-center font-bold text-2xl text-white">TRACK YOUR EXPENSE</h1>
                    <AddExpense
                      onAdd={addExpense}
                      date={date} setDate={setDate}
                      amount={amount} setAmount={setAmount}
                      description={description} setDescription={setDescription}/>
                    <ExpenseList expenses={expenses}/>
                  </div>
                </div>
        )}
      </div>
  );
}

export default App;
