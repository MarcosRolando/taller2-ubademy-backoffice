import React from "react";
import { MyWindow } from "../components/MyWindow";
import { TransactionsList } from "../components/TransactionList";
import '../styles/Users.css';

const Transactions = () => {
  return (
    <MyWindow>
      <div className='Courses'>
        <TransactionsList />
      </div>
    </MyWindow>
  );
}

export default Transactions;
