import React, { Component } from "react";
import {
  Card,
  CardContent,
  CircularProgress,
  TextField,
  withStyles,
  Button,
  CardActions,
  Input,
  InputLabel,
} from "@material-ui/core";
import SnackBar from "../components/Snackbar";

import "../css/me.css";
import { delete_user } from "../actions/user/userActions";

const ColorButton = withStyles((theme) => ({
  root: {
    // color: theme.palette.getContrastText(blueGrey[400]),
    backgroundColor: "#05445e",
    "&:hover": {
      backgroundColor: "#6C6392",
    },
  },
}))(Button);

class me extends Component {
  componentDidMount() {
    this.props.set_user_name(this.props.login.name);
    this.props.set_user_email(this.props.login.email);
    this.props.set_user_contact_num(this.props.login.contact_no);
    this.props.set_user_old_img(this.props.login.url);
  }
  render() {
    const {
      set_user_email,
      set_user_password,
      set_user_contact_num,
      set_user_confirm_password,
      set_user_current_password,
      set_user_img,
      set_user_name,
      update_user,
      delete_user,
      update_password,
      loader,
      user,
      login,
    } = this.props;
    return (
      <div className="me__cont">
        <Card className="update_profile">
          <CardContent>
            <h3>Update Profile</h3>
            <br />
            <br />
            <form
              onSubmit={(e) => {
                e.preventDefault();
              }}
            >
              <TextField
                fullWidth
                size="small"
                label="Name"
                type="text"
                variant="outlined"
                onChange={(e) => {
                  set_user_name(e.target.value);
                }}
                value={user.name}
              />
              <br />
              <br />
              <TextField
                fullWidth
                size="small"
                label="Email"
                type="email"
                variant="outlined"
                onChange={(e) => {
                  set_user_email(e.target.value);
                }}
                value={user.email}
              />
              <br />
              <br />
              <TextField
                size="small"
                fullWidth
                label="Contact No."
                type="text"
                inputProps={{ maxLength: 10 }}
                variant="outlined"
                onChange={(e) => {
                  set_user_contact_num(e.target.value);
                }}
                value={user.contact_num}
              />
              <InputLabel style={{ marginTop: "0.8rem" }}>
                Profile pic
              </InputLabel>
              <Input
                id="outlined-basic"
                label="Choose post image "
                variant="outlined"
                type="file"
                fullWidth
                onChange={(e) => {
                  set_user_img(e.target.files[0]);
                }}
              />
              <br /> <br />
              <CardActions>
                <ColorButton
                  type="submit"
                  color="primary"
                  variant="contained"
                  onClick={() => {
                    update_user(login._id, user, login);
                  }}
                  style={{
                    height: "2.5rem",
                  }}
                >
                  {loader.update_profile_loader ? (
                    <CircularProgress size={20} />
                  ) : (
                    "Update"
                  )}
                </ColorButton>
              </CardActions>
              <div className="btn__cont"></div>
            </form>
          </CardContent>
        </Card>
        <Card className="update_profile">
          <CardContent>
            <h3>Change Password</h3>
            <br />
            <br />
            <form
              onSubmit={(e) => {
                e.preventDefault();
              }}
            >
              <TextField
                size="small"
                fullWidth
                label="Current Password"
                type="password"
                variant="outlined"
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
                label="Password"
                type="password"
                variant="outlined"
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
                label="Confirm Password"
                type="password"
                variant="outlined"
                value={user.confirm_password}
                onChange={(e) => {
                  set_user_confirm_password(e.target.value);
                }}
              />
              <br />
              <br />
              <CardActions>
                <ColorButton
                  type="submit"
                  color="primary"
                  variant="contained"
                  onClick={() => {
                    update_password(login._id, user, login);
                  }}
                  style={{
                    height: "2.5rem",
                  }}
                >
                  {loader.update_password_loader ? (
                    <CircularProgress size={20} />
                  ) : (
                    "Update"
                  )}
                </ColorButton>
              </CardActions>
              <div className="btn__cont"></div>
            </form>
          </CardContent>
        </Card>
        <Card className="update_profile">
          <CardContent>
            <h3>Delete account</h3>
            <br />
            <br />
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
                variant="outlined"
                onChange={(e) => {
                  set_user_password(e.target.value);
                }}
                value={user.set_user_password}
              />
              <br />
              <br />
              <CardActions>
                <ColorButton
                  type="submit"
                  color="primary"
                  variant="contained"
                  onClick={() => {
                    delete_user(login._id);
                  }}
                  style={{
                    height: "2.5rem",
                  }}
                >
                  {loader.delete_loader ? (
                    <CircularProgress size={20} />
                  ) : (
                    "Delete"
                  )}
                </ColorButton>
              </CardActions>
              <div className="btn__cont"></div>
            </form>
          </CardContent>
        </Card>
        <SnackBar {...this.props} />
      </div>
    );
  }
}

export default me;
