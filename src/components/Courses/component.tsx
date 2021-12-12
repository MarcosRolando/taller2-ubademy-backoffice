import React from 'react';
import './styles.css';
import { Course } from './Course';


export const CoursesList = ({ courses }: any) => {
  return (
    <div className='CoursesList'>
      <div className='Description'>
        <p className='EmailText'>
          Email
        </p>
        <p className='UsernameText'>
          Status
        </p>
      </div>
      {(courses.length === 0) ? <></> : 
      courses.map((course: any) => 
        <Course title={course.title}/>)}
    </div>
  );
}
