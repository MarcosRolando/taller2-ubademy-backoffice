import { CircularProgress } from "@mui/material";
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
    <CircularProgress size={60} style={{marginTop: '10em'}} />
  );
}
