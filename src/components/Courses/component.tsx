import React from 'react';
import './styles.css';
import { Course } from './Course';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';

export const CoursesList = ({ courses, subFilter, typeFilter, onSubFilterChange, onTypeFilterChange, courseTypes, subscriptionTypes, countries  }: any) => {
  return (
    <div className='CoursesList'>
      <h1 className='CoursesTitle'>
        Courses
      </h1>
      <div className='CoursesFilters'>
        <div className='Filter'>
          <p className='FilterText'>
            Subscription type  
          </p>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={subFilter}
            label="Subscription Type"
            onChange={(e) => onSubFilterChange(e.target.value)}
            >
            {subscriptionTypes.map((type: string) => 
              <MenuItem key={type} value={type}>{type}</MenuItem>
              )}
          </Select>
        </div>
        <div className="Filter" style={{justifyContent: 'flex-end'}}>
          <p className="FilterText">
            Course type
          </p>
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
      </div>

      <div className='CoursesDescription'>
        <p className='TitleText'>
          Title
        </p>
      </div>

      {(courses.length === 0) ? <></> : 
      courses.map((course: any) => 
        <Course key={course._id} course={course}/>)}

    </div>
  );
}
