import React from "react";
import { GoalState } from "./DailyGoal.types";
import "./DailyGoal.css";
import { useBrowser } from "../../context";

export const defaultGoalState: GoalState = {
  completion_status: false,
  title: "",
  edit_status: false,
};

function DailyGoal() {
  const { dailyGoal, setDailyGoal } = useBrowser();
  const submitHandler = (submitEvent: React.FormEvent) => {
    submitEvent.preventDefault();
  };
  const receiveGoal = (keyAction: React.KeyboardEvent<HTMLInputElement>) => {
    if (keyAction.key === "Enter" && dailyGoal && dailyGoal.title.length > 0) {
      setDailyGoal((prev) => ({
        ...prev,
        title: dailyGoal.title,
        edit_status: false,
      }));
      localStorage.setItem(
        "currentTaskState",
        JSON.stringify({
          completion_status: dailyGoal.completion_status,
          title: dailyGoal.title,
          edit_status: false,
        })
      );
    }
  };
  const updateGoalTitle = () => {
    setDailyGoal((prev) => ({
      ...prev,
      edit_status: true,
      completion_status: false,
    }));
  };
  const deleteCurrentGoal = () => {
    setDailyGoal(defaultGoalState);
    localStorage.removeItem("currentTaskState");
  };
  const updateGoalStatus = () => {
    setDailyGoal((prev) => ({
      ...prev,
      completion_status: !prev.completion_status,
    }));
  };

  return (
    <>
      {dailyGoal.title !== "" && !dailyGoal.edit_status ? (
        <div className="current_goal_container">
          <div className="current_goal_input_container">
            <input
              type="checkbox"
              id="checkbox"
              className="goal_completion_check"
              checked={dailyGoal.completion_status}
              onChange={updateGoalStatus}
            />
            <label
              htmlFor="checkbox"
              className={`current_goal_title ${
                dailyGoal.completion_status ? "completed_goal" : ""
              }`}
            >
              {dailyGoal.title}
            </label>
          </div>
          <div>
            <span
              className={`material-icons-outlined goal_action_icons`}
              onClick={updateGoalTitle}
            >
              mode_edit
            </span>
            <span
              className={`material-icons-outlined goal_action_icons`}
              onClick={deleteCurrentGoal}
            >
              delete
            </span>
          </div>
        </div>
      ) : (
        <form onSubmit={submitHandler}>
          <h3 className="goal_title_question">
            What's your main goal for today?
          </h3>
          <input
            type="text"
            className="goal_input"
            placeholder="Press enter after providing goal"
            value={dailyGoal.title}
            onKeyPress={receiveGoal}
            onChange={(e) => {
              setDailyGoal((prev) => ({
                ...prev,
                title: e.target.value.trim(),
                edit_status: true,
              }));
            }}
            autoComplete="off"
            autoFocus
          />
        </form>
      )}
    </>
  );
}

export default DailyGoal;
