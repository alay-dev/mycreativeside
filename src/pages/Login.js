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
        <div className="login-wrap">
          <div className="login-html">
            <input
              id="tab-1"
              type="radio"
              name="tab"
              className="sign-in"
              checked
            />
            <label htmlFor="tab-1" className="tab">
              Login In
            </label>
            {/* <input id="tab-2" type="radio" name="tab" className="sign-up" /> */}
            {/* <label htmlFor="tab-2" className="tab">
              Sign Up
            </label> */}
            <div className="login-form">
              <div className="sign-in-htm">
                <div className="group">
                  <label htmlFor="user" className="label">
                    Username
                  </label>
                  <input
                    id="user"
                    type="text"
                    className="input"
                    onChange={(e) => {
                      set_user_email(e.target.value);
                    }}
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
                {/* <div className="group">
                  <input id="check" type="checkbox" className="check" checked />
                  <label htmlFor="check">
                    <span className="icon"></span> Keep me Signed in
                  </label>
                </div> */}
                <div className="group">
                  <buton
                    type="submit"
                    disabled={user.email && user.password ? false : true}
                    className="button"
                    value="Sign In"
                    onClick={(e) => {
                      e.preventDefault();
                      do_login(user);
                    }}
                    onSubmit={(e) => {
                      e.preventDefault();
                      do_login(user);
                    }}
                  >
                    {" "}
                    {loader.login_loader ? (
                      <CircularProgress size={20} />
                    ) : (
                      "Login"
                    )}{" "}
                  </buton>
                </div>
                <div className="hr"></div>
                {/* <div className="foot-lnk">
                  <a href="#forgot">Forgot Password?</a>
                </div> */}
              </div>
              {/* <div className="sign-up-htm">
                <div className="group">
                  <label htmlFor="user" className="label">
                    Username
                  </label>
                  <input id="user" type="text" className="input" />
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
                  />
                </div>
                <div className="group">
                  <label htmlFor="pass" className="label">
                    Email Address
                  </label>
                  <input id="pass" type="text" className="input" />
                </div>
                <div className="group">
                  <input type="submit" className="button" value="Sign Up" />
                </div>
                <div className="hr"></div>
                <div className="foot-lnk">
                  <label htmlFor="tab-1">Already Member?</label>
                </div>
              </div> */}
            </div>
          </div>
        </div>
        <SnackBar {...this.props} />
      </div>
    );
  }
}

// class Login extends Component {
//   componentDidMount() {
//     if (localStorage.getItem("mycreativeside_token")) {
//       history.push("/");
//     }
//   }
//   render() {
//     const {
//       login,
//       user,
//       set_user_email,
//       set_user_password,
//       do_login,
//       loader,
//       googleLogin,
//     } = this.props;
//     return (
//       <div className="login">
//         <Card className="login__card">
//           <CardContent>
//             <h4>Login</h4>

//             <Divider />
//             <br />
//             <form
//               onSubmit={(e) => {
//                 e.preventDefault();
//                 do_login(user);
//               }}
//             >
//               <TextField
//                 fullWidth
//                 label="Email"
//                 type="email"
//                 variant="outlined"
//                 onChange={(e) => {
//                   set_user_email(e.target.value);
//                 }}
//               />
//               <br />
//               <br />
//               <TextField
//                 fullWidth
//                 label="Password"
//                 type="password"
//                 variant="outlined"
//                 onChange={(e) => {
//                   set_user_password(e.target.value);
//                 }}
//               />
//               <br /> <br />
//               <div className="btn__cont">
//                 <ColorButton
//                   fullWidth
//                   disabled={user.email && user.password ? false : true}
//                   type="submit"
//                   color="primary"
//                   variant="contained"
//                   onClick={() => {
//                     do_login(user);
//                   }}
//                   style={{
//                     height: "2.5rem",
//                   }}
//                 >
//                   {loader.login_loader ? (
//                     <CircularProgress size={20} />
//                   ) : (
//                     "Login"
//                   )}
//                 </ColorButton>
//               </div>
//             </form>
//             <br />
//             <Link>Forgot password ?</Link>
//           </CardContent>
//         </Card>
//         <SnackBar {...this.props} />
//       </div>
//     );
//   }
// }

export default Login;
