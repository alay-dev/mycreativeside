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
  Avatar,
  Dialog,
  DialogActions,
  DialogTitle,
  DialogContent,
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
  constructor(props) {
    super(props);
    this.state = {
      current_li: 0,
      edit: false,
    };
  }

  handleClose = () => {
    this.setState({
      edit: false,
    });
  };

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
      delete_self,
      update_password,
      loader,
      user,
      login,
    } = this.props;
    return (
      // <div className="me__cont">
      //   <Card className="update_profile">
      //     <CardContent>
      //       <h3>Update Profile</h3>
      //       <br />
      //       <br />
      //       <form
      //         onSubmit={(e) => {
      //           e.preventDefault();
      //         }}
      //       >
      //         <TextField
      //           fullWidth
      //           size="small"
      //           label="Name"
      //           type="text"
      //           variant="outlined"
      //           onChange={(e) => {
      //             set_user_name(e.target.value);
      //           }}
      //           value={user.name}
      //         />
      //         <br />
      //         <br />
      //         <TextField
      //           fullWidth
      //           size="small"
      //           label="Email"
      //           type="email"
      //           variant="outlined"
      //           onChange={(e) => {
      //             set_user_email(e.target.value);
      //           }}
      //           value={user.email}
      //         />
      //         <br />
      //         <br />
      //         <TextField
      //           size="small"
      //           fullWidth
      //           label="Contact No."
      //           type="text"
      //           inputProps={{ maxLength: 10 }}
      //           variant="outlined"
      //           onChange={(e) => {
      //             set_user_contact_num(e.target.value);
      //           }}
      //           value={user.contact_num}
      //         />
      //         <InputLabel style={{ marginTop: "0.8rem" }}>
      //           Profile pic
      //         </InputLabel>
      //         <Input
      //           id="outlined-basic"
      //           label="Choose post image "
      //           variant="outlined"
      //           type="file"
      //           fullWidth
      //           onChange={(e) => {
      //             set_user_img(e.target.files[0]);
      //           }}
      //         />
      //         <br /> <br />
      //         <CardActions>
      //           <ColorButton
      //             type="submit"
      //             color="primary"
      //             variant="contained"
      //             onClick={() => {
      //               update_user(login._id, user, login);
      //             }}
      //             style={{
      //               height: "2.5rem",
      //             }}
      //           >
      //             {loader.update_profile_loader ? (
      //               <CircularProgress size={20} />
      //             ) : (
      //               "Update"
      //             )}
      //           </ColorButton>
      //         </CardActions>
      //         <div className="btn__cont"></div>
      //       </form>
      //     </CardContent>
      //   </Card>
      //   <Card className="update_profile">
      //     <CardContent>
      //       <h3>Change Password</h3>
      //       <br />
      //       <br />
      //       <form
      //         onSubmit={(e) => {
      //           e.preventDefault();
      //         }}
      //       >
      //         <TextField
      //           size="small"
      //           fullWidth
      //           label="Current Password"
      //           type="password"
      //           variant="outlined"
      //           onChange={(e) => {
      //             set_user_current_password(e.target.value);
      //           }}
      //           value={user.current_password}
      //         />
      //         <br />
      //         <br />
      //         <TextField
      //           size="small"
      //           fullWidth
      //           label="Password"
      //           type="password"
      //           variant="outlined"
      //           onChange={(e) => {
      //             set_user_password(e.target.value);
      //           }}
      //           value={user.password}
      //         />
      //         <br />
      //         <br />
      //         <TextField
      //           size="small"
      //           fullWidth
      //           label="Confirm Password"
      //           type="password"
      //           variant="outlined"
      //           value={user.confirm_password}
      //           onChange={(e) => {
      //             set_user_confirm_password(e.target.value);
      //           }}
      //         />
      //         <br />
      //         <br />
      //         <CardActions>
      //           <ColorButton
      //             type="submit"
      //             color="primary"
      //             variant="contained"
      //             onClick={() => {
      //               update_password(login._id, user, login);
      //             }}
      //             style={{
      //               height: "2.5rem",
      //             }}
      //           >
      //             {loader.update_password_loader ? (
      //               <CircularProgress size={20} />
      //             ) : (
      //               "Update"
      //             )}
      //           </ColorButton>
      //         </CardActions>
      //         <div className="btn__cont"></div>
      //       </form>
      //     </CardContent>
      //   </Card>
      //   <Card className="update_profile">
      //     <CardContent>
      //       <h3>Delete account</h3>
      //       <br />
      //       <br />
      //       <form
      //         onSubmit={(e) => {
      //           e.preventDefault();
      //         }}
      //       >
      //         <TextField
      //           size="small"
      //           fullWidth
      //           label="Password"
      //           type="password"
      //           variant="outlined"
      //           onChange={(e) => {
      //             set_user_password(e.target.value);
      //           }}
      //           value={user.set_user_password}
      //         />
      //         <br />
      //         <br />
      //         <CardActions>
      //           <ColorButton
      //             type="submit"
      //             color="primary"
      //             variant="contained"
      //             onClick={() => {
      //               delete_user(login._id);
      //             }}
      //             style={{
      //               height: "2.5rem",
      //             }}
      //           >
      //             {loader.delete_loader ? (
      //               <CircularProgress size={20} />
      //             ) : (
      //               "Delete"
      //             )}
      //           </ColorButton>
      //         </CardActions>
      //         <div className="btn__cont"></div>
      //       </form>
      //     </CardContent>
      //   </Card>
      //   <SnackBar {...this.props} />
      // </div>
      <div className="me__profile">
        <div className="info__cont">
          <div className="info">
            <div>
              <h2>{login.name}</h2>
              <span>{login.contact_no}</span>
              <br />
              <span>{login.email}</span>
            </div>
            <Avatar
              alt={login.name}
              src={login.url}
              style={{ width: "5rem", height: "5rem " }}
            />
          </div>
        </div>
        <Card>
          <div className="me__card--content">
            <ul>
              <li
                className={this.state.current_li === 0 ? "active" : ""}
                onClick={() => this.setState({ current_li: 0 })}
              >
                {" "}
                update Profile
              </li>
              <li
                className={this.state.current_li === 1 ? "active" : ""}
                onClick={() => this.setState({ current_li: 1 })}
              >
                {/* <FavoriteIcon fontSize="small" /> */}
                Change Password
              </li>
              {/* <li
                className={this.state.current_li === 2 ? "active" : ""}
                onClick={() => this.setState({ current_li: 2 })}
              >
                My posts
              </li> */}
              <li
                className={this.state.current_li === 3 ? "active" : ""}
                onClick={() => this.setState({ current_li: 3 })}
              >
                {/* <LocationOnIcon fontSize="small" /> */}
                Deactivate Account
              </li>
            </ul>
            {this.state.current_li === 0 ? (
              <div className="panel">
                <h3>Update profile</h3>
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
                  <ColorButton
                    type="submit"
                    color="primary"
                    variant="contained"
                    onClick={() => {
                      update_user(login._id, user, true, login);
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
                  <div className="btn__cont"></div>
                </form>
              </div>
            ) : (
              ""
            )}
            {this.state.current_li === 1 ? (
              <div className="panel">
                <h3>Change password</h3>
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
              </div>
            ) : (
              ""
            )}
            {/* {this.state.current_li === 2 ? (
              <div className="panel">
                <h3>My Posts</h3>
              </div>
            ) : (
              ""
            )} */}
            {this.state.current_li === 3 ? (
              <div className="panel">
                <h3>Deactive Account</h3>
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
                        delete_self(login._id);
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
              </div>
            ) : (
              ""
            )}
          </div>
        </Card>
        <Dialog
          open={this.state.edit}
          onClose={this.handleClose}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="form-dialog-title">Edit Profile</DialogTitle>
          <DialogContent>
            <TextField
              autoFocus
              margin="dense"
              label="Name"
              type="text"
              fullWidth
            />
            <TextField
              autoFocus
              margin="dense"
              label="Email Address"
              type="email"
              fullWidth
            />
            <TextField
              autoFocus
              margin="dense"
              label="Contact no."
              type="text"
              fullWidth
            />
            <TextField autoFocus margin="dense" type="file" fullWidth />
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClose} color="primary">
              Cancel
            </Button>
            <Button onClick={this.handleClose} color="primary">
              update
            </Button>
          </DialogActions>
        </Dialog>
        <SnackBar {...this.props} />
      </div>
    );
  }
}

export default me;
