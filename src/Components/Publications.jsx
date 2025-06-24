import React from "react";
import "./Publications.css";
import bestPaper from "../Assets/Publications & Paper Presentation/best_paper.pdf";
import aboutPrograme from "../Assets/Publications & Paper Presentation/about_programe.pdf";

const Publications = () => {
  return (
    <section id="publications">
      <h2>Publications & Paper Presentations</h2>
      <div className="publications__container">

        {/* Program card */}
        <div className="publication__details">
          <div>
            <h4>
              National Conference on Science Technology and Management, ORSI Durgapur Chapter, 2022
            </h4>
            <a
              href={aboutPrograme}
              target="_blank"
              rel="noopener noreferrer"
              className="publication__link"
            >
              View Program Details
            </a>
          </div>
        </div>

        {/* Paper card */}
        <div className="publication__details">
          <div>
            <h4>
              Bi-Objective Two-Stage Four Dimensional Transportation Problem to Determine Total Transportation Cost and Time
            </h4>
            <small>
              Presented at National Conference on Science Technology and Management, ORSI Durgapur Chapter, 2022
            </small>
            <br />
            <a
              href={bestPaper}
              target="_blank"
              rel="noopener noreferrer"
              className="publication__link"
            >
              View Certificate
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Publications;
