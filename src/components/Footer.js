import React from "react";
import "../css/footer.css";
import admin from "../img/admin.jpeg";

const Footer = () => {
  return (
    <div className="footer__cont">
      <div className="footer">
        <div className="about">
          <h4>About</h4>
          <p>
            myCreativeside is a shayari and poetry platform. You can find best
            poems and shayari here. You will enjoy here.
          </p>
        </div>
        <div className="me">
          <h4>Me</h4>
          <img src={admin} alt="admin img" />
          <p>Abhishek Gupta</p>
          <div className="social">
            <i className="fab fa-facebook" />
            <i className="fab fa-instagram" />
            <i className="fab fa-twitter" />
          </div>
        </div>
      </div>
      <div className="developer">
        <div className="right">
          <p>
            Developed and maintained by{" "}
            <a
              href="https://www.linkedin.com/in/alay-naru-837026200"
              style={{ color: "#fff" }}
            >
              Alay
            </a>
          </p>
        </div>
        <div className="left">
          <p>&copy; copyright 2021 | all rights reserved </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
