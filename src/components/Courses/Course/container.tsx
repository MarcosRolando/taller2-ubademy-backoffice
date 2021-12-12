import { PinDropSharp } from "@material-ui/icons";
import React from "react";
import { Course } from './component';

export const CourseContainer = ({ title }: any) => {
  //const [_blocked, setBlocked] = React.useState(blocked);

  /* const onBlockChange = (blocked: boolean) => {
    setBlocked(!_blocked);
  } */

  return (
    <Course 
      title={title}
    />
  );
}