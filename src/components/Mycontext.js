import React, { createContext } from "react";

export const mycontext = createContext();

const Mycontext = ({ children }) => {
  const data = "hellow world";
  return <mycontext.Provider value={data}>{children}</mycontext.Provider>;
};
export default Mycontext;
