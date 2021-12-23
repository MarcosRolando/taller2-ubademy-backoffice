import React from 'react';
import { Transaction } from './Transaction';
import './styles.css';

export const TransactionsList = ({ transactions }: any) => {
  //const transactions = [{_id: 1, sender: 'mark', receiver: 'ivi', amount_sent: 24, date: '24/12/2021'}];

  return (
    <div className='TransactionsList'>
      <h1>
        Transactions
      </h1>
      <div className='TransactionsDescription'>
        <h3 className='SenderTitle'>
          Sender
        </h3>
        <h3 className='ReceiverTitle'>
          Receiver
        </h3>
        <h3 className='AmountTitle'>
          Amount
        </h3>
        <h3 className='DateTitle'>
          Date
        </h3>
      </div>
      {(transactions.length === 0) ? <></> : 
      transactions.map((transaction: any) => 
        <Transaction key={transaction._id} transaction={transaction}/>)}
    </div>
  );
}
