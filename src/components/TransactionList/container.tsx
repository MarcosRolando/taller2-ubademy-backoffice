import React from "react";
import { CircularProgress } from "@mui/material";
import { useGetTransactions } from "../../hooks/useGetTransactions";
import { TransactionsList } from "./component";

export const TransactionsListContainer = ({ filter }: any) => {
  let { transactions } = useGetTransactions(filter);

  if (transactions === undefined) {
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
