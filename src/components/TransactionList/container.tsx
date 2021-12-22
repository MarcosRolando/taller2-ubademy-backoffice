import { CircularProgress } from "@mui/material";
import React from "react";
import { useGetTransactions } from "../../hooks/useGetTransactions";
import { TransactionsList } from "./component";

export const TransactionsListContainer = ({ filter }: any) => {
  let { transactions } = useGetTransactions(filter);

  if (transactions.length === 0) {
    return (
      <CircularProgress size={60} style={{marginTop: '10em'}} />
    );
  }

  return (
    <TransactionsList
      transactions={transactions}
    />
  );
}
