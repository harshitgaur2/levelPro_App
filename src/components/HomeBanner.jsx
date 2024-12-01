import React from "react";
import "./HomeBanner.css";
import side from './assets/side.png';

const HomeBanner = () => {
  return (
    <section className="home-banner">
      <div className="banner-content">
        <h1>
          Shape Your Future with <br />
          <span>Expert Guidance from</span> <span className="highlight">LevelPro</span>
        </h1>
        <p>
          Find the perfect course, college, or program with expert guidance and
          make your education process smoother than ever.
        </p>
        <div className="cta-buttons">
          <button className="cta-primary">Know More</button>
          <button className="cta-secondary">Enroll Now</button>
        </div>
      </div>
      <div className="banner-image">
        <img
          src={side}
          alt="Student Success"
          className="main-image"
        />
        </div>
    </section>
  );
};

export default HomeBanner;
