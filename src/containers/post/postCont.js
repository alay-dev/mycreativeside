import { Component } from "react";
import Post from "../../pages/Post";

import {
  get_post_by_id,
  set_current_post,
} from "../../actions/posts/postActions";
import {
  add_comment,
  set_comment,
  set_comment_user_img,
  set_comment_user_name,
} from "../../actions/comment/commentAction";
import { connect } from "react-redux";

class PostCont extends Component {
  render() {
    return <Post {...this.props} />;
  }
}

const mapStateToProps = (store) => {
  return {
    login: store.login,
    post: store.post,
    comment: store.comment,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    get_post_by_id: (id) => {
      dispatch(get_post_by_id(id));
    },
    // set_current_post: (id) => {
    //   dispatch(set_current_post(id));
    // },
    add_comment: (id, comment, login) => {
      dispatch(add_comment(id, comment, login));
    },
    set_comment: (comment) => {
      dispatch(set_comment(comment));
    },
    set_comment_user_img: (img) => {
      dispatch(set_comment_user_img(img));
    },
    set_comment_user_name: (name) => {
      dispatch(set_comment_user_name(name));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PostCont);
