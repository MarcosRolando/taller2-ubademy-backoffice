import React from "react";
import { useGetTransactions } from "../../hooks/useGetTransactions";
import { TransactionsList } from "./component";

export const TransactionsListContainer = () => {
  const { transactions } = useGetTransactions();

  return (
    <TransactionsList
    transactions={transactions}
    />
  );
}
