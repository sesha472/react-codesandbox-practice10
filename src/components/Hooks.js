import React, { useEffect, useRef, useState } from "react";
const Hooks = () => {
  const [value, setvalue] = useState(0);
  const refcount = useRef(0);
  const inputref = useRef();

  const inpuchangeHandler = () => {
    console.log(inputref.current.value);
  };

  useEffect(() => {
    refcount.current++;
  });

  return (
    <div>
      <input type={"text"} ref={inputref} />
      <br />
      <button onClick={inpuchangeHandler}>inputvalues</button>
      <br />
      <br />
      <button onClick={() => setvalue((prvstate) => prvstate + 1)}>
        incromnet
      </button>
      <h1> value is : {value} </h1>
      <button onClick={() => setvalue((prvstate) => prvstate - 1)}>
        dicrimnet
      </button>
      <p>{refcount.current} </p>
    </div>
  );
};

export default Hooks;
