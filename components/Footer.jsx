import React from "react";
import {
  AiFillInstagram,
  AiOutlineTwitter,
  AiOutlineCopyrightCircle,
} from "react-icons/ai";

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer-container-copyright">
        <AiOutlineCopyrightCircle />
        <p className="copyright-text">2022 JFT All rights reserved</p>
      </div>
      <div className="icons">
        <AiFillInstagram />
        <AiOutlineTwitter />
      </div>
    </div>
  );
};

export default Footer;
