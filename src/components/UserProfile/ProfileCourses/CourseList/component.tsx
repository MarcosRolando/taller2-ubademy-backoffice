import React from "react";
import './styles.css';

export const CourseList= ({ roleName }: any) => {
  return (
    <div className='CourseList'>
      <p className='CourseRole'>
        {roleName}
      </p>
      <p className='Info'>
        Analisis 3
      </p>
      <p className='Info'>
        Fisica 2
      </p>
      <p className='Info'>
        Proba y Estadistica
      </p>
    </div>
  );
}
