import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Theme from "./providers/Theme";

const App = () => (
  <Theme>
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <p>Test</p>
    </header>
  </Theme>
);

export default App;
