import React from "react";
import { BsFillPatchCheckFill } from "react-icons/bs";
import "./Skills.css";

const Skills = () => {
  return (
    <section id="skills">
      <h2> Technical Skills</h2>
      <div className="container skill__container">
        <div className="skill__frontend">
          {/* <h3>Web-Development</h3> */}
          <div className="skill__content">
            <article className="skill__details">
              <BsFillPatchCheckFill className="skill__details-icon" />
              <h4>Math. Modelling</h4>
            </article>
            <article className="skill__details">
              <BsFillPatchCheckFill className="skill__details-icon" />
              <h4>Opt. Techniques</h4>
            </article>
             <article className="skill__details">
              <BsFillPatchCheckFill className="skill__details-icon" />
              <h4>Gurobi,Pulp</h4>
            </article>
            <article className="skill__details">
              <BsFillPatchCheckFill className="skill__details-icon" />
              <h4>Python</h4>
            </article>
            <article className="skill__details">
              <BsFillPatchCheckFill className="skill__details-icon" />
              <h4>JavaScript</h4>
            </article>
            <article className="skill__details">
              <BsFillPatchCheckFill className="skill__details-icon" />
              <h4>Node.js</h4>
            </article>
            <article className="skill__details">
              <BsFillPatchCheckFill className="skill__details-icon" />
              <h4>Express.js</h4>
            </article>
            <article className="skill__details">
              <BsFillPatchCheckFill className="skill__details-icon" />
              <h4>Nest.js</h4>
            </article>
            <article className="skill__details">
              <BsFillPatchCheckFill className="skill__details-icon" />
              <h4>MySQL</h4>
            </article>
            <article className="skill__details">
              <BsFillPatchCheckFill className="skill__details-icon" />
              <h4>MongoDB</h4>
            </article>
            <article className="skill__details">
              <BsFillPatchCheckFill className="skill__details-icon" />
              <h4>Sequelize-ORM</h4>
            </article>
            <article className="skill__details">
              <BsFillPatchCheckFill className="skill__details-icon" />
              <h4>REST API</h4>
            </article>
            <article className="skill__details">
              <BsFillPatchCheckFill className="skill__details-icon" />
              <h4>Webhook</h4>
            </article>
             <article className="skill__details">
              <BsFillPatchCheckFill className="skill__details-icon" />
              <h4>React.js</h4>
            </article>
            <article className="skill__details">
              <BsFillPatchCheckFill className="skill__details-icon" />
              <h4>Git /GitLab(CI-CD)</h4>
            </article>
            <article className="skill__details">
              <BsFillPatchCheckFill className="skill__details-icon" />
              <h4>AWS EC2</h4>
            </article>
            <article className="skill__details">
              <BsFillPatchCheckFill className="skill__details-icon" />
              <h4>AWS S3 Bucket</h4>
            </article>
            <article className="skill__details">
              <BsFillPatchCheckFill className="skill__details-icon" />
              <h4>Docker</h4>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
