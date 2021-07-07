import {
  CardContent,
  TextField,
  Button,
  Card,
  Input,
  InputLabel,
  CircularProgress,
} from "@material-ui/core";
import React from "react";
import { Link } from "react-router-dom";
import history from "../history";
import SnackBar from "../components/Snackbar";

import signupImg from "../img/signup.svg";
import "../css/Signup.css";
import { Component } from "react";

class Signup extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    if (localStorage.getItem("mycreativeside_token")) {
      history.push("/");
    }
  }

  componentWillUnmount() {
    this.props.set_snackbar_status(false);
  }

  render() {
    const {
      user,
      signup,
      set_user_confirm_password,
      set_user_contact_num,
      set_user_email,
      set_user_img,
      set_user_name,
      set_user_password,
      loader,
    } = this.props;
    return (
      <div className="signup">
        <img src={signupImg} alt="signup img" />
        <Card className="signup__card">
          <CardContent>
            <h4>Signup</h4>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                signup(user);
              }}
            >
              <TextField
                fullWidth
                label="Full Name"
                type="text"
                variant="outlined"
                size="small"
                onChange={(e) => {
                  set_user_name(e.target.value);
                }}
              />
              <br /> <br />
              <TextField
                fullWidth
                label="Email"
                type="email"
                variant="outlined"
                size="small"
                onChange={(e) => {
                  set_user_email(e.target.value);
                }}
              />
              <InputLabel style={{ marginTop: "0.8rem" }}>
                Profile pic
              </InputLabel>
              <Input
                required
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
              <TextField
                fullWidth
                label="Contact No."
                inputProps={{ maxLength: 10 }}
                type="text"
                variant="outlined"
                size="small"
                onChange={(e) => {
                  set_user_contact_num(e.target.value);
                }}
              />
              <br />
              <br />
              <TextField
                fullWidth
                label="Password"
                type="password"
                variant="outlined"
                size="small"
                onChange={(e) => {
                  set_user_password(e.target.value);
                }}
              />
              <br />
              <br />
              <TextField
                fullWidth
                label="Confirm Password"
                type="password"
                variant="outlined"
                size="small"
                onChange={(e) => {
                  set_user_confirm_password(e.target.value);
                }}
              />
              <br /> <br />
              <div className="btn__cont">
                <Button
                  type="submit"
                  color="primary"
                  variant="contained"
                  onClick={() => {
                    signup(user);
                  }}
                  style={{ width: "5rem", height: "2rem" }}
                >
                  {loader.login_loader ? (
                    <CircularProgress size={20} />
                  ) : (
                    "Signup"
                  )}
                </Button>
              </div>
            </form>
            <br />
            <Link to="/login">Already have an account? Login</Link>
          </CardContent>
        </Card>
        <SnackBar {...this.props} />
      </div>
    );
  }
}

export default Signup;
