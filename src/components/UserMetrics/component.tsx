import React from "react";
import './styles.css';

export const UserMetrics = ({userMetrics}: any) => {

  return (
    <div className='UserMetrics'>
        <h1 className="UserMetricTitle">
            User Metrics
        </h1>
        <div className="MetricInfo">
            <p className="MetricText">
                {`Total Users: `}
            </p>
            <p className="MetricAmount">
                {userMetrics._users_amount}
            </p>
        </div>
        <div className="MetricInfo">
            <p className="MetricText">
                {`Total Blocked Users: `}
            </p>
            <p className="MetricAmount">
                {userMetrics._blocked_users}
            </p>
        </div>
        <div className="MetricInfo">
            <p className="MetricText">
                {`Users registered today: `}
            </p>
            <p className="MetricAmount">
                {userMetrics._last_registered_users}
            </p>
        </div>
        <div className="MetricInfo">
            <p className="MetricText">
                {`Users logged in during last hour: `}
            </p>
            <p className="MetricAmount">
                {userMetrics._last_logged_users}
            </p>
        </div>
        <div className="MetricInfo">
            <p className="MetricText">
                {`Users registered with google today: `}
            </p>
            <p className="MetricAmount">
                {userMetrics._last_registered_google_users}
            </p>
        </div>
        <div className="MetricInfo">
            <p className="MetricText">
                {`Users logged in with google during last hour: `}
            </p>
            <p className="MetricAmount">
                {userMetrics._last_logged_google_users}
            </p>
        </div>
    </div>
  );
}
