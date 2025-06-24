import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import "./Gallery.css";

import iitImg1 from "../Assets/iitImg/iitd_iit_wall.jpeg";
import iitImg3 from "../Assets/iitImg/iit_dms.jpeg";
import iitImg4 from "../Assets/iitImg/iit_dms4.jpeg";
import iitImg5 from "../Assets/iitImg/itt_dms2.jpeg";
import iitImg6 from "../Assets/iitImg/itt_dms3.jpeg";
import nitImg from "../Assets/nitImg/nit_class.jpg";
import nitImg1 from "../Assets/nitImg/NIT_MAIN_GATE.jpeg";
import nitImg2 from "../Assets/nitImg/NIT_Entrance.jpeg";
import nitImg3 from "../Assets/nitImg/Department.jpeg";
import nitImg4 from "../Assets/nitImg/Department (2).jpeg";
import nitImg5 from "../Assets/nitImg/department (3).jpeg";
import nitImg6 from "../Assets/nitImg/image (4).jpeg";


const Gallery = () => {
  const settings = {
    dots: true,               // Show dots under carousel (optional)
    infinite: true,           // Loop forever
    speed: 500,               // Transition speed
    slidesToShow: 3,          // Number of slides visible at once
    slidesToScroll: 1,        // Scroll one slide at a time
    autoplay: true,           // Auto-slide
    autoplaySpeed: 2000,      // 2 seconds per slide
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  };

  return (
    <section id="gallery">
      <h2>Gallery</h2>
     <Slider {...settings} className="gallery__carousel">
  <div className="gallery__card">
    <img src={iitImg1} alt="IIT Delhi Wall" />
    <p>IIT Delhi</p>
  </div>
   <div className="gallery__card">
    <img src={iitImg5} alt="IIT DMS 2" />
    <p>IIT DMS</p>
  </div>
  <div className="gallery__card">
    <img src={iitImg3} alt="IIT DMS" />
    <p>IIT DMS</p>
  </div>
  <div className="gallery__card">
    <img src={iitImg4} alt="IIT DMS 4" />
    <p>IIT DMS</p>
  </div>
  <div className="gallery__card">
    <img src={iitImg6} alt="IIT DMS 3" />
    <p>IIT DMS</p>
  </div>
  <div className="gallery__card">
    <img src={nitImg2} alt="NIT Durgapur" />
    <p>NIT Durgapur</p>
  </div>
  <div className="gallery__card">
    <img src={nitImg1} alt="NIT Durgapur" />
    <p>NIT Durgapur Entrance Gate</p>
  </div>
   <div className="gallery__card">
    <img src={nitImg} alt="NIT Durgapur" />
    <p>NIT Durgapur Class Room</p>
  </div>
  <div className="gallery__card">
    <img src={nitImg4} alt="NIT Durgapur" />
    <p>NIT Durgapur -Department of Mathematics</p>
  </div>
  <div className="gallery__card">
    <img src={nitImg6} alt="NIT Durgapur" />
    <p>NIT Durgapur</p>
  </div>
   <div className="gallery__card">
    <img src={nitImg3} alt="NIT Durgapur" />
    <p>NIT Durgapur</p>
  </div>
  <div className="gallery__card">
    <img src={nitImg5} alt="NIT Durgapur" />
    <p>NIT Durgapur</p>
  </div>
</Slider> 
    </section>
  );
};

export default Gallery;

