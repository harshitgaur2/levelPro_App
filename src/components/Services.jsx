import React from "react";
import "./Services.css";

const services = [
  {
    id: 1,
    title: "Education Counseling",
    description:
      "Receive expert guidance to choose the best courses and colleges that align with your career aspirations.",
  },
  {
    id: 2,
    title: "Admission Assistance",
    description:
      "Get step-by-step help in applying to top universities with complete documentation support.",
  },
  {
    id: 3,
    title: "Scholarship Guidance",
    description:
      "Learn about scholarships you are eligible for and get help with application procedures.",
  },
  {
    id: 4,
    title: "Career Counseling",
    description:
      "Discover career paths based on your strengths and interests with professional advice.",
  },
];

const Services = () => {
  return (
    <section className="services">
      <h2>What Services We Provide</h2>
      <div className="services-container">
        {services.map((service) => (
          <div className="service-item" key={service.id}>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
