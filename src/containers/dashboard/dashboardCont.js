import { Component } from "react";
import Dashboard from "../../pages/Dashboard";
// import {} from "../../actions/login/loginActions";
import { update_user, update_password } from "../../actions/user/userActions";
import { get_all_users, delete_user } from "../../actions/user/userActions";
import {
  add_post,
  set_post_caption,
  set_post_img,
  set_post_old_img,
  set_post_tags,
  get_all_posts,
  delete_post,
  set_post_author_email,
  set_post_author_name,
  set_post_author_img,
  set_post_author,
  update_post,
} from "../../actions/posts/postActions";
import { connect } from "react-redux";

class DashboardCont extends Component {
  render() {
    return <Dashboard {...this.props} />;
  }
}

const mapStateToProps = (store) => {
  return {
    login: store.login,
    post: store.post,
    user: store.user,
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
    get_all_posts: () => {
      dispatch(get_all_posts());
    },
    delete_post: (id) => {
      dispatch(delete_post(id));
    },
    get_all_users: (login) => {
      dispatch(get_all_users(login));
    },
    delete_user: (id, login) => {
      dispatch(delete_user(id, login));
    },
    set_post_author_email: (email) => {
      dispatch(set_post_author_email(email));
    },
    set_post_author_name: (name) => {
      dispatch(set_post_author_name(name));
    },
    set_post_author_img: (img) => {
      dispatch(set_post_author_img(img));
    },
    set_post_author: (id, post, login) => {
      dispatch(set_post_author(id, post, login));
    },
    update_post: (id, post, login) => {
      dispatch(update_post(id, post, login));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(DashboardCont);
