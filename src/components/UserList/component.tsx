import React from 'react';
import { User } from './User';
import './styles.css';

export const UserList = ({ users }: any) => {
  return (
    <div className='UserList'>
      <div className='Description'>
        <p className='EmailText'>
          Email
        </p>
        <p className='UsernameText'>
          Status
        </p>
      </div>
      {(users.length === 0) ? <></> : 
      users.map((user: any) => 
      <User email={user.email} blocked={user.is_blocked}/>)}
    </div>
  );
}
