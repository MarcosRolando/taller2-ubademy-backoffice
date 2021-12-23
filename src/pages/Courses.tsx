import React from "react";
import { MyWindow } from "../components/MyWindow";
import { CoursesList } from "../components/Courses";
import '../styles/Courses.css';

const Courses = () => {
  return (
    <MyWindow>
      <div className='Courses'>
        <CoursesList />
      </div>
    </MyWindow>
  );
}

export default Courses;
