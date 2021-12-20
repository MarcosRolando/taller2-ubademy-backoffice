import { Button } from "@mui/material";
import React from "react";
import './styles.css';
import colors from '../../../colors';

export const Course = ({ course, onViewClick }: any) => {

  return (
    <div className='Course'>
      <p className='Title'>
        {course.title}
      </p>
      <div className='ViewButton'>
          <Button onClick={() => onViewClick(course._id)} sx={{color:'black', background:colors.primary, '&:hover': {
            backgroundColor: colors.primary,
            color: 'black',
          }}}>
            View
          </Button> 
      </div>
    </div>
  );
}
