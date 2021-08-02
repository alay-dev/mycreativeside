import React from "react";
import contactUs from "../img/contact.png";

import "../css/contactus.css";
import { Button, TextField } from "@material-ui/core";

class ContactUs extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      message: "",
    };
  }
  render() {
    const { contact_us } = this.props;
    return (
      <div className="contactus">
        <img src={contactUs} alt="contact us" />
        <div className="form">
          <p>Share your thoughts</p>
          <TextField
            fullWidth
            type="text"
            label="Name"
            variant="outlined"
            value={this.state.name}
            onChange={(e) => this.setState({ name: e.target.value })}
          />
          <br />
          <br />
          <TextField
            fullWidth
            type="email"
            label="Email"
            variant="outlined"
            value={this.state.email}
            onChange={(e) => this.setState({ email: e.target.value })}
          />
          <br />
          <br />
          <TextField
            fullWidth
            label="Message"
            multiline
            rows={5}
            variant="outlined"
            value={this.state.message}
            onChange={(e) => this.setState({ message: e.target.value })}
          />
          <br />
          <br />
          <div className="btn__cont">
            <Button
              // color="primary"
              style={{ backgroundColor: "#05445e", color: "#fff" }}
              variant="contained"
              onClick={() => {
                contact_us(
                  this.state.name,
                  this.state.email,
                  this.state.message
                );
                this.setState({ name: "", email: "", maessage: "" });
              }}
            >
              Submit
            </Button>
          </div>
        </div>
      </div>
    );
  }
}

export default ContactUs;
