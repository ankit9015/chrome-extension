import React, { useState } from "react";
import { useBrowser } from "../../context";
import { capitalizeString } from "../../utils";
import "./NewUserPage.css";

function NewUserPage() {
  const { user, setUser } = useBrowser();
  const [username, setUsername] = useState("");
  const submitEventHandler = (submitEvent: React.SyntheticEvent) => {
    submitEvent.preventDefault();
  };

  const receiveNameHandler = (
    keyEvent: React.KeyboardEvent<HTMLInputElement>
  ) => {
    if (keyEvent.key === "Enter" && username.length > 0) {
      const userCapitalize = capitalizeString(username);
      localStorage.setItem("user", userCapitalize);
      setUser(userCapitalize);
    }
  };
  return (
    <div className="new-user-page">
      <h1 className="">Hello What's your name?</h1>
      <form onSubmit={submitEventHandler}>
        <input
          type="text"
          required
          placeholder="Press enter after typing name"
          value={username}
          onChange={(e) => setUsername(e.target.value.trim())}
          onKeyDown={receiveNameHandler}
        />
      </form>
    </div>
  );
}

export default NewUserPage;
