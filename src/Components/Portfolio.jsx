import IMG1 from "../Assets/e-commerce.png";
import React from "react";
import "./Portfolio.css";

const portfolio = () => {
  const soloProjects = [
    // {
    //   id: 1,
    //   title: "E-Commerce Backend Project with Node.js",
    //   img: IMG1,
    //   description: "DashBoard For Managing Product",
    //   technologies: "Javascript | Nodejs | Express js | Mongodb | React Js",
    //   link: "https://github.com/himpan1998/Ecommerce_Dashboard",
    //   github: "https://github.com/himpan1998/Ecommerce_Dashboard",
    // },
    {
      id: 2,
      title: "BMI Calculator with React.js",
      img: IMG1,
      description: "BMI Calculator",
      technologies: "Javascript |  React Js | Hooks:useState | UseMemo",
      link: "https://bmicalculatorhimanshu.netlify.app/",
      github: "https://github.com/himpan1998/BMI-Calculator",
    },
    {
      id: 3,
      title: "Calculator with React.js",
      img: IMG1,
      description: "Calculator",
      technologies: "Javascript |  React Js | Hooks:useState",
      link: "https://calculatorhimanshu.netlify.app/",
      github: "https://github.com/himpan1998/Calculator",
    },
    {
      id: 4,
      title: "Expense-Tracker with React.js",
      img: IMG1,
      description: "Expense-Tracker",
      technologies: "Javascript |  React Js | Hooks:useState",
      link: "https://expensetracerhimanshu.netlify.app/",
      github: "https://github.com/himpan1998/Expense-Tracker.git",
    },
    
  ];

  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {soloProjects.map((pro) => (
          <article className="portfolio__item" key={pro.id}>
            {/* <div className="portfolio__item-image">
              <img src={pro.img} alt={pro.title} />
            </div> */}
            <div className="portfolio__item-content">
              <h3>{pro.title}</h3>
              <p>{pro.description}</p>
              <p>{pro.technologies}</p>
            </div>
            <div className="portfolio__item-cta">
              <a
                href={pro.github}
                target="_blank"
                className="btn"
                rel="noreferrer"
              >
                GitHub
              </a>
              <a
                href={pro.link}
                target="_blank"
                className="btn btn-primary"
                rel="noreferrer"
              >
                Live Demo
              </a>
            </div>
          </article>
        ))}
      </div>
      
    </section>
    
    
  );
};

export default portfolio;
