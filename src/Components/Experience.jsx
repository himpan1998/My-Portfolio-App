import Slider from 'react-slick';
import { FaBriefcase } from 'react-icons/fa';
import './Experience.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const experiences = [
  {
    title: 'Software Engineer',
    company: 'Shyam Steel',
    project: 'Retail CRM',
    date: 'Nov-2023 - July 2025',
    location: 'Kolkata',
    icon: <FaBriefcase style={{ fontSize: '24px', color: '#2c3e50' }} />,
    details: [
      'Developed client-side and server-side modules for a Retail CRM web application.',
      'Integrated Digio APIs for PAN and GST verification reducing fake business registrations by 12%, improving data accuracy & minimizing errors in the registration process.',
      'Improved data validation for accuracy & cost optimization.',
    ],
  },
  {
    title: 'Management Trainee',
    company: 'Shyam Steel',
    project: 'Buildistan',
    date: 'Jan-2023 - Nov-2023',
    location: 'Kolkata',
    icon: <FaBriefcase style={{ fontSize: '24px', color: '#2c3e50' }} />,
    details: [
      'Implemented JWT-based authentication for user and role management,improving system security and scalability & built API for inventory management.',
      'Optimized database queries to improve data retrieval time by 15%, enhancing real-time reporting capabilities.',
    ],
  },
  {
    title: 'Management Trainee',
    company: 'Shyam Steel',
    project: 'Ghareka',
    date: 'June-2022 - Jan-2023',
    location: 'Kolkata',
    icon: <FaBriefcase style={{ fontSize: '24px', color: '#2c3e50' }} />,
    details: [
      'Designed optimized database schemas to improve performance and ensure data integrity.',
      'Developed scalable APIs for Ghareka platform, enabling scalability and seamless client-side integration.',
    ],
  },
];

const Experience = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <section id="experience">
      <h2>Work Experience</h2>
      <div className="experience__carousel">
        <Slider {...settings}>
          {experiences.map((exp, index) => (
            <div key={index} className="experience__card">
              <div className="experience__details">
                <div className="experience__details-icon">{exp.icon}</div>
                <h4>{exp.title} at {exp.company}</h4>
                <small><strong>Project:</strong> {exp.project}</small><br/>
                <small><strong>Date:</strong> {exp.date} | <strong>Location:</strong> {exp.location}</small>
                <ul>
                  {exp.details.map((detail, i) => (
                    <li key={i}>{detail}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Experience;
