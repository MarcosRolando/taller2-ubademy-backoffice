import React from "react";
import { MyWindow } from "../components/MyWindow";
import { TransactionsList } from "../components/TransactionList";
import { useLocation } from "react-router";
import '../styles/Transactions.css';

const Transactions = () => {
  const { state } = useLocation();
  const filter = (state === null) ? "all" : state.filter;

  return (
    <MyWindow>
      <div className='TransactionsPage'>
        <TransactionsList filter={filter}/>
      </div>
    </MyWindow>
  );
}

export default Transactions;
