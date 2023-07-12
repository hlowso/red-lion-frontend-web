import React from "react";
import ReactDOM from "react-dom/client";
import { Contexts, App } from "frontend-common";
import components from "./components";
import "./index.css";

const vw = Math.max(
  document.documentElement.clientWidth || 0,
  window.innerWidth || 0
);
const vh = Math.max(
  document.documentElement.clientHeight || 0,
  window.innerHeight || 0
);

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
          <App version={vw >= vh ? "landscape" : "portrait"} />
        </Contexts.UIProvider>
      </Contexts.SocketProvider>
    </Contexts.RequestsProvider>
  </React.StrictMode>
);
