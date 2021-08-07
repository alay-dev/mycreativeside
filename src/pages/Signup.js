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
        <div className="login-wrap">
          <div className="login-html">
            <input
              id="tab-1"
              type="radio"
              name="tab"
              className="sign-in"
              checked
            />

            <input id="tab-2" type="radio" name="tab" className="sign-up" />
            <label style={{ color: "#fff" }} htmlFor="tab-2" className="tab">
              Sign Up
            </label>
            <div className="login-form">
              <div className="sign-up-htm">
                <div className="group">
                  <label htmlFor="user" className="label">
                    Full Name
                  </label>
                  <input
                    id="user"
                    type="text"
                    className="input"
                    onChange={(e) => set_user_name(e.target.value)}
                  />
                </div>
                <div className="group">
                  <label htmlFor="pass" className="label">
                    Email Address
                  </label>
                  <input
                    id="pass"
                    type="text"
                    className="input"
                    onChange={(e) => set_user_email(e.target.value)}
                  />
                </div>
                <div className="group">
                  <label htmlFor="pass" className="label">
                    Password
                  </label>
                  <input
                    id="pass"
                    type="password"
                    className="input"
                    data-type="password"
                    onChange={(e) => set_user_password(e.target.value)}
                  />
                </div>
                <div className="group">
                  <label htmlFor="pass" className="label">
                    Repeat Password
                  </label>
                  <input
                    id="pass"
                    type="password"
                    className="input"
                    data-type="password"
                    onChange={(e) => set_user_confirm_password(e.target.value)}
                  />
                </div>

                <div className="group">
                  <input
                    type="submit"
                    className="button"
                    value="Sign Up"
                    onClick={(e) => {
                      e.preventDefault();
                      signup(user);
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <SnackBar {...this.props} />
      </div>
    );
  }
}

export default Signup;
