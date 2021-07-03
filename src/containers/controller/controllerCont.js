import React, { Component } from "react";
import { connect } from "react-redux";
import { set_reload_login } from "../../actions/login/loginActions";

class controllerCont extends Component {
  componentDidMount() {
    if (localStorage.getItem("mycreativeside_token")) {
      this.props.set_reload_login(
        JSON.parse(localStorage.getItem("mycreativeside_login"))
      );
    }
  }
  render() {
    return <div />;
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    set_reload_login: (payload) => {
      dispatch(set_reload_login(payload));
    },
  };
};

export default connect("", mapDispatchToProps)(controllerCont);
