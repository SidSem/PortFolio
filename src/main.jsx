import React from "react";
import ReactDOM from "react-dom/client";
import WebGL from "three/addons/capabilities/WebGL.js";

import App from "./App";
import "./index.css";

// Render the app regardless of WebGL: the portfolio content (text, projects,
// contact) does not require it, and each 3D canvas degrades on its own. Only
// surface a dark, readable notice when WebGL is entirely missing so the user is
// never left staring at an invisible white-on-white message.
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

if (!WebGL.isWebGLAvailable()) {
  console.warn(
    "WebGL is not available on this device — 3D scenes will fall back to static content."
  );
}
