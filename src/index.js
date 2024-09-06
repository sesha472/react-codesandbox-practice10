// import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./App";
import Mycontext from "./components/Mycontext";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <Mycontext>
    <App />
  </Mycontext>
);
