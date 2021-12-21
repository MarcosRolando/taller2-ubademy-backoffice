import React from "react";
import { MyWindow } from "../components/MyWindow";
//import { TransactionsList } from "../components/TransactionList";
//import '../styles/Users.css';
//import { useLocation } from "react-router";
import { UserMetrics } from "../components/UserMetrics"

const UserMetricsPage = () => {

  return (
    <MyWindow>
      <div className='UserMetrics'>
        <UserMetrics />
      </div>
    </MyWindow>
  );
}

export default UserMetricsPage;
