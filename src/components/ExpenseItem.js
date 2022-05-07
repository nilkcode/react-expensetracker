import React from "react";
import "./ExpenseItem.css"

const ExpenseItem = (props) => {
   
  for(let expense = 0; expense < props.expenses.length; expense++){
      a = (props.expenses[expense])
    
  }
 
 

  return (
    <>

    { props.expenses.map(item => (

       <div className="expense-item">
       <div>
          <div>{item.expenseDate.toLocaleString('en-US',{month:'long'})}</div>
          <div>{item.expenseDate.toLocaleString('en-US',{year:'numeric'})}</div>
          <div>{item.expenseDate.toLocaleString('en-US',{day:'numeric'})}</div>
       </div>

        <div className="expense-item__description">
          <h2>{item.carInsurance}</h2>
          <h2 className="expense-item__price">{item.expenseAmount}</h2>
        </div>

       </div>
    ))}
    

    </>
  );
};

export default ExpenseItem;
