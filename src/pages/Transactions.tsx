import React from "react";
import { MyWindow } from "../components/MyWindow";
import { TransactionsList } from "../components/TransactionList";
import '../styles/Users.css';
import { useLocation } from "react-router";

const Transactions = () => {
  const { state } = useLocation();
  const filter = (state === null) ? "all" : state.filter;

  return (
    <MyWindow>
      <div className='Transactions'>
        <TransactionsList filter={filter}/>
      </div>
    </MyWindow>
  );
}

export default Transactions;
