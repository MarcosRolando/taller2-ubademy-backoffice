import { CircularProgress } from "@mui/material";
import React from "react";
import { useGetUsers } from "../../hooks/useGetUsers";
import { UserList } from "./component";

export const UserListContainer = () => {
  const { users } = useGetUsers();

  if (users.length === 0) {
    return (
      <CircularProgress size={60} style={{marginTop: '10em'}} />
    );
  }

  return (
    <UserList
      users={users}
    />
  );
}
