import { CircularProgress } from "@material-ui/core";
import { Component } from "react";
import "../css/loader.css";
import loaderimg from "../img/loader.gif";

class Loader extends Component {
  render() {
    const { loader } = this.props;
    return (
      <div className="loader__bg">
        <img src={loaderimg} alt="loader" />
      </div>
    );
  }
}

export default Loader;
