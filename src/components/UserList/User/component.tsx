import { Button } from "@mui/material";
import React from "react";
import './styles.css';
import colors from '../../../colors';

export const User = ({ email, blocked, onBlockChange, onViewTransactions }: any) => {

  return (
    <div className='User'>
      <p className='Email'>
        {email}
      </p>
      <div className='StatusButton'>
        {(blocked) ? 
          <Button onClick={() => onBlockChange(false)} sx={{color:'black', background:colors.error, '&:hover': {
            backgroundColor: colors.error,
            color: 'black',
          }}}>
            Blocked
          </Button> 
          : 
          <Button onClick={() => onBlockChange(true)} sx={{color:'black', background:colors.primary, '&:hover': {
            backgroundColor: colors.primary,
            color: 'black',
          }}}>
            Unblocked
          </Button>
          }
      </div>
      <div className="TransactionsButton">
        <Button onClick={() => onViewTransactions(email)} sx={{color:'black', background:colors.primary, '&:hover': {
              backgroundColor: colors.primary,
              color: 'black',
            }}}>
              View Transactions
        </Button>
      </div>
    </div>
  );
}
