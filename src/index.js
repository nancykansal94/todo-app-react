import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* <Test /> */}
    <App />
  </React.StrictMode>
);

function Test() {
  return (
    <>
      <div className="container">
        <div className="static">Static</div>
        <div className="absolute">Absolute</div>
        <div className="relative">Relative</div>
      </div>
      <div className="fixed">Fixed</div>
      <div class="sticky">Sticky</div>
    </>
  );
}
