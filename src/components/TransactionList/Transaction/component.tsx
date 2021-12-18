import { Button } from "@mui/material";
import React from "react";
import './styles.css';
import colors from '../../../colors';

export const Transaction = ({ transaction }: any) => {

  return (
    <div className='Course'>
      <p className='Title'>
        {transaction.sender}
      </p>
    </div>
  );
}
