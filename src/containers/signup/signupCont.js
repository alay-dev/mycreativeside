import { Component } from "react";
import Signup from "../../pages/Signup";
// import {} from "../../actions/login/loginActions";
import {
  signup,
  set_user_confirm_password,
  set_user_contact_num,
  set_user_email,
  set_user_img,
  set_user_name,
  set_user_password,
  set_reload_login,
} from "../../actions/login/loginActions";
import { connect } from "react-redux";

class SignupCont extends Component {
  render() {
    return <Signup {...this.props} />;
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
    signup: (user) => {
      dispatch(signup(user));
    },
    set_user_name: (name) => {
      dispatch(set_user_name(name));
    },
    set_user_email: (email) => {
      dispatch(set_user_email(email));
    },
    set_user_contact_num: (contact_num) => {
      dispatch(set_user_contact_num(contact_num));
    },
    set_user_img: (img) => {
      dispatch(set_user_img(img));
    },
    set_user_password: (password) => {
      dispatch(set_user_password(password));
    },
    set_user_confirm_password: (confirm_password) => {
      dispatch(set_user_confirm_password(confirm_password));
    },
    set_reload_login: (login) => {
      dispatch(set_reload_login(login));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignupCont);
