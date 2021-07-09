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
            <a href="https://www.facebook.com/profile.php?id=100008729387495">
              <i className="fab fa-facebook" />
            </a>
            <a href="https://www.instagram.com/invites/contact/?i=1j4mtqahn97c6&utm_content=2ojrefy">
              <i className="fab fa-instagram" />
            </a>
            <a href="https://t.me/mycreativeside">
              <i className="fab fa-telegram" />
            </a>
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
