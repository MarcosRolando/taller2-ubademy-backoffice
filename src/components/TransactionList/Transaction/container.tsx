import { PinDropSharp } from "@material-ui/icons";
import React from "react";
import { Transaction } from './component';
import { useNavigate } from "react-router";
export const TransactionContainer = ({ transaction }: any) => {

  return (
    <Transaction 
      transaction={transaction}
    />
  );
}