import { PinDropSharp } from "@material-ui/icons";
import React from "react";
import { Course } from './component';
import { useNavigate } from "react-router";
export const CourseContainer = ({ course }: any) => {
  const navigate = useNavigate();

  const onViewClick = (id: any) => {
    navigate("/courseDetail", {state:{id:id}});
  }

  return (
    <Course 
      course={course}
      onViewClick={onViewClick}
    />
  );
}