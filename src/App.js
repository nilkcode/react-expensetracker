import ExpenseItem from "./components/ExpenseItem";

function App() {
  // const expenseDate = new Date(2021, 2, 24);

  // const carInsurance = "Car Insurance";
  // const expenseAmount = 234.67;

  const expenses = [
    {carInsurance:"Car Insurance",expenseAmount:2122.32, expenseDate:new Date(2021, 2, 24)},
    {carInsurance:"Bike Insurance",expenseAmount:1222.2, expenseDate:new Date(2021, 2, 23)},
    {carInsurance:"Truck Insurance",expenseAmount:121.32, expenseDate:new Date(2021, 2, 21)},
    {carInsurance:"Home Insurance",expenseAmount:222.32, expenseDate:new Date(2021, 2, 10)},

  ]


  return (
    <div>
       <ExpenseItem expenses={expenses}/>
    </div>
  );
}

export default App;
