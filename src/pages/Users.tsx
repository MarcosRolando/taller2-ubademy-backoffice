import React from "react";
import { MyWindow } from "../components/MyWindow";
import { UserList } from "../components/UserList";
import '../styles/Users.css';

const Users = () => {
  return (
    <MyWindow>
      <div className='Users'>
        <UserList />
      </div>
    </MyWindow>
  );
}

export default Users;
