import React from "react";
// import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
// import { hydrate, render } from "react-dom";
import { render } from "react-snapshot";

// class App extends React.Component {
//   state = { checked: false }

// ReactDOM.render(
//   <BrowserRouter>
//     <App />
//   </BrowserRouter>,
//   document.getElementById("root")
// );

// const rootElement = document.getElementById("root");
// if (rootElement.hasChildNodes()) {
//   hydrate(<BrowserRouter>
//     <App />
//   </BrowserRouter>, rootElement);
// } else {
//   render(<BrowserRouter>
//     <App />
//   </BrowserRouter>, rootElement);
// }

render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
