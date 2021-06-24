import {
  Card,
  CardContent,
  Avatar,
  Divider,
  Button,
  ButtonGroup,
} from "@material-ui/core";
import KeyboardBackspaceIcon from "@material-ui/icons/KeyboardBackspace";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ShareIcon from "@material-ui/icons/Share";
import { withStyles } from "@material-ui/core/styles";
import React, { Component } from "react";
import { Link } from "react-router-dom";
import img1 from "./../img/featured2.jpeg";

import "../css/post.css";
import CommentLikeTab from "../components/CommentLikeTab";

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

  componentDidMount() {}

  render() {
    const { classes } = this.props;
    return (
      <div className="post">
        <Card style={{ width: "70rem", backgroundColor: "#d4f1f4" }}>
          <CardContent>
            <div className="post__grid">
              <div className="left">
                <Link to="/">
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
                </Link>
                <img className="post__img" src={img1} />
                <div className="like_share_cont">
                  <ButtonGroup
                    variant="contained"
                    aria-label="contained primary button group"
                  >
                    <Button
                      onClick={() =>
                        this.setState({ liked: !this.state.liked })
                      }
                      style={
                        this.state.liked
                          ? this.state.btn_liked
                          : this.state.btn_notliked
                      }
                      startIcon={<FavoriteIcon />}
                      size="large"
                    >
                      {" "}
                      {this.state.liked ? "unlike" : "like"}
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
                  <Avatar
                    style={{ width: "6rem", height: "6rem" }}
                    src={"https://i.pravatar.cc/300?img=30"}
                  />
                  <h3>Abhishek Gupta</h3>
                </div>
              </div>
              <div className="right">
                <h4>
                  Contrary to popular belief, Lorem Ipsum is not simply random
                  text. It has roots in a piece of classical Latin literature
                  from
                </h4>
                <p className="date">24/8/2021</p>
                <Divider />
                <CommentLikeTab />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }
}

export default withStyles(styles)(Post);
