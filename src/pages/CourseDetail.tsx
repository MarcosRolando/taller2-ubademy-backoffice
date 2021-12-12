import React from "react";
import { MyWindow } from "../components/MyWindow";
import { CourseDetail } from "../components/CourseDetail";
import { useLocation } from "react-router";

export default function Profile() {
  const { state } = useLocation();
  const {id} = state;

  return (
    <MyWindow>
      <CourseDetail id={id} />
    </MyWindow>
  );
}
