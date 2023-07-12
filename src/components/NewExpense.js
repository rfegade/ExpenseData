import React from "react";
import "../styles/NewExpense.css";
import ExpenseForm from "./ExpenseForm";

export default function NewExpense() {
  return (
    <div className="new-expense">
      <ExpenseForm />
    </div>
  );
}
