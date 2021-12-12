import React from "react";
import { useGetCourseData } from "../../hooks/useGetCourseData";
import { CourseDetail } from './component';

export const CourseDetailContainer = ({ id }: any) => {
  const { courseData } = useGetCourseData(id);

  return (
    (courseData !== undefined) ?
    <CourseDetail 
      course={courseData}
    />
    :
    <></>
  );
}
