import AddExpense from "./components/AddExpense";
import ExpenseList from "./components/ExpenseList";

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
