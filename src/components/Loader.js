import { CircularProgress } from "@material-ui/core";
import React from "react";
import { Component } from "react";
// import "../css/loader.css";
// import loaderimg from "../img/loader.gif";

class Loader extends Component {
  render() {
    const { loader } = this.props;
    return <CircularProgress />;
  }
}

export default Loader;
