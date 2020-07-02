import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(
  // <React.StrictMode>
  <App />,
  // </React.StrictMode>,
  document.getElementById("root"),
  () => {
    // window.setTimeout(() => {
    document.getElementById("splash").style.opacity = 0;
    window.setTimeout(() => {
      document.getElementById("splash").remove();
    }, 250);
    // }, 0);
  }
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
