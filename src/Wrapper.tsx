import React, { useEffect, useState } from "react";
import { App } from "frontend-common";

const vw = () =>
  Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);
const vh = () =>
  Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0);
const getVersion = () => (vw() >= vh() ? "landscape" : "portrait");

const Wrapper = () => {
  const [version, setVersion] = useState<"landscape" | "portrait">(
    getVersion()
  );

  useEffect(() => {
    const update = () => setVersion(getVersion());
    window.addEventListener("resize", update);
  });

  return <App version={version} />;
};

export default Wrapper;
