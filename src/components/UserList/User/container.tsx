import React from "react";
import { User } from './component';

export const UserContainer = ({ email, username, blocked }: any) => {

  const onBlockChange = (blocked: boolean) => {
    //TODO enviar al back el cambio de estado
  }

  return (
    <User 
      email={email}
      username={username}
      blocked={blocked}
      onBlockChange={onBlockChange}
    />
  );
}