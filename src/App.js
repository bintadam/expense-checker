import AddExpense from "./components/AddExpense";
import ExpenseList from "./components/ExpenseList";

const expenses =[
  {id:1, Amount:145, date:04.sep.2021},
  {id:3, Amount:215, date:11.may.2022},
  {id:7, Amount:98, date:21.feb.2022},
  {id:2, Amount:105, date:08.july.2022},
  {id:8, Amount:125, date:16.nov.2022},
]

function App() {
  return (
    <div className="">
      <h1 className="text-center font-bold text-2xl text-blue-800 pt-20">TRACK YOUR EXPENSE</h1>
      <AddExpense/>
      <ExpenseList/>
    </div>
  );
}

export default App;
