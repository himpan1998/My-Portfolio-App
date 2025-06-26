import { FaBriefcase } from 'react-icons/fa';
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
            <a href="#experience">
            <article className="about__card">
              <FaBriefcase className="about__icon" />
              <h5>Experience (3+ years)</h5>
              {/* <small>Over 
              3 years of experience</small> */}
            </article>
            </a>
            <a href="#portfolio">
            <article className="about__card">
              <VscFolderLibrary className="about__icon" />
              <h5>Projects</h5>
            </article>
            </a>
          </div>
          <div className="multiline">
  <p className="summary_section">
  Operations Research professional currently pursuing a PhD in Management
  Studies (Operations and Supply Chain Management) at the Department of
  Management Studies (DMS), Indian Institute of Technology Delhi (IIT Delhi).
  Holds an M.Tech in Operations Research from NIT Durgapur, with over 3 years
  of experience in web, database, and API development.
</p>

</div>

          <a href="#contact" className="btn btn-primary btn-right">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};
export default Intro;
