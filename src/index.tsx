import React from "react";
import ReactDOM from "react-dom/client";
import { Contexts } from "frontend-common";
import components from "./components";
import Wrapper from "./Wrapper";
import "./index.css";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <Contexts.FrontendProvider
      serverUrl={process.env.REACT_APP_SERVER_URL!}
      apiBaseUrl={
        process.env.REACT_APP_SERVER_URL! + process.env.REACT_APP_API_BASE_URL!
      }
      components={components}
    >
      <Wrapper />
    </Contexts.FrontendProvider>
  </React.StrictMode>
);
