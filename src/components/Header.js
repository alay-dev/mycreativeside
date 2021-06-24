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
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { green, blueGrey } from "@material-ui/core/colors";
import MenuIcon from "@material-ui/icons/Menu";
import CloseIcon from "@material-ui/icons/Close";
// import TagInput from "./TagInput";

import "../css/header.css";
import "../css/contribution.css";

const ColorButton = withStyles((theme) => ({
  root: {
    color: theme.palette.getContrastText(blueGrey[400]),
    backgroundColor: green[500],
    "&:hover": {
      backgroundColor: green[700],
    },
  },
}))(Button);

const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

const Header = () => {
  const [menu, isOpen] = useState(false);
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [tags, setTags] = useState([]);
  const [newTag, setNewTag] = useState("");
  const handleDelete = () => {};

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className="header">
      <Link
        to="/"
        onClick={() => {
          isOpen(false);
        }}
      >
        <img src={logo} alt="logo" />
      </Link>
      {menu ? (
        <CloseIcon className="menu__icon" onClick={() => isOpen(false)} />
      ) : (
        <MenuIcon className="menu__icon" onClick={() => isOpen(true)} />
      )}
      <ul className="main">
        <Link to="/" className="item current">
          Home
        </Link>
        <Link className="item" onClick={handleOpen}>
          Contribute
        </Link>
        <Link to="/" className="item">
          Posts
        </Link>
        <Link to="/login" className="item">
          Login
        </Link>
        <Link to="/signup" style={{ textDecoration: "none" }}>
          <ColorButton color="primary" variant="contained">
            Signup
          </ColorButton>
        </Link>
      </ul>
      {menu ? (
        <ul className="header__nav" onClick={() => isOpen(false)}>
          <Link to="/" className="item current">
            Home
          </Link>
          <Link className="item" onClick={handleOpen}>
            Contribute
          </Link>
          <Link to="/" className="item">
            Posts
          </Link>
          <Link to="/login" className="item">
            Login
          </Link>
          <Link to="signup" style={{ textDecoration: "none" }}>
            <ColorButton color="primary" variant="contained">
              Signup
            </ColorButton>
          </Link>
        </ul>
      ) : (
        ""
      )}
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className="contribution__bg">
            <p>Want to contribute?</p>
            <br />
            <InputLabel>Choose image file</InputLabel>
            <TextField fullWidth id="standard-search" label="" type="file" />
            <br />
            <br />
            <TextField
              id="standard-search"
              fullWidth
              label="Caption"
              type="text"
            />
            <br />
            <br />
            <InputLabel>Tags</InputLabel>
            <TextField
              value={newTag}
              label="Enter to add tag"
              fullWidth
              type="text"
              onChange={(e) => {
                setNewTag(e.target.value);
              }}
              onKeyPress={(e) => {
                if (e.key === "Enter") {
                  setTags([...tags, newTag]);
                  setNewTag("");
                }
              }}
            />
            <div className="tags_cont">
              {console.log(tags, typeof tags)}
              {tags.map((row, i) => {
                return (
                  <Chip
                    key={i}
                    label={row}
                    onDelete={() =>
                      setTags(tags.filter((row2) => row2 !== row))
                    }
                    color="primary"
                  />
                );
              })}
            </div>
            <br />
            <br />
            <div className="btn__cont modal">
              <Button color="primary" variant="outlined" onClick={handleClose}>
                cancel
              </Button>
              <Button color="primary" variant="contained">
                Submit
              </Button>
            </div>
          </div>
        </Fade>
      </Modal>
    </div>
  );
};

export default Header;
