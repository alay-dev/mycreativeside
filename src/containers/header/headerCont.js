import { Component } from "react";
import Header from "../../components/Header";
import { set_reload_login, logout } from "../../actions/login/loginActions";
import {
  add_post,
  set_post_old_img,
  set_post_caption,
  set_post_img,
  set_post_tags,
} from "../../actions/posts/postActions";

import { connect } from "react-redux";

class HeaderCont extends Component {
  render() {
    return <Header {...this.props} />;
  }
}

const mapStateToProps = (store) => {
  return {
    login: store.login,
    post: store.post,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    add_post: (post, login) => {
      dispatch(add_post(post, login));
    },
    set_post_img: (img) => {
      dispatch(set_post_img(img));
    },
    set_post_old_img: (img) => {
      dispatch(set_post_old_img(img));
    },
    set_post_tags: (tags) => {
      dispatch(set_post_tags(tags));
    },
    set_post_caption: (caption) => {
      dispatch(set_post_caption(caption));
    },
    set_reload_login: (payload) => {
      dispatch(set_reload_login(payload));
    },
    logout: () => {
      dispatch(logout());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(HeaderCont);
