import React, { Component } from "react";
import {
  Avatar,
  Divider,
  TextField,
  Button,
  Dialog,
  Toolbar,
  IconButton,
  Slide,
  InputLabel,
  CardActions,
  CircularProgress,
} from "@material-ui/core";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import CloseIcon from "@material-ui/icons/Close";
import "../css/meMobile.css";
export default class MeMobile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bottom_drawer: false,
      s_type: "",
    };
  }

  handleClose = () => {
    this.setState({ bottom_drawer: false });
  };

  Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
  });
  render() {
    const {
      login,
      set_user_password,
      set_user_current_password,
      set_user_confirm_password,
      user,
      update_password,
      loader,
      delete_self,
      set_user_name,
      set_user_img,
      update_user,
      set_user_email,
    } = this.props;
    return (
      <div className="meMobile">
        <div className="account__detail">
          <Avatar
            alt={login.name}
            src={login.url}
            style={{ width: "5rem", height: "5rem ", marginBottom: "1rem " }}
          />
          <h5 style={{ color: "#fff", fontSize: "1.1rem" }}>{login.name}</h5>
          <p style={{ color: "#fff" }}>{login.email}</p>
          <button
            className="edit__profile--btn"
            onClick={() =>
              this.setState({ bottom_drawer: true, s_type: "edit_profile" })
            }
          >
            Edit Profile
          </button>
        </div>
        <Divider />
        <div className="options">
          <ul>
            <li
              onClick={() => {
                this.setState({
                  bottom_drawer: true,
                  s_type: "change_password",
                });
              }}
            >
              <p>Change Password</p> <ChevronRightIcon />
            </li>
            <li
              onClick={() => {
                this.setState({
                  bottom_drawer: true,
                  s_type: "deactivate_account",
                });
              }}
            >
              <p>Deactivate Account</p> <ChevronRightIcon />
            </li>
          </ul>
        </div>
        <Dialog
          fullScreen
          open={this.state.bottom_drawer}
          onClose={this.handleClose}
          TransitionComponent={this.Transition}
        >
          <Toolbar
            style={{
              backgroundColor: "#d4f1f4",
              position: "fixed",
              width: "100%",
              zIndex: "100",
              boxShadow: "0px 4px 9px 0px rgba(0,0,0,0.45)",
            }}
          >
            <IconButton
              edge="start"
              color="inherit"
              onClick={this.handleClose}
              aria-label="close"
            >
              <CloseIcon />
            </IconButton>
            {this.state.s_type === "change_password" ? (
              <h5 className="tab__heading">Change password</h5>
            ) : (
              ""
            )}
            {this.state.s_type === "deactivate_account" ? (
              <h5 className="tab__heading">Deactivate account</h5>
            ) : (
              ""
            )}

            {this.state.s_type === "edit_profile" ? (
              <h5 className="tab__heading">Edit Profile</h5>
            ) : (
              ""
            )}
          </Toolbar>
          {this.state.s_type === "change_password" ? (
            <div className="cont">
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                }}
              >
                <TextField
                  size="small"
                  fullWidth
                  label="Current password"
                  type="password"
                  onChange={(e) => {
                    set_user_current_password(e.target.value);
                  }}
                  value={user.current_password}
                />
                <br />
                <br />
                <TextField
                  size="small"
                  fullWidth
                  label="New password"
                  type="password"
                  onChange={(e) => {
                    set_user_password(e.target.value);
                  }}
                  value={user.password}
                />
                <br />
                <br />
                <TextField
                  size="small"
                  fullWidth
                  label="Confirm password"
                  type="password"
                  value={user.confirm_password}
                  onChange={(e) => {
                    set_user_confirm_password(e.target.value);
                  }}
                />
                <br />
                <br />
                <CardActions>
                  <Button
                    style={{ backgroundColor: "#05445e", color: "#fff" }}
                    type="submit"
                    fullWidth
                    color="primary"
                    variant="contained"
                    onClick={() => {
                      this.handleClose();
                      update_password(login._id, user, login);
                    }}
                  >
                    {loader.update_password_loader ? (
                      <CircularProgress size={20} />
                    ) : (
                      "Update"
                    )}
                  </Button>
                </CardActions>
                <div className="btn__cont"></div>
              </form>
            </div>
          ) : (
            ""
          )}
          {this.state.s_type === "deactivate_account" ? (
            <div className="cont">
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                }}
              >
                <TextField
                  size="small"
                  fullWidth
                  label="Password"
                  type="password"
                  onChange={(e) => {
                    set_user_password(e.target.value);
                  }}
                  value={user.set_user_password}
                />
                <br />
                <br />
                <CardActions>
                  <Button
                    fullWidth
                    type="submit"
                    color="secondary"
                    variant="contained"
                    onClick={() => {
                      this.handleClose();
                      delete_self(login._id);
                    }}
                  >
                    {loader.delete_loader ? (
                      <CircularProgress size={20} />
                    ) : (
                      "Delete"
                    )}
                  </Button>
                </CardActions>
                <div className="btn__cont"></div>
              </form>
            </div>
          ) : (
            ""
          )}

          {this.state.s_type === "edit_profile" ? (
            <div className="cont">
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                }}
              >
                <TextField
                  autoFocus
                  margin="dense"
                  label="Name"
                  type="text"
                  fullWidth
                  onChange={(e) => {
                    set_user_name(e.target.value);
                  }}
                  value={user.name}
                  defaultValue={login.name}
                />
                <TextField
                  autoFocus
                  margin="dense"
                  label="Email Address"
                  type="email"
                  fullWidth
                  onChange={(e) => {
                    set_user_email(e.target.value);
                  }}
                  value={user.email}
                  defaultValue={login.email}
                />
                <InputLabel style={{ marginTop: "1rem" }}>
                  Profile Pic
                </InputLabel>
                <TextField
                  autoFocus
                  margin="dense"
                  type="file"
                  fullWidth
                  onChange={(e) => {
                    set_user_img(e.target.files[0]);
                  }}
                />
                <br />
                <br />
                <Button
                  type="submit"
                  fullWidth
                  color="primary"
                  variant="contained"
                  onClick={() => {
                    this.handleClose();
                    update_user(login._id, user, true, login);
                  }}
                  style={{ backgroundColor: "#05445e", color: "#fff" }}
                >
                  {loader.update_profile_loader ? (
                    <CircularProgress size={20} />
                  ) : (
                    "Update"
                  )}
                </Button>
              </form>
            </div>
          ) : (
            ""
          )}
        </Dialog>
      </div>
    );
  }
}
