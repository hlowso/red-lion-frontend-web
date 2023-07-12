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
    <Contexts.RequestsProvider
      apiBaseUrl={
        process.env.REACT_APP_SERVER_URL! + process.env.REACT_APP_API_BASE_URL!
      }
    >
      <Contexts.SocketProvider serverUrl={process.env.REACT_APP_SERVER_URL!}>
        <Contexts.UIProvider components={components}>
          <Wrapper />
        </Contexts.UIProvider>
      </Contexts.SocketProvider>
    </Contexts.RequestsProvider>
  </React.StrictMode>
);
