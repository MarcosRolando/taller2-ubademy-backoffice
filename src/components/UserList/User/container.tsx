import React from "react";
import { useNavigate } from "react-router";
import { User } from './component';
import { useChangeBlockedStatus } from "../../../hooks/useChangeBlockedStatus";

export const UserContainer = ({ email, username, blocked }: any) => {
  const [_blocked, setBlocked] = React.useState(blocked);
  const navigate = useNavigate();
  const {changeBlockedStatus} = useChangeBlockedStatus();

  const onBlockChange = async (blocked: boolean) => {
    await changeBlockedStatus(email, blocked).then(() => {
      setBlocked(!_blocked);
    },
    (error: Error) => {
    });
  }

  const onViewTransactions = (email: string) => {
    navigate('/transactions', {state: {filter:email}});
  }

  const onViewProfile = (email: string) => {
    navigate('/profile', {state: {email:email}});
  }

  return (
    <User 
      email={email}
      username={username}
      blocked={_blocked}
      onBlockChange={onBlockChange}
      onViewTransactions={onViewTransactions}
      onViewProfile={onViewProfile}
    />
  );
}