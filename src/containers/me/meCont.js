import { Component } from "react";
import Me from "../../pages/Me";
import MeMobile from "../../pages/MeMobile";
import { connect } from "react-redux";
import {
  set_user_contact_num,
  set_user_email,
  set_user_img,
  set_user_name,
  set_user_old_img,
  set_user_confirm_password,
  set_user_password,
  set_user_current_password,
  delete_self,
  update_user,
  update_password,
} from "../../actions/user/userActions";
import { set_snackbar_status } from "../../actions/snackbar/snackbarActions";

class MeCont extends Component {
  componentDidMount() {
    this.props.set_user_name(this.props.login.name);
    this.props.set_user_email(this.props.login.email);
    this.props.set_user_contact_num(this.props.login.contact_no);
    this.props.set_user_old_img(this.props.login.url);
  }
  render() {
    if (window.innerWidth <= 500) {
      return <MeMobile {...this.props} />;
    } else {
      return <Me {...this.props} />;
    }
  }
}

const mapStateToProps = (store) => {
  return {
    login: store.login,
    user: store.user,
    loader: store.loader,
    snackbar: store.snackbar,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    set_user_email: (email) => {
      dispatch(set_user_email(email));
    },
    set_user_name: (name) => {
      dispatch(set_user_name(name));
    },
    set_user_contact_num: (contact_no) => {
      dispatch(set_user_contact_num(contact_no));
    },
    set_user_img: (img) => {
      dispatch(set_user_img(img));
    },
    set_user_old_img: (old_img) => {
      dispatch(set_user_old_img(old_img));
    },
    set_user_password: (password) => {
      dispatch(set_user_password(password));
    },
    set_user_current_password: (password) => {
      dispatch(set_user_current_password(password));
    },
    set_user_confirm_password: (password) => {
      dispatch(set_user_confirm_password(password));
    },
    update_user: (id, user, afterLogin, login) => {
      dispatch(update_user(id, user, afterLogin, login));
    },
    update_password: (id, user, login) => {
      dispatch(update_password(id, user, login));
    },
    set_snackbar_status: (status) => {
      dispatch(set_snackbar_status(status));
    },
    delete_self: (id) => {
      dispatch(delete_self(id));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MeCont);
