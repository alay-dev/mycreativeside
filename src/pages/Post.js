import {
  Card,
  CardContent,
  Avatar,
  Divider,
  Button,
  ButtonGroup,
  CircularProgress,
} from "@material-ui/core";
import KeyboardBackspaceIcon from "@material-ui/icons/KeyboardBackspace";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ShareIcon from "@material-ui/icons/Share";
import { withStyles } from "@material-ui/core/styles";
import React, { Component } from "react";
import { Link } from "react-router-dom";
import moment from "moment";

import "../css/post.css";
import CommentLikeTab from "../components/CommentLikeTab";
import SnackBar from "../components/Snackbar";

const styles = (theme) => ({
  root: {
    width: "100%",
    maxWidth: "36ch",
    backgroundColor: theme.palette.background.paper,
  },
  inline: {
    display: "inline",
  },
  small: {
    width: theme.spacing(3),
    height: theme.spacing(3),
  },
  large: {
    width: theme.spacing(7),
    height: theme.spacing(7),
  },
  root_tab: {
    width: "100%",
    boxShadow: "inset 0 -1px 0 0 #E6ECF0",
  },
  indicator: {
    backgroundColor: "#1da1f2",
  },
});

class Post extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tabIndex: 0,
      liked: false,
      btn_notliked: {
        backgroundColor: "#05445e",
        color: "white",
      },
      btn_liked: {
        backgroundColor: "white",
        color: "red",
      },
    };
  }

  componentDidMount() {
    this.props.get_post_by_id(this.props.match.params.id);
    // this.props.set_current_post(this.props.match.params.id);
  }
  componentWillUnmount() {
    this.props.set_snackbar_status(false);
  }

  render() {
    const { classes, post, login, comment, like_post, unlike_post, loader } =
      this.props;
    return (
      <div className="post">
        {console.log("props", this.props)}
        <Card style={{ width: "70rem", backgroundColor: "#d4f1f4" }}>
          <CardContent>
            <div className="post__grid">
              <div className="left">
                {/* <Link to="/">
                  <Button
                    style={{
                      borderRadius: "1.4rem",
                      padding: "0.5rem 0",
                      position: "absolute",
                      top: "0.3rem",
                      left: "0.3rem",
                      backgroundColor: "#05445e",
                    }}
                    size="small"
                    variant="contained"
                    color="primary"
                  >
                    <KeyboardBackspaceIcon />
                  </Button>
                </Link> */}

                <img className="post__img" src={post.current_post.url} />

                <div className="like_share_cont">
                  <ButtonGroup
                    variant="contained"
                    aria-label="contained primary button group"
                  >
                    <Button
                      onClick={() => {
                        post.current_post.likes.find(
                          (row) => row._id === login._id
                        )
                          ? unlike_post(post.current_post._id, login)
                          : like_post(post.current_post._id, login);
                        this.setState({ liked: !this.state.liked });
                      }}
                      style={
                        post.current_post.likes.find(
                          (row) => row._id === login._id
                        )
                          ? this.state.btn_liked
                          : this.state.btn_notliked
                      }
                      startIcon={<FavoriteIcon />}
                      size="large"
                    >
                      {" "}
                      {post.current_post.likes.find(
                        (row) => row._id === login._id
                      )
                        ? "unlike"
                        : "like"}
                    </Button>
                    <Button
                      style={{ backgroundColor: "#05445e", color: "white" }}
                      startIcon={<ShareIcon />}
                    >
                      {" "}
                      share
                    </Button>
                  </ButtonGroup>
                </div>
                <div className="avatar__cont">
                  <Avatar src={post.current_post.author.url} />
                  <h3>{post.current_post.author.name}</h3>
                </div>
              </div>
              <div className="right">
                <h4>{post.current_post.caption}</h4>
                <p className="date">
                  {" "}
                  {moment(post.current_post.date).format("LL")}
                </p>
                <Divider />
                <CommentLikeTab {...this.props} />
              </div>
            </div>
          </CardContent>
        </Card>
        <SnackBar {...this.props} />
      </div>
    );
  }
}

export default withStyles(styles)(Post);
