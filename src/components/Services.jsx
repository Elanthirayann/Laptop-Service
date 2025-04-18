import React from "react";
import "./Services.css"; 

const Services = () => {
  const services = [
    {
      icon: "fa-laptop",
      title: "Laptop Repair",
      desc: "Expert solutions for hardware & software issues.",
    },
    {
      icon: "fa-shield",
      title: "Virus Removal",
      desc: "We clean and protect your system from malware.",
    },
    {
      icon: "fa-database",
      title: "Data Recovery",
      desc: "Lost files? We help retrieve your valuable data.",
    },
    {
      icon: "fa-wrench",
      title: "Maintenance Plans",
      desc: "Keep your system running like new with routine care.",
    },
  ];

  return (
    <section id = "services" style={{ background: "#f9f9f9", padding: "60px 20px" }}>
      <h2
        style={{
          textAlign: "center",
          fontSize: "2.5rem",
          marginBottom: "40px",
          color: "#222",
        }}
      >
        Our Services
      </h2>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
          gap: "30px",
          maxWidth: "1200px",
          margin: "0 auto",
        }}
      >
        {services.map((service, idx) => (
          <div className="e-card playing" key={idx}>
            <div className="image"></div>
            <div className="wave"></div>
            <div className="wave"></div>
            <div className="wave"></div>
            <div className="infotop">
              <i
                className={`fa ${service.icon}`}
                style={{ fontSize: "35px", marginBottom: "10px" }}
              ></i>
              <br />
              {service.title}
              <br />
              <div className="name">{service.desc}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
