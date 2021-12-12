import { Button } from "@mui/material";
import React from "react";
import './styles.css';
import colors from '../../../colors';

export const Course = ({ title }: any) => {

  return (
    <div className='Course'>
      <p className='Title'>
        {title}
      </p>
      {/* <div className='ViewButton'>
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
      </div> */}
    </div>
  );
}
