import React from "react";
import { useGetUsers } from "../../hooks/useGetUsers";
import { UserList } from "./component";

export const UserListContainer = () => {
  const { users } = useGetUsers();

  return (
    <UserList
      users={users}
    />
  );
}
