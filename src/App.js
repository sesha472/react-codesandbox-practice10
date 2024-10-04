import React from "react";
import Loginform from "./components/Loginform";
import "./styles.css";
import Searchfiletr from "./components/Searchfiletr";
import Hooks from "./components/Hooks";
import Usememohook from "./components/Usememohook";
import Practice10 from "./components/Practice10";

export default function App() {
  return (
    <div className="App">
      <Practice10 />
      <hr />
      <Hooks />
      <hr />
      <Usememohook />
      <hr />
      <h1>good</h1>

      <Loginform />
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>

      <Searchfiletr />
    </div>
  );
}
