import React from "react";
import "./styles.css";
import FacebookIcon from "@mui/icons-material/Facebook";
import EmailIcon from "@mui/icons-material/Email";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";

function Footer() {
  function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }
  return (
    <div className="footer">
     <h2 className="logo" onClick={() => topFunction()}>

        <span className="foot">@SanaCryptoTracker.com</span>
      </h2>
      <div className="social-links">
        <a href="#">
          <FacebookIcon className="social-link" />
        </a>
        <a href="#">
          <EmailIcon className="social-link" />
        </a>
        <a href="#">
          <TwitterIcon className="social-link" />
        </a>
        <a href="#">
          <InstagramIcon className="social-link" />
        </a>
      </div>
    </div> 
  );
}

export default Footer;
