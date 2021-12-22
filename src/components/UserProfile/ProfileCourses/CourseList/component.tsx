import React from "react";
import './styles.css';

export const CourseList= ({ roleName, courses }: any) => {

  return (
    <div className='CourseList'>
      <p className='CourseRole'>
        {roleName}
      </p>
      <div className="UserCoursesList">
        {(courses !== undefined) ? courses.map((course:any) => <p key={course.id}> {course.title}</p>) : ""}
      </div>
    </div>
  );
}
