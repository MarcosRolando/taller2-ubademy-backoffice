import React from 'react';
import './styles.css';
import { Course } from './Course';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';

export const CoursesList = ({ courses, subFilter, typeFilter, onSubFilterChange, onTypeFilterChange, courseTypes, subscriptionTypes, countries  }: any) => {
  return (
    <div className='CoursesList'>
      <div className='CoursesDescription'>
        <p className='TitleText'>
          Title
        </p>
      </div>
      {(courses.length === 0) ? <></> : 
      courses.map((course: any) => 
        <Course key={course._id} course={course}/>)}

      <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={subFilter}
          label="Subscription Type"
          onChange={(e) => onSubFilterChange(e.target.value)}
        >
          <MenuItem value={"None"}>None</MenuItem>
          <MenuItem value={"Free"}>Free</MenuItem>
          <MenuItem value={"Silver"}>Silver</MenuItem>
          <MenuItem value={"Gold"}>Gold</MenuItem>
          <MenuItem value={"Platinum"}>Platinum</MenuItem>
      </Select>

      <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={typeFilter}
          label="Course Type"
          onChange={(e) => onTypeFilterChange(e.target.value)}
        >
          {courseTypes.map((type: string) => 
            <MenuItem key={type} value={type}>{type}</MenuItem>
          )}
      </Select>
    </div>
  );
}
