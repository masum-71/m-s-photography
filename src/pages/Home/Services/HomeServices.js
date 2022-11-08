import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ServiceItem from "./ServiceItem/ServiceItem";

const HomeServices = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/services-home")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  return (
    <div>
      <div className="text-center text-5xl font-bold my-4">Our Services</div>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4">
        {services.map((service) => (
          <ServiceItem key={service._id} service={service}></ServiceItem>
        ))}
      </div>
      <div className="text-center my-4">
        <Link to="/services">
          {" "}
          <button className="btn btn-primary">ALL SERVICES</button>
        </Link>
      </div>
    </div>
  );
};

export default HomeServices;
