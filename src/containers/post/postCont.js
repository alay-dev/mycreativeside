import { Component } from "react";
import Post from "../../pages/Post";

import {
  get_post_by_id,
  like_post,
  unlike_post,
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
    loader: store.loader,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    get_post_by_id: (id) => {
      dispatch(get_post_by_id(id));
    },
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
    like_post: (id, login) => {
      dispatch(like_post(id, login));
    },
    unlike_post: (id, login) => {
      dispatch(unlike_post(id, login));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PostCont);
