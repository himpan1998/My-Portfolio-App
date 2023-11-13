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
              <small>1.5 year</small>
            </article>
            <article className="about__card">
              <VscFolderLibrary className="about__icon" />
              <h5>Projects</h5>
              <small>4+ Completed Projects</small>
            </article>
          </div>
          <div  className="multiline">
          <p>
          Experienced Software Engineer with expertise in backend development seeking a position as a Backend Developer with a focus on Node.js.
          Skilled in various programming languages including JavaScript, TypeScript, and PHP along with database management using SQL.
          Proficient in web development, particularly RESTful APIs and MVC architecture. 
          Strong problem-solving skills with a background in algorithmic thinking.
          </p>
          </div>
          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};
export default Intro;
