import React from "react";
import { BsLinkedin, } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";

import {AiFillInstagram} from "react-icons/ai"


// import { Link } from 'react-router-dom';
import "./Footer.css";

const Footer = () => {
  return (
    <footer>
      <a href="#home" className="footer__logo">
        Himanshu Pandey.
      </a>
      <ul className="permalinks">
        <li>
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#experience">Skills</a>
        </li>
        <li>
          <a href="#portfolio">Portfolio</a>
        </li>
        {/* <li><a href="#testimonials">Testimonials</a></li> */}
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
      <div className="footer__socials">
        <a
          href="https://www.linkedin.com/in/himanshu-pandey1998"
          target="_blank"
          rel="noopener noreferrer"
        >
          <BsLinkedin />
        </a>
        <a
          href="https://github.com/himpan1998"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub />
        </a>
        <a
          href="https://instagram.com/p.himanshu_333?igshid=MWNuMXN2aHNxY2lhOQ=="
          target="_blank"
          rel="noopener noreferrer"
        >
          <AiFillInstagram />

        </a>
       


      </div>
      <div className="footer__copyright">
        <small>&copy; AJ 2023. All rights reserved.</small>
      </div>
    </footer>
  );
};

export default Footer;
