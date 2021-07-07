import { Component } from "react";
import Home from "../../pages/Home";
import { set_snackbar_status } from "../../actions/snackbar/snackbarActions";
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
    snackbar: store.snackbar,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    get_all_posts: () => {
      dispatch(get_all_posts());
    },
    set_snackbar_status: (payload) => {
      dispatch(set_snackbar_status(payload));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeCont);
