import { GoalState } from "../../components/DailyGoal/DailyGoal.types";

export type BrowserContextType = {
  user: string;
  setUser: React.Dispatch<React.SetStateAction<string>>;
  mainTask: string;
  setMaintask: React.Dispatch<React.SetStateAction<string>>;
  dailyGoal: GoalState;
  defaultGoalState: GoalState;
  setDailyGoal: React.Dispatch<React.SetStateAction<GoalState>>;
};

export type BrowserProviderChildren = {
  children: React.ReactNode;
};
