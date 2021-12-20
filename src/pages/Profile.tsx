import React from "react";
import { MyWindow } from "../components/MyWindow";
import { UserProfile } from "../components/UserProfile";
import { useLocation } from "react-router";

export default function Profile() {
  const { state } = useLocation();
  const { email } = state;

  return (
    <MyWindow>
      <UserProfile email={email}/>
    </MyWindow>
  );
}
