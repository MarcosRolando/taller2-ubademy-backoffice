import React from "react";
import './styles.css';

export const CourseList= ({ roleName }: any) => {
  return (
    <div className='CourseList'>
      <p className='CourseRole'>
        {roleName}
      </p>
      <p className='Info'>
        Email: example@gmail.com
      </p>
    </div>
  );
}
