import React from "react";
import {
  TextField,
  Card,
  CardContent,
  Button,
  Divider,
  FormControl,
  CircularProgress,
  withStyles,
} from "@material-ui/core";
import { Link } from "react-router-dom";
import "../css/login.css";
import { Component } from "react";
import history from "../history";
import SnackBar from "../components/Snackbar";

const ColorButton = withStyles((theme) => ({
  root: {
    // color: theme.palette.getContrastText(blueGrey[400]),
    backgroundColor: "#05445e",
    "&:hover": {
      backgroundColor: "#6C6392",
    },
  },
}))(Button);
class Login extends Component {
  componentDidMount() {
    if (localStorage.getItem("mycreativeside_token")) {
      history.push("/");
    }
  }
  render() {
    const {
      login,
      user,
      set_user_email,
      set_user_password,
      do_login,
      loader,
      googleLogin,
    } = this.props;
    return (
      <div className="login">
        <Card className="login__card">
          <CardContent>
            <h4>Login</h4>
            {/* <div className="social_login_cont">
              <Button
                style={{ backgroundColor: "#db3236", width: "14rem" }}
                onClick={googleLogin}
                variant="contained"
                color="secondary"
                startIcon={<i className="fab fa-google" />}
              >
                Login With Google
              </Button>
              <Button
                style={{ backgroundColor: "#3b5998", width: "14rem" }}
                variant="contained"
                color="primary"
                startIcon={<i className="fab fa-facebook-f" />}
              >
                Login With Facebook
              </Button>
            </div> */}
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
                <ColorButton
                  fullWidth
                  disabled={user.email && user.password ? false : true}
                  type="submit"
                  color="primary"
                  variant="contained"
                  onClick={() => {
                    do_login(user);
                  }}
                  style={{
                    height: "2.5rem",
                  }}
                >
                  {loader.login_loader ? (
                    <CircularProgress size={20} />
                  ) : (
                    "Login"
                  )}
                </ColorButton>
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
