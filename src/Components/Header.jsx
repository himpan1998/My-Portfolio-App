import {React } from "react";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import {AiFillInstagram} from "react-icons/ai"
import "./Header.css";

import HimanshuPandeyResume from "../Assets/Himanshu-Pandey-Software-Engineer.pdf"

const Header = () => {
  return (
    <header id="home">
      <div className="container header-container">
        <h3>Hello I'm</h3>
        <h1>Himanshu Pandey</h1>
        <h2 className="text-light">Software Engineer</h2>
        <div className="cta">
          <a href={HimanshuPandeyResume} download className="btn">
            Download CV
          </a>
          <a href="#contact" className="btn btn-primary">
            Let's talk
          </a>
        </div>
        <a href="#contact" className="scroll__down">
          Scroll Down
        </a>

        <div className="header__socials">
          <a
            href="https://www.linkedin.com/in/himanshu-pandey1998"
            target="_blank"
            rel=" noreferrer"
          >
            <BsLinkedin />
          </a>
          <a
            href="https://github.com/himpan1998"
            target="_blank"
            rel=" noreferrer"
          >
            <FaGithub />
          </a>
          <a
            href="https://instagram.com/p.himanshu_333?igshid=MWNuMXN2aHNxY2lhOQ=="
            target="_blank"
            rel=" noreferrer"
          >
            <AiFillInstagram />
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
