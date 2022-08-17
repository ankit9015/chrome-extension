import "./Dashboard.css";
import React from "react";
import { DailyGoal, Quotes, Settings, TimeAndDate } from "../../components";

function Dashboard() {
  return (
    <div className="dashboard_page_container">
      <span className="date_time_container">
        <TimeAndDate />
      </span>
      <span>
        <DailyGoal />
      </span>
      <span className="quote_container">
        <Quotes />
      </span>
      <span className="settings_container">
        <Settings />
      </span>
    </div>
  );
}

export default Dashboard;
