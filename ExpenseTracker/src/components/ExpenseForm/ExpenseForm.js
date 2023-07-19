import React, { useEffect, useRef } from "react";
import styles from "./ExpenseForm.module.css";

const ExpenseForm =  ({
  addExpense,
  expenseToUpdate,
  updateExpense,
  resetExpenseToUpdate
}) => {
  const expenseTextInput = useRef();
  const expenseAmountInput = useRef();

  // Use the useEffect hook here, to check if an expense is to be updated
  useEffect(()=>{
    if(expenseToUpdate){
      expenseTextInput.current.value=expenseToUpdate.text
      expenseAmountInput.current.value=expenseToUpdate.amount
    }
  },[expenseToUpdate])

  // If yes, the autofill the form values with the text and amount of the expense

  const onSubmitHandler = (e) => {
    e.preventDefault();
    const expenseText = expenseTextInput.current.value;
    const expenseAmount = expenseAmountInput.current.value;
    if (parseInt(expenseAmount) === 0) {
      return;
    }

    const expense = {
      text: expenseText,
      amount: expenseAmount, 
      id: expenseToUpdate? expenseToUpdate.id : new Date().getTime()
    };

    if(expenseToUpdate){
      updateExpense(expense)
      clearInput();
      resetExpenseToUpdate();
      return;
    }else{
      addExpense(expense);
      clearInput();
      return;
    }

    

    // Logic to update expense here
  };

  const clearInput = () => {
    expenseAmountInput.current.value = "";
    expenseTextInput.current.value = "";
  };

  return (
    <form className={styles.form} onSubmit={onSubmitHandler}>
      
      <h3>{expenseToUpdate?'Edit ':'Add '}transaction</h3>
      <label htmlFor="expenseText">Text</label>
      <input
        id="expenseText"
        className={styles.input}
        type="text"
        placeholder="Enter text..."
        ref={expenseTextInput}
        required
      />
      <div>
        <label htmlFor="expenseAmount">Amount</label>
        <div>(negative - expense,positive-income)</div>
      </div>
      <input
        className={styles.input}
        id="expenseAmount"
        type="number"
        placeholder="Enter amount..."
        ref={expenseAmountInput}
        required
      />
      <button className={styles.submitBtn}>
        {/* Change text to Edit Transaction if an expense is to be updated */}
        {expenseToUpdate ? "Edit " : "Add "} Transaction
      </button>
    </form>
  );
};

export default ExpenseForm;
