import React from "react";
import ReactDOM from "react-dom";
import "./style/index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Router } from "react-router-dom";
import history from "./history";
import { Provider } from "react-redux";
import store from "./store";
import Chart from 'chart.js';
import ChartDataLabels from 'chartjs-plugin-datalabels';
Chart.pluginService.unregister(ChartDataLabels);

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </Router>
  </Provider>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
