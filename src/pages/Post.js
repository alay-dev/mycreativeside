import {
  Card,
  CardContent,
  Avatar,
  Divider,
  Button,
  ButtonGroup,
  CircularProgress,
  Dialog,
  DialogContent,
} from "@material-ui/core";
import FacebookIcon from "@material-ui/icons/Facebook";
import WhatsAppIcon from "@material-ui/icons/WhatsApp";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ShareIcon from "@material-ui/icons/Share";
import { withStyles } from "@material-ui/core/styles";
import React, { Component } from "react";
import { Link } from "react-router-dom";
import { animateScroll as scroll } from "react-scroll";
import moment from "moment";

import "../css/post.css";
import CommentLikeTab from "../components/CommentLikeTab";
import SnackBar from "../components/Snackbar";
import { IconButton } from "@material-ui/core";

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
      btn__disable: false,
      share_dialog: false,
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

  scrollToTop = () => {
    scroll.scrollToTop();
  };

  componentDidMount() {
    this.props.get_post_by_id(this.props.match.params.id);
    this.scrollToTop();
    // this.props.set_current_post(this.props.match.params.id);
  }
  componentWillUnmount() {
    this.props.set_snackbar_status(false);
  }

  handleClose = () => {
    this.setState({
      share_dialog: false,
    });
  };

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
                      disabled={this.state.btn__disable}
                      onClick={() => {
                        post.current_post.likes.find(
                          (row) => row._id === login._id
                        )
                          ? unlike_post(post.current_post._id, login)
                          : like_post(post.current_post._id, login);
                        this.setState({ liked: !this.state.liked });
                        this.setState({
                          btn__disable: true,
                        });
                        setTimeout(() => {
                          this.setState({ btn__disable: false });
                        }, 1000);
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
                      onClick={() => this.setState({ share_dialog: true })}
                    >
                      {" "}
                      share
                    </Button>
                  </ButtonGroup>
                </div>
                <div className="avatar__cont">
                  <Avatar
                    src={
                      post.current_post.author
                        ? post.current_post.author.url
                        : ""
                    }
                  />
                  <h3>
                    {post.current_post.author
                      ? post.current_post.author.name
                      : "unknown"}
                  </h3>
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
        <Dialog
          open={this.state.share_dialog}
          onClose={this.handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogContent>
            {/* <FacebookShareButton /> */}
            <IconButton
              onClick={() =>
                window.open(
                  `whatsapp://send?text=www.mycreativeside.vercel.app/${this.props.match.params.id}`
                )
              }
            >
              {" "}
              <WhatsAppIcon />
            </IconButton>
            <IconButton>
              <a
                href={`https://www.facebook.com/sharer/sharer.php?u=www.mycreativeside.vercel.app/${this.props.match.params.id}`}
              >
                <i className="fab fa-facebook-square" />
              </a>
            </IconButton>
          </DialogContent>
        </Dialog>
        <SnackBar {...this.props} />
      </div>
    );
  }
}

export default withStyles(styles)(Post);
