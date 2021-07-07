import { Component } from "react";
import Home from "../../pages/Home";
// import {} from "../../actions/login/loginActions";
import { get_all_posts } from "../../actions/posts/postActions";
import { connect } from "react-redux";

class HomeCont extends Component {
  render() {
    return <Home {...this.props} />;
  }
}

const mapStateToProps = (store) => {
  return {
    login: store.login,
    post: store.post,
    loader: store.loader,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    get_all_posts: () => {
      dispatch(get_all_posts());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeCont);
