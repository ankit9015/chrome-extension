import React, { useState, useContext, createContext, useEffect } from "react";
import { defaultGoalState } from "../../components/DailyGoal/DailyGoal";
import { GoalState } from "../../components/DailyGoal/DailyGoal.types";
import {
  BrowserContextType,
  BrowserProviderChildren,
} from "./BrowserContext.types";

const BrowserContext = createContext<BrowserContextType>(
  {} as BrowserContextType
);

const BrowserProvider = ({ children }: BrowserProviderChildren) => {
  const [user, setUser] = useState(localStorage.getItem("user") ?? "");
  const [mainTask, setMaintask] = useState("");
  const [dailyGoal, setDailyGoal] = useState<GoalState>(() => {
    if (localStorage.getItem("currentTaskState") !== null) {
      return JSON.parse(localStorage.getItem("currentTaskState") || "");
    } else {
      return defaultGoalState;
    }
  });

  useEffect(() => {
    localStorage.setItem(
      "currentTaskState",
      JSON.stringify({
        ...dailyGoal,
      })
    );
  }, [dailyGoal]);

  return (
    <BrowserContext.Provider
      value={{
        user,
        setUser,
        mainTask,
        setMaintask,
        dailyGoal,
        defaultGoalState,
        setDailyGoal,
      }}
    >
      {children}
    </BrowserContext.Provider>
  );
};

const useBrowser = () => {
  const browserContextReceived = useContext(BrowserContext);
  if (browserContextReceived === undefined) {
    throw new Error("useBrowser must be used within a browser provider");
  }
  return browserContextReceived;
};

export { useBrowser, BrowserProvider };
