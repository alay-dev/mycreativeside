import { Component } from "react";
import Post from "../../pages/Post";

import { get_post_by_id } from "../../actions/posts/postActions";
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
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    get_post_by_id: (id) => {
      dispatch(get_post_by_id(id));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PostCont);
