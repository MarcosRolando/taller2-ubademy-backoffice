import React from "react";
import { useGetCourses } from "../../hooks/useGetCourses";
import { useGetCoursesSetupInfo } from "../../hooks/useGetCoursesSetupInfo";
import { CoursesList } from "./component";

export const CoursesListContainer = () => {
  const { courses } = useGetCourses();
  const {courseTypes, subscriptionTypes, countries} = useGetCoursesSetupInfo();

  let [subFilter, setSubFilter] = React.useState("None");//Filtro del tipo de suscripcion del curso
  let [typeFilter, setTypeFilter] = React.useState("None");//Filtro del tipo de curso

  const handleApplyFilter = (_courses:any) => {
    return _courses.filter((course:any) => (subFilter === "None" || course.subscription_type === subFilter) && (typeFilter === "None" || course.course_type === typeFilter));//No esta rerenderizando los courses
  }

  const handleSubFilterChange = (value: any) => {
    setSubFilter(value);
  }

  const handleTypeFilterChange = (value: any) => {
    setTypeFilter(value);
  }

  return (
    <CoursesList
      courses={handleApplyFilter(courses)}
      onSubFilterChange={handleSubFilterChange}
      onTypeFilterChange={handleTypeFilterChange}
      subFilter={subFilter}
      typeFilter={typeFilter}
      courseTypes={courseTypes}
      subscriptionTypes={subscriptionTypes}
      countries={countries}
    />
  );
}
