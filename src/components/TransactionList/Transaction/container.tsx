import React from "react";
import { Transaction } from './component';
export const TransactionContainer = ({ transaction }: any) => {

  return (
    <Transaction 
      transaction={transaction}
    />
  );
}