import React from 'react';
import { User } from './User';
import './styles.css';

export const UserList = ({ users }: any) => {
  return (
    <div className='UserList'>
      <h1 className='UsersTitle'>
        Users
      </h1>
      <div className='UsersDescription'>
        <p className='EmailText'>
          Email
        </p>
        <p className='UsernameText'>
          Status
        </p>
        <p className='UsernameText'>
          Profile
        </p>
        <p className='TransactionsText'>
          Transactions
        </p>
      </div>
      {(users.length === 0) ? <></> : 
      users.map((user: any) => 
      <User key={user.email} email={user.email} blocked={user.is_blocked}/>)}
    </div>
  );
}
