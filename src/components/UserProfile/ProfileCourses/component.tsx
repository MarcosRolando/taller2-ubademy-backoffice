import React from "react";
import { CourseList } from "./CourseList";
import './styles.css';

export const ProfileCourses = () => {
  return (
    <div className='ProfileCourses'>
      <p className='CoursesText'>
        Courses
      </p>
      <CourseList roleName={'Student'}/>
      <CourseList roleName={'Teacher'}/>
      <CourseList roleName={'Collaborator'}/>
    </div>
  );
}
