import React from 'react';
import './styles.css';
import { Transaction } from './Transaction';


export const TransactionsList = ({ transactions }: any) => {
  return (
    <div className='CoursesList'>
      <div className='Description'>
        <p className='TitleText'>
          Title
        </p>
      </div>
      {(transactions.length === 0) ? <></> : 
      transactions.map((transaction: any) => 
        <Transaction transaction={transaction}/>)}
    </div>
  );
}
