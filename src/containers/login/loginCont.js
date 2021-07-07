import { Component } from "react";
import Login from "../../pages/Login";
import {
  set_user_email,
  set_user_password,
  do_login,
  set_reload_login,
} from "../../actions/login/loginActions";
import { connect } from "react-redux";

class LoginCont extends Component {
  render() {
    return <Login {...this.props} />;
  }
}

const mapStateToProps = (store) => {
  return {
    login: store.login,
    user: store.user,
    loader: store.loader,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    set_user_email: (email) => {
      dispatch(set_user_email(email));
    },
    set_user_password: (password) => {
      dispatch(set_user_password(password));
    },
    do_login: (user) => {
      dispatch(do_login(user));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginCont);
