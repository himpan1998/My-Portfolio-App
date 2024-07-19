import React from "react";
import { FaUniversity, FaSchool, FaGraduationCap } from "react-icons/fa";
import { GiGraduateCap } from "react-icons/gi";
import "./Education.css";

const Education = () => {
  return (
    <section id="education">
      <h2>Education</h2>
      <div className="education__container">
        <div className="education__details">
          <FaSchool className="education__details-icon" />
          <div>
            <h4>National Institute of Technology ,<br></br>Durgapur</h4>
            <div className="degree-info">
              <small>Master of Technology in Operations Research</small>
              <FaGraduationCap className="education__details-cgpa-icon" />
              <small>8.24 CGPA</small>
            </div>
            <h5>2020-2022</h5>
          </div>
        </div>
        <div className="education__details">
          <FaUniversity className="education__details-icon" />
          <div>
            <h4>Dr. A.P.J. Abdul Kalam Technical University, Lucknow</h4>
            <div className="degree-info">
              <small>Bachelor of Technology in Textile</small>
              <FaGraduationCap className="education__details-cgpa-icon" />
              <small>7.94 CGPA</small>
            </div>
            <h5>2016–2020</h5>
          </div>
        </div>
        <div className="education__details">
          <GiGraduateCap className="education__details-icon" />
          <div>
            <h4>Graduate Aptitude Test in Engineering</h4>
            <small>All India Rank - 100</small>
            <h5>2020</h5>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
