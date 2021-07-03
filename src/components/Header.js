import React, { useState } from "react";
import logo from "../img/logo.png";
import { Link } from "react-router-dom";
import {
  Button,
  withStyles,
  Modal,
  Backdrop,
  Fade,
  InputLabel,
  TextField,
  Chip,
  Avatar,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { green, blueGrey } from "@material-ui/core/colors";
import MenuIcon from "@material-ui/icons/Menu";
import CloseIcon from "@material-ui/icons/Close";
// import TagInput from "./TagInput";

import "../css/header.css";
import "../css/contribution.css";
import { Component } from "react";

const ColorButton = withStyles((theme) => ({
  root: {
    color: theme.palette.getContrastText(blueGrey[400]),
    backgroundColor: green[500],
    "&:hover": {
      backgroundColor: green[700],
    },
  },
}))(Button);

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menu: false,
      open: false,
      tags: [],
      new_tag: "",
    };
  }
  componentDidMount() {
    if (localStorage.getItem("mycreativeside_login")) {
      this.props.set_reload_login(
        JSON.parse(localStorage.getItem("mycreativeside_login"))
      );
    }
  }

  handleOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };
  render() {
    const {
      login,
      logout,
      post,
      add_post,
      set_post_caption,
      set_post_img,
      set_post_tags,
    } = this.props;
    return (
      <div className="header">
        <Link
          to="/"
          onClick={() => {
            this.setState({ open: false });
          }}
        >
          <img src={logo} alt="logo" />
        </Link>
        {this.state.menu ? (
          <CloseIcon
            className="menu__icon"
            onClick={() => this.setState({ open: true })}
          />
        ) : (
          <MenuIcon
            className="menu__icon"
            onClick={() => this.setState({ open: true })}
          />
        )}
        <ul className="main">
          <Link to="/" className="item current">
            Home
          </Link>
          <Link className="item" onClick={this.handleOpen}>
            Contribute
          </Link>
          {localStorage.getItem("mycreativeside_token") ? (
            <React.Fragment>
              <Link to="/" style={{ textDecoration: "none" }}>
                <div className="login__avatar">
                  <Avatar alt="Remy Sharp" src={login.url} />
                  <span>{login.name}</span>
                </div>
              </Link>
              <Link className="item" onClick={() => logout()}>
                <Button variant="outlined" style={{ color: "#05445e" }}>
                  Log out
                </Button>
              </Link>
            </React.Fragment>
          ) : (
            <React.Fragment>
              <Link to="/login" className="item">
                Login
              </Link>
              <Link to="signup" style={{ textDecoration: "none" }}>
                <ColorButton color="primary" variant="contained">
                  Signup
                </ColorButton>
              </Link>
            </React.Fragment>
          )}
        </ul>
        {this.state.menu ? (
          <ul
            className="header__nav"
            onClick={() => this.setState({ open: false })}
          >
            <Link to="/" className="item current">
              Home
            </Link>
            <Link className="item" onClick={this.handleOpen}>
              Contribute
            </Link>
            {localStorage.getItem("mycreativeside_token") ? (
              <Link to="/">
                <div className="login__avatar">
                  <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                  <span>Alay</span>
                </div>
              </Link>
            ) : (
              <React.Fragment>
                <Link to="/login" className="item">
                  Login
                </Link>
                <Link to="signup" style={{ textDecoration: "none" }}>
                  <ColorButton color="primary" variant="contained">
                    Signup
                  </ColorButton>
                </Link>
              </React.Fragment>
            )}
          </ul>
        ) : (
          ""
        )}
        <Modal
          aria-labelledby="transition-modal-title"
          aria-describedby="transition-modal-description"
          open={this.state.open}
          onClose={this.handleClose}
          closeAfterTransition
          BackdropComponent={Backdrop}
          BackdropProps={{
            timeout: 500,
          }}
        >
          <Fade in={this.state.open}>
            <div className="contribution__bg">
              <p>Want to contribute?</p>
              <br />
              <InputLabel>Choose image file</InputLabel>
              <TextField
                fullWidth
                id="standard-search"
                label=""
                type="file"
                onChange={(e) => {
                  set_post_img(e.target.files[0]);
                }}
              />
              <br />
              <br />
              <TextField
                id="standard-search"
                fullWidth
                label="Caption"
                type="text"
                onChange={(e) => {
                  set_post_caption(e.target.value);
                }}
              />
              <br />
              <br />
              <InputLabel>Tags</InputLabel>
              <TextField
                value={this.state.new_tag}
                label="Enter to add tag"
                fullWidth
                type="text"
                onChange={(e) => {
                  this.setState({ new_tag: e.target.value });
                }}
                onKeyPress={(e) => {
                  if (e.key === "Enter") {
                    this.setState({
                      tags: [...this.state.tags, e.target.value],
                    });
                    this.setState({ new_tag: "" });
                  }
                }}
              />
              <div className="tags_cont">
                {this.state.tags.map((row, i) => {
                  return (
                    <Chip
                      key={i}
                      label={row}
                      onDelete={() =>
                        this.setState({
                          tags: this.tags.filter((row2) => row2 !== row),
                        })
                      }
                      color="primary"
                    />
                  );
                })}
              </div>
              <br />
              <br />
              <div className="btn__cont modal">
                <Button
                  color="primary"
                  variant="outlined"
                  onClick={this.handleClose}
                >
                  cancel
                </Button>
                <Button
                  color="primary"
                  variant="contained"
                  onClick={() => {
                    set_post_tags(this.state.tags);
                    add_post(post, login);
                  }}
                >
                  Submit
                </Button>
              </div>
            </div>
          </Fade>
        </Modal>
      </div>
    );
  }
}

export default Header;
