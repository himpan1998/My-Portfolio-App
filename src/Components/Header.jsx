import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import "./Header.css";

import HimanshuPandeyResume from "../Assets/himanshu_updated_resume.pdf";

const Header = () => {
  return (
    <header id="home">
      <div className="container header-container">
        <h3>Hello, I'm</h3>
        <h1>Himanshu Pandey</h1>
        <h3 className="text-light">
          PhD Scholar in Operations and Supply Chain Management | IIT Delhi
          (DMS) <br></br> API & Backend Developer | Expert in Optimization and
          Decision Analytics
        </h3>

        <div className="cta">
          <a href={HimanshuPandeyResume} download className="btn">
            Download Resume
          </a>
          <a href="#contact" className="btn btn-primary">
            Contact Me
          </a>
        </div>

        <div className="header__socials">
          <a
            href="https://www.linkedin.com/in/himanshu-pandey1998"
            target="_blank"
            rel="noopener noreferrer"
            className="header__social linkedin"
            aria-label="Himanshu Pandey LinkedIn Profile"
          >
            <BsLinkedin />
          </a>
          <a
            href="https://github.com/himpan1998"
            target="_blank"
            rel="noopener noreferrer"
            className="header__social github"
            aria-label="Himanshu Pandey GitHub Profile"
          >
            <FaGithub />
          </a>
          <a
            href="https://instagram.com/p.himanshu_333?igshid=MWNuMXN2aHNxY2lhOQ=="
            target="_blank"
            rel="noopener noreferrer"
            className="header__social instagram"
            aria-label="Himanshu Pandey Instagram Profile"
          >
            <AiFillInstagram />
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
