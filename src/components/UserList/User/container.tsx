import React from "react";
import { User } from './component';

export const UserContainer = ({ email, username, blocked }: any) => {
  const [_blocked, setBlocked] = React.useState(blocked);

  const onBlockChange = (blocked: boolean) => {
    setBlocked(!_blocked);
  }

  return (
    <User 
      email={email}
      username={username}
      blocked={_blocked}
      onBlockChange={onBlockChange}
    />
  );
}