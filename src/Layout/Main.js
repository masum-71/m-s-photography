import React, { Component } from "react";
import { Outlet } from "react-router-dom";
import Footer from "../Shared/Footer/Footer";
import Header from "../Shared/Header/Header";

export class Main extends Component {
  render() {
    return (
      <div>
        <Header></Header>
        <Outlet></Outlet>
        <Footer></Footer>
      </div>
    );
  }
}

export default Main;
