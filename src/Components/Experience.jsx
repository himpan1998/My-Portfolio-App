
import Slider from 'react-slick';
import { FaBriefcase } from 'react-icons/fa';
import './Experience.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const experiences = [
  {
    title: 'Software Engineer',
    company: 'SSIL',
    project: 'Retail CRM',
    date: '11/2023',
    location: 'Kolkata',
    icon: <FaBriefcase  style={{ fontSize: '24px', color: '#2c3e50' }} />,
    details: [
      'Developed client-side and server-side modules for a Retail CRM web application.',
      'Integrated Digio APIs for PAN and GST verification.',
      'Improved data validation for cost optimization.',
      'Built backend systems for 2,000+ users.',
    ],
  },
  {
    title: 'Backend Developer',
    company: 'SSIL',
    project: 'Buildistan',
    date: '01/2023 - 11/2023',
    location: 'Kolkata',
    icon: <FaBriefcase style={{ fontSize: '24px', color: '#2c3e50' }}  />,
    details: [
      'Implemented JWT-based authentication.',
      'Built APIs for inventory management.',
      'Optimized database queries for faster reporting.',
    ],
  },
  {
    title: 'Management Trainee',
    company: 'SSIL',
    project: 'Ghareka',
    date: '06/2023 - 01/2023',
    location: 'Kolkata',
    icon: <FaBriefcase style={{ fontSize: '24px', color: '#2c3e50' }}  />,
    details: [
      'Designed optimized database schemas.',
      'Developed scalable APIs for Ghareka platform.',
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
autoplay: true, // ✅ Enable autoplay
autoplaySpeed: 3000 // ✅ Set interval (in ms)
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
                <small><strong>Project:</strong> {exp.project}</small>
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
