import React from 'react';
import { User } from './User';
import './styles.css';

export const UserList = ({ users }: any) => {

  if (users.length === 0) return (<div className='UserList' />);

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
      {users.map((email: string) => 
      <User email={email} blocked={false}/>)}
    </div>
  );
}
