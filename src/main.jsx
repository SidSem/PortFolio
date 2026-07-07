import React from "react";
import ReactDOM from "react-dom/client";
import WebGL from "three/addons/capabilities/WebGL.js";

import App from "./App";
import "./index.css";

if (!WebGL.isWebGLAvailable()) {
  const rootElement = document.getElementById("root");
  if (rootElement) {
    rootElement.innerHTML =
      '<div style="color:white;padding:2rem;text-align:center;font-family:sans-serif;">WebGL not supported on this device.</div>';
  }
} else {
  ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
}
