import React from "react";
import { CourseList } from "./CourseList";
import './styles.css';

export const ProfileCourses = ({collaborator, creator, student}:any) => {


  return (
    <div className='ProfileCourses'>
      <p className='CoursesText'>
        Courses
      </p>
      <CourseList roleName={'Student'} courses={student}/>
      <CourseList roleName={'Teacher'} courses={creator}/>
      <CourseList roleName={'Collaborator'} courses={collaborator}/>
    </div>
  );
}
