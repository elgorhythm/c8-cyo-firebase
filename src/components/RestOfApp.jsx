import logo from "../logo.svg";
import "../App.css";
import React, { useContext } from "react";
import { FirebaseContext } from "../providers/FirebaseProvider";

const RestOfApp = () => {
  const fbContext = useContext(FirebaseContext);
  const app = fbContext.app;
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <pre>
          Firebase app info:
          <br />
          <br />
        </pre>
        {JSON.stringify(app, null, 2)}
      </header>
    </div>
  );
};

export default RestOfApp;
