import React from "react";
import "./Stats.css";

const statsData = [
  { id: 1, value: "10 Years", label: "Of Client Trust" },
  { id: 2, value: "1 Lakh+", label: "Success Stories" },
  { id: 3, value: "₹21 Lakhs", label: "In Scholarships" },
  { id: 4, value: "97%", label: "Visa Success Rate" },
];

const Stats = () => {
  return (
    <section className="stats">
      {statsData.map((stat) => (
        <div className="stat-item" key={stat.id}>
          <h3>{stat.value}</h3>
          <p>{stat.label}</p>
        </div>
      ))}
    </section>
  );
};

export default Stats;
