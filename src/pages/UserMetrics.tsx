import React from "react";
import { MyWindow } from "../components/MyWindow";
import { UserMetrics } from "../components/UserMetrics";
import '../styles/UserMetrics.css';

const UserMetricsPage = () => {

  return (
    <MyWindow>
      <div className='UserMetricsPage'>
        <UserMetrics />
      </div>
    </MyWindow>
  );
}

export default UserMetricsPage;
