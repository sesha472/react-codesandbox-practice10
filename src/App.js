import React from "react";
import Loginform from "./components/Loginform";
import "./styles.css";
import Searchfiletr from "./components/Searchfiletr";
import Hooks from "./components/Hooks";
import Usememohook from "./components/Usememohook";

export default function App() {
  return (
    <div className="App">
      <Hooks />
      <hr />
      <Usememohook />
      <hr />

      <Loginform />
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>

      <Searchfiletr />
    </div>
  );
}
