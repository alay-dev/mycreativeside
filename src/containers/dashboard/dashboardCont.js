import { Component } from "react";
import Dashboard from "../../pages/Dashboard";
// import {} from "../../actions/login/loginActions";
import {
  add_post,
  set_post_caption,
  set_post_img,
  set_post_old_img,
  set_post_tags,
  get_all_posts,
  delete_post,
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
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(DashboardCont);
