import React from "react";
import { useGetTransactions } from "../../hooks/useGetTransactions";
import { TransactionsList } from "./component";

export const TransactionsListContainer = ({ filter }: any) => {
  let { transactions } : any = useGetTransactions(filter);

  return (
    <TransactionsList
      transactions={transactions}
    />
  );
}
