import React from "react";
import { useGetCourses } from "../../hooks/useGetCourses";
import { CoursesList } from "./component";

export const CoursesListContainer = () => {
  const { courses } = useGetCourses();

  return (
    <CoursesList
      courses={courses}
    />
  );
}
