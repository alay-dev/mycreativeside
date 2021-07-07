import React from "react";
import {
  TextField,
  Card,
  CardContent,
  Button,
  Divider,
  FormControl,
  CircularProgress,
} from "@material-ui/core";
import { Link } from "react-router-dom";
import FacebookLogin from "react-facebook-login/dist/facebook-login-render-props";
import GoogleLogin from "react-google-login";
import "../css/login.css";
import { Component } from "react";
import history from "../history";
import SnackBar from "../components/Snackbar";

class Login extends Component {
  componentDidMount() {
    if (localStorage.getItem("mycreativeside_token")) {
      history.push("/");
    }
  }
  responseGoogle = (response) => {
    console.log(response);
  };
  responseFacebook = (response) => {
    console.log(response);
  };
  render() {
    const { login, user, set_user_email, set_user_password, do_login, loader } =
      this.props;
    return (
      <div className="login">
        <Card className="login__card">
          <CardContent>
            <h4>Login</h4>
            <div className="social_login_cont">
              <GoogleLogin
                clientId="334753515034-1lf8198uclo1fbpsld23hv2ko4bhsnoa.apps.googleusercontent.com"
                buttonText="Login"
                onSuccess={this.responseGoogle}
                onFailure={this.responseGoogle}
                cookiePolicy={"single_host_origin"}
                render={(renderProps) => (
                  <Button
                    style={{ borderRadius: "2rem", marginBottom: "1rem" }}
                    onClick={renderProps.onClick}
                    variant="contained"
                    color="secondary"
                    startIcon={<i className="fab fa-google" />}
                  >
                    Login With Google
                  </Button>
                )}
              />
              <FacebookLogin
                appId="545004203320059"
                fields="name,email,picture"
                callback={this.responseFacebook}
                render={(renderProps) => (
                  <Button
                    style={{ borderRadius: "2rem", marginBottom: "1rem" }}
                    onClick={renderProps.onClick}
                    variant="contained"
                    color="primary"
                    startIcon={<i className="fab fa-facebook-f" />}
                  >
                    Login With Facebook
                  </Button>
                )}
              />
            </div>
            <p>OR</p>
            <Divider />
            <br />
            <form
              onSubmit={(e) => {
                e.preventDefault();
                do_login(user);
              }}
            >
              <TextField
                fullWidth
                label="Email"
                type="email"
                variant="outlined"
                onChange={(e) => {
                  set_user_email(e.target.value);
                }}
              />
              <br />
              <br />
              <TextField
                fullWidth
                label="Password"
                type="password"
                variant="outlined"
                onChange={(e) => {
                  set_user_password(e.target.value);
                }}
              />
              <br /> <br />
              <div className="btn__cont">
                <Button
                  type="submit"
                  color="primary"
                  variant="contained"
                  onClick={() => {
                    do_login(user);
                  }}
                  style={{ width: "5rem", height: "2rem" }}
                >
                  {loader.login_loader ? (
                    <CircularProgress size={20} />
                  ) : (
                    "Login"
                  )}
                </Button>
              </div>
            </form>
            <br />
            <Link>Forgot password ?</Link>
          </CardContent>
        </Card>
        <SnackBar {...this.props} />
      </div>
    );
  }
}

export default Login;
