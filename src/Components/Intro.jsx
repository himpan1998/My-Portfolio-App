import { FaAward } from "react-icons/fa";
import React from "react";
import { VscFolderLibrary } from "react-icons/vsc";
import img from "../Assets/himanshu.jpeg";
import "./Intro.css";

const Intro = () => {
  return (
    <section id="about">
      <h5>Get to know</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={img} alt="Himanshu Pandey" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experience</h5>
              <small>Over 3 years of experience</small>
            </article>
            <article className="about__card">
              <VscFolderLibrary className="about__icon" />
              {/* <h5>Projects</h5> */}
               <a href="">Projects</a>
              {/* <small>Projects</small> */}
            </article>
          </div>
          <div className="multiline">
            <p style={{textAlign:"justify",lineHeight:'1.5',maxWidth:'600px',margin:'0.5 auto'}}>
              Operations Research professional currently pursuing PhD in Management Stuidies (Operations and Supply Chain Manangement) at
              IIT Delhi, Department of Manangement Studies (DMS), With an M.Tech in
              Operations Research from NIT Durgapur and over 3 years of
              experience in Web,Database and API development, optimizing
              solutions, and driving operational efficiency through
              collaboration.
            </p>
          </div>
          <a href="#portfolio" className="btn btn-primary btn-right">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};
export default Intro;
