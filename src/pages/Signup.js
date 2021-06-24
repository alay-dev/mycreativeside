import { CardContent, TextField, Button, Card } from "@material-ui/core";
import React from "react";
import { Link } from "react-router-dom";

import signup from "../img/signup.svg";
import "../css/Signup.css";

const Signup = () => {
  return (
    <div className="signup">
      <img src={signup} alt="signup img" />
      <Card className="signup__card">
        <CardContent>
          <h4>Signup</h4>
          <TextField
            fullWidth
            label="Full Name"
            type="text"
            variant="outlined"
            size="small"
          />
          <br /> <br />
          <TextField
            fullWidth
            label="Email"
            type="email"
            variant="outlined"
            size="small"
          />
          <br /> <br />
          <TextField
            fullWidth
            label="Contact No."
            type="text"
            variant="outlined"
            size="small"
          />
          <br />
          <br />
          <TextField
            fullWidth
            label="Password"
            type="password"
            variant="outlined"
            size="small"
          />
          <br />
          <br />
          <TextField
            fullWidth
            label="Confirm Password"
            type="password"
            variant="outlined"
            size="small"
          />
          <br /> <br />
          <div className="btn__cont">
            <Button color="primary" variant="contained">
              Signup
            </Button>
          </div>
          <br />
          <Link to="/login">Already have an account? Login</Link>
        </CardContent>
      </Card>
    </div>
  );
};

export default Signup;
