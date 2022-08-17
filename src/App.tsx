import React from "react";
import "./App.css";
import { BackgroundImage } from "./components";
import { useBrowser } from "./context";
import { Dashboard, NewUserPage } from "./pages";

function App() {
  const { user } = useBrowser();
  return (
    <div className="App">
      <BackgroundImage />
      {user !== "" ? <Dashboard /> : <NewUserPage />}
    </div>
  );
}

export default App;
