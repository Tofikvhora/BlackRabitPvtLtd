// src/components/Services.js
import React from "react";
import "./Services.css";
import transportationImage from "../8079.jpg";
import vehicleImage from "../6228103.jpg";
import brokerageImage from "../72619-OEB7O4-90.jpg";


const servicesData = [
  {
    title: "Transportation Service Provider",
    image: transportationImage,
    description: "We provide reliable transportation solutions for businesses and individuals.",
  },
  {
    title: "Vehicle Owner",
    image: vehicleImage,
    description: "Own and manage a fleet of vehicles with us to serve your logistics needs.",
  },
  {
    title: "Brokerage Network",
    image: brokerageImage,
    description: "Connecting you with a wide network of transportation brokers for seamless service.",
  },
];

const Services = () => {
  return (
    <div id="services" className="services">
      <h2>Our Services</h2>
      <div className="services-grid">
        {servicesData.map((service, index) => (
          <div className="service-card" key={index}>
            <img src={service.image} alt={service.title} />
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
