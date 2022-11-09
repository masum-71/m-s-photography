import React from "react";
import { useLoaderData } from "react-router-dom";
import useTitle from "../../Hooks/UseTitle";
import SingleService from "./SingleService";

const Services = () => {
  const services = useLoaderData();
  useTitle("Services");

  return (
    <div className="grid my-10 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4">
      {services.map((singleService) => (
        <SingleService
          key={singleService._id}
          singleService={singleService}
        ></SingleService>
      ))}
    </div>
  );
};

export default Services;
