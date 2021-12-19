import {TextField, Button} from '@mui/material';
import React from 'react';
import './styles.css';
import { Transaction } from './Transaction';


export const TransactionsList = ({ transactions, filter, onFilterChange, onApplyClick }: any) => {
  return (
    <div className='TransactionsList'>
      <h1>
        Transactions
      </h1>
      <div className='Description'>
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
        <Transaction transaction={transaction}/>)}
    </div>
  );
}
