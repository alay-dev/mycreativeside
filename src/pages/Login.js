import React from "react";
import {
  TextField,
  Card,
  CardContent,
  Button,
  Divider,
} from "@material-ui/core";
import { Link } from "react-router-dom";
import FacebookLogin from "react-facebook-login/dist/facebook-login-render-props";
// import GoogleIcon from "@material-ui/icons/Google";
import GoogleLogin from "react-google-login";
import "../css/login.css";

const Login = () => {
  const responseGoogle = (response) => {
    console.log(response);
  };
  const responseFacebook = (response) => {
    console.log(response);
  };
  return (
    <div className="login">
      <Card className="login__card">
        <CardContent>
          <h4>Login</h4>
          <div className="social_login_cont">
            <GoogleLogin
              clientId="334753515034-1lf8198uclo1fbpsld23hv2ko4bhsnoa.apps.googleusercontent.com"
              buttonText="Login"
              onSuccess={responseGoogle}
              onFailure={responseGoogle}
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
              callback={responseFacebook}
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
          <TextField fullWidth label="Email" type="email" variant="outlined" />
          <br />
          <br />
          <TextField
            fullWidth
            label="Password"
            type="password"
            variant="outlined"
          />
          <br /> <br />
          <div className="btn__cont">
            <Button color="primary" variant="contained">
              Login
            </Button>
          </div>
          <br />
          <Link>Forgot password ?</Link>
        </CardContent>
      </Card>
    </div>
  );
};

export default Login;
