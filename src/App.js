import React, { Component, Fragment } from "react";
import { ToastContainer } from "react-toastify";
import { BrowserRouter } from "react-router-dom";
import AppRoute from "./route/AppRoute";

export class App extends Component {
  render() {
    return (
      <Fragment>
        <BrowserRouter>
          <AppRoute></AppRoute>
        </BrowserRouter>
        <ToastContainer />
      </Fragment>
    );
  }
}

export default App;
