import React from "react";
import { FaUniversity, FaSchool, FaGraduationCap } from "react-icons/fa";
import { AiOutlineEye } from "react-icons/ai"; // Eye icon for "view"
import { FaTrophy,FaMedal } from 'react-icons/fa'; // Font Awesome trophy
import { GiGraduateCap } from "react-icons/gi";
import "./Education.css";
import gateResult from "../Assets/gate/gate_result.PDF";

const Education = () => {
  return (
    <section id="education">
      <h2>Education & Honors</h2>
      <div className="education__container">
        <div className="education__details">
          <FaSchool className="education__details-icon" />
          <div>
            <h4>
              <a
                href="https://dms.iitd.ac.in/"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  color: "#0073e6", // a nice blue
                  textDecoration: "underline",
                  fontWeight: "bold",
                }}
              >
                Indian Institute Of Technology <br /> IIT-Delhi (DMS)
              </a>
            </h4>

            <div className="degree-info">
              <small>
                Doctor Of Philosophy in Operations and Supply Chain Management
              </small>
              {/* <FaGraduationCap className="education__details-cgpa-icon" />
              <small></small> */}
            </div>
            <h5>july 2025-present</h5>
          </div>
        </div>
        <div className="education__details">
          <FaSchool className="education__details-icon" />
          <div>
            <h4>
              <a
                href="https://nitdgp.ac.in/department/mathematics"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  color: "#0073e6",
                  textDecoration: "underline",
                  fontWeight: "bold",
                }}
              >
                National Institute of Technology <br /> NIT-Durgapur
              </a>
            </h4>
            <div className="degree-info">
              <small>Master of Technology in Operations Research:</small>
              {/* <FaGraduationCap className="education__details-cgpa-icon" /> */}
              <small>8.24 CGPA</small>
            </div>
            <h5>2020-2022</h5>
            <a
              href={gateResult}
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "blue" }}
            >
              <AiOutlineEye />
              <br></br>
              Degree Certificate
            </a>
          </div>
        </div>
        <div className="education__details">
          <FaUniversity className="education__details-icon" />
          <div>
            {/* <h4>Dr. A.P.J. Abdul Kalam Technical University, Lucknow</h4> */}
            <h4>
              <a
                href="https://aktu.ac.in/"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  color: "#0073e6",
                  textDecoration: "underline",
                  fontWeight: "bold",
                }}
              >
                Dr. A.P.J. Abdul Kalam Technical University, Lucknow
              </a>
            </h4>
            <div className="degree-info">
              <small>Bachelor of Technology in Textile Engineering:</small>
              {/* <FaGraduationCap className="education__details-cgpa-icon" /> */}
              <small>7.94 CGPA</small>
            </div>
            <h5>2016–2020</h5>
            <a
              href={gateResult}
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "blue" }}
            >
              <AiOutlineEye />
              <br></br>
              Degree Certificate
            </a>
          </div>
        </div>
        <div className="education__details">
          <FaTrophy className="education__details-icon" />
          <div>
            <h4>Graduate Aptitude Test in Engineering</h4>
            <small>All India Rank - 100</small>
            <h5>GATE -2020</h5>
            <a
              href={gateResult}
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "blue" }}
            >
              <AiOutlineEye />
              <br></br>
              GATE Certificate
            </a>
          </div>
        </div>
        <div className="education__details">
          <FaMedal className="education__details-icon" />
          <div>
            <h4>Received Indian Oil Merit-cum Scholarship</h4>
            <small>IOCL Scholarship</small>
            <h5>2013–2014</h5>

            <a
              href={gateResult}
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "blue" }}
            >
              <AiOutlineEye />
              <br></br>
              Document
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
