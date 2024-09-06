import React, { useState, useMemo } from "react";

const Usememohook = () => {
  const [num, setnum] = useState(0);
  const [counter, setcounter] = useState(0);

  const inputchnageHandler = (e) => {
    setnum(e.target.value);
  };

  const square = (number) => {
    console.log("cube function ");
    return number * number;
  };
  const result = useMemo(() => square(num), [num]);
  return (
    <div>
      <h1> usememo</h1>
      <p>square : {result} </p>
      <input type="text" onChange={inputchnageHandler} />

      <button onClick={() => setcounter(counter + 1)}>counter </button>
      <p>{counter} </p>
    </div>
  );
};

export default Usememohook;
