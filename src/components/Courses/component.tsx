import React from 'react';
import './styles.css';
import { Course } from './Course';
import { Button } from "@mui/material";
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';

export const CoursesList = ({ courses, subFilter, typeFilter, onSubFilterChange, onTypeFilterChange  }: any) => {
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
          <MenuItem value={"None"}>None</MenuItem>
          <MenuItem value={"Programming"}>Programming</MenuItem>
          <MenuItem value={"Art"}>Art</MenuItem>
          <MenuItem value={"Music"}>Music</MenuItem>
          <MenuItem value={"Math"}>Math</MenuItem>
      </Select>
    </div>
  );
}