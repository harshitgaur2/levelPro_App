import React from "react";
import Slider from "react-slick";
import "./Colleges.css"; // Keep the existing styles and add custom arrow styles here
import right_arrow from "./assets/right_arrow.svg"; //
import left_arrow from "./assets/left_arrow.svg";
import ucla from "./assets/ucla.png";
import unsw_sydney from "./assets/unsw_sydney.png";
import edin from "./assets/edin.png";
import jhu from "./assets/jhu.png";
import manch from "./assets/manch.png";
import mbu from "./assets/mbu.png";


// Custom arrow components
const CustomPrevArrow = (props) => {
  const { className, onClick } = props;
  return (
    <div className={`${className} custom-arrow prev-arrow`} onClick={onClick}> 
    <img src = {left_arrow} alt = "left_arrow"></img>
    </div>
  );
};

const CustomNextArrow = (props) => {
  const { className, onClick } = props;
  return (
    <div className={`${className} custom-arrow next-arrow`} onClick={onClick}> 
    <img src = {right_arrow} alt = "right_arrow"></img>
    </div>
  );
};

const Colleges = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <CustomNextArrow />,
    prevArrow: <CustomPrevArrow />,
    responsive: [
      {
        breakpoint: 1024, // Tablet
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 600, // Mobile
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const colleges = [
    { id: 1, logo: edin, name: "The University of Edinburgh" },
    { id: 2, logo: jhu, name: "Johns Hopkins University" },
    { id: 3, logo: mbu, name: "The University of Melbourne" },
    { id: 4, logo: manch, name: "The University of Manchester" },
    { id: 5, logo: ucla, name: "UCLA" },
    { id: 6, logo: unsw_sydney, name: "UNSW Sydney" },
  ];

  return (
    <div className="carousel-container">
      <h2>Top Colleges</h2>
      <Slider {...settings}>
        {colleges.map((college) => (
          <div key={college.id} className="college-card">
            <img src={college.logo} alt={college.name} className="college-logo" />
            <p className="college-name">{college.name}</p>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Colleges;
