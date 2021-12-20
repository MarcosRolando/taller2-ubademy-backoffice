import React from "react";
import './styles.css';

export const Transaction = ({ transaction }: any) => {

  return (
    <div className='Transaction'>
      <p className='Sender'>
        {transaction.sender}
      </p>
      <p className='Receiver'>
        {transaction.receiver}
      </p>
      <p className='Amount'>
        {transaction.amount_sent + " ETH"}
      </p>
      <p className='Date'>
        {transaction.date}
      </p>
    </div>
  );
}
