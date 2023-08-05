import React, { useState } from "react";
import { Contexts, App } from "frontend-common";
import { useEffect } from "react";
import components from "./components";
import { HTML5Backend } from "react-dnd-html5-backend";

type Orientation = "landscape" | "portrait";

const vw = () =>
  Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);
const vh = () =>
  Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0);
const getOrientation = (): Orientation =>
  vw() >= vh() ? "landscape" : "portrait";

const Wrapper = () => {
  const [orientation, setOrientation] = useState<Orientation>(getOrientation());
  useEffect(() => {
    const update = () => setOrientation(getOrientation());
    window.addEventListener("resize", update);

    return () => window.removeEventListener("resize", update);
  });

  return (
    <React.StrictMode>
      <Contexts.FrontendProvider
        serverUrl={"/"}
        apiBaseUrl={process.env.REACT_APP_API_BASE_URL!}
        components={components}
        dndBackend={HTML5Backend}
        orientation={orientation}
      >
        <App />
      </Contexts.FrontendProvider>
    </React.StrictMode>
  );
};

export default Wrapper;
