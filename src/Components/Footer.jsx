import React from "react";
import { FaGithub } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import "./Footer.css";

const Footer = () => {
  return (
    <footer>
      {/* <a href="#home" className="footer__logo">
        Himanshu Pandey.
      </a> */}

      <ul className="permalinks">
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#education">Education</a></li>
        <li><a href="#gallery">Gallery</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
        {/* <li><a href="#skills">Skills</a></li> */}
          {/* <li><a href="#publications">Publications</a></li> */}
        {/* <li><a href="#portfolio">Portfolio</a></li> */}
         {/* <li><a href="#certification">Certification</a></li> */}
      <div className="footer__socials">
        <a
          href="https://www.linkedin.com/in/himanshu-pandey1998"
          target="_blank" 
          rel="noopener noreferrer"
          className="github"
        >
          <FaGithub />
        </a>
        <a
          href="https://instagram.com/p.himanshu_333"
           target="_blank"
          rel="noopener noreferrer"
          className="instagram"
        >
           <AiFillInstagram />
         </a>
      </div>
      <div className="footer__copyright">
        <small>&copy; HP {new Date().getFullYear()}. All rights reserved.</small>
      </div>
    </footer>
  );
};

export default Footer;
