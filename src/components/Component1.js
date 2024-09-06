import React, { useContext } from "react";
import { mycontext } from "./Mycontext";

const Component1 = () => {
  const consumedcontext = useContext(mycontext);

  return <div>{consumedcontext}</div>;
};

export default Component1;
