import React from "react";
import "./footer.css";
import { ImLinkedin2 } from "react-icons/im";
import { GrInstagram } from "react-icons/gr";
import { BsTwitter } from "react-icons/bs";

const Footer = () => {
  return (
    <footer>
      <a href="#" className="footer__logo">
        SATYAM SINGH
      </a>

      <ul className="permalinks">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#experience">Experience</a>
        </li>
        <li>
          <a href="#services">Services</a>
        </li>
        <li>
          <a href="#portfolio">Portfolio</a>
        </li>
        <li>
          <a href="#testimonials">Testimonials</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>

      <div className="footer__socials">
        <a href="https://www.linkedin.com/in/satyajeet-singh-618a7120b/">
          <ImLinkedin2 />
        </a>
        <a href="https://www.instagram.com/satyajeet___singh055/">
          <GrInstagram />
        </a>
        <a href="https://twitter.com">
          <BsTwitter />
        </a>
      </div>

      <div className="footer__copyright">
        <small>&copy; SATYAM SINGH. All rights reserved.</small>
      </div>
    </footer>
  );
};

export default Footer;
