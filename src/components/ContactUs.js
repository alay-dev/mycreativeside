import React from "react";
import contactUs from "../img/contact.png";

import "../css/contactus.css";
import { Button, TextField } from "@material-ui/core";

const ContactUs = () => {
  return (
    <div className="contactus">
      <img src={contactUs} alt="contact us" />
      <div className="form">
        <p>Reach us</p>
        <TextField
          fullWidth
          type="text"
          label="Name"
          required={true}
          variant="outlined"
        />
        <br />
        <br />
        <TextField
          fullWidth
          type="email"
          label="Email"
          required={true}
          variant="outlined"
        />
        <br />
        <br />
        <TextField
          fullWidth
          type="text"
          label="Contact no. "
          variant="outlined"
        />
        <br />
        <br />
        <TextField
          fullWidth
          label="Message"
          multiline
          rows={5}
          variant="outlined"
          required={true}
        />
        <br />
        <br />
        <div className="btn__cont">
          <Button color="primary" variant="contained">
            Submit
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
