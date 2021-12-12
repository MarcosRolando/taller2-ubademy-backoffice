import React from 'react';
import './styles.css';
import { Course } from './Course';


export const CoursesList = ({ courses }: any) => {
  return (
    <div className='CoursesList'>
      <div className='Description'>
        <p className='TitleText'>
          Title
        </p>
      </div>
      {(courses.length === 0) ? <></> : 
      courses.map((course: any) => 
        <Course course={course}/>)}
    </div>
  );
}
