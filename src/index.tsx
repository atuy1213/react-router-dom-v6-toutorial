import { StrictMode } from "react";
import * as ReactDOMClient from "react-dom/client";

import { RouterConfig } from "./components/RouterConfig";

const rootElement = document.getElementById("root");
const root = ReactDOMClient.createRoot(rootElement);

root.render(
  <StrictMode>
    <RouterConfig />
  </StrictMode>
);
