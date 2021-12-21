import React from "react";
import './styles.css';

export const UserMetrics = ({userMetrics}: any) => {

  return (
    <div className='UserMetrics'>
        <div>
            {`Total Users: ${userMetrics._users_amount}`}
        </div>
        <div>
            {`Total Blocked Users: ${userMetrics._blocked_users}`}
        </div>
        <div>
            {`Users registered today: ${userMetrics._last_registered_users}`}
        </div>
        <div>
            {`Users logged in during last hour: ${userMetrics._last_logged_users}`}
        </div>
        <div>
            {`Users registered with google today: ${userMetrics._last_registered_google_users}`}
        </div>
        <div>
            {`Users logged in with google during last hour: ${userMetrics._last_logged_google_users}`}
        </div>
    </div>
  );
}
