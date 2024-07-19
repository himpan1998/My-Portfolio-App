import React from "react";
import { BsFillPatchCheckFill } from "react-icons/bs";
import "./Certification.css";

const certifications = [
  {
    title: "Web Development Bootcamp",
    institution: "Udemy",
    date: "2023",
    link: "https://www.udemy.com/certificate/UC-8d1897e8-566c-4a71-9d5d-dfaf5bdbb5a7",
    // image: "https://www.udemy.com/certificate/UC-8d1897e8-566c-4a71-9d5d-dfaf5bdbb5a7/"
  },
  {
    title: "The Ultimate MySQL Bootcamp",
    institution: "Udemy",
    date: "2023",
    link: "https://www.udemy.com/certificate/UC-911d7dc3-352e-4ba1-8013-8b950ee40be4/",
    // image: "https://example.com/images/aws-certificate.png"
  },
  
];

const Certification = () => {
  return (
    <section id="certification">
      <h2>Certifications</h2>
      <div className="container certification__container">
        {certifications.map((cert, index) => (
          <div key={index} className="certification__content">
            <article className="certification__details">
              <BsFillPatchCheckFill className="certification__details-icon" />
              <div>
                <h4>{cert.title}</h4>
                <small>{cert.institution}, {cert.date}</small>
                <br />
                <a href={cert.link} target="_blank" rel="noopener noreferrer">
                  View Certificate
                </a>
                {/* <div className="certification__image">
                  <img src={cert.image} alt={`${cert.title} certificate`} />
                </div> */}
              </div>
            </article>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Certification;
