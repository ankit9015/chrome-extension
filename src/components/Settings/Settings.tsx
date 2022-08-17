import React, { useState } from "react";
import { useBrowser } from "../../context";

import "./Settings.css";

const Settings = () => {
  const [optionView, setOptionView] = useState<boolean>(false);
  const { setUser, setDailyGoal, defaultGoalState } = useBrowser();
  const toggleOptionView = () => {
    setOptionView((prev) => !prev);
  };
  const resetTask = () => {
    setDailyGoal(defaultGoalState);
  };
  const resetName = () => {
    localStorage.setItem("individual_name", "");
    setUser("");
    resetTask();
  };

  return (
    <>
      <span
        className={`material-icons-outlined cursor_pointer`}
        onClick={toggleOptionView}
      >
        Settings
      </span>
      {optionView ? (
        <button className="options_btn" onClick={resetName}>
          CHANGE NAME
        </button>
      ) : null}
    </>
  );
};
export default Settings;
