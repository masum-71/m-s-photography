import React from "react";
import { AiFillStar } from "react-icons/ai";
import { PhotoProvider, PhotoView } from "react-photo-view";

const ServiceItem = ({ service }) => {
  const { img, name, price, description, ratings } = service;
  return (
    <div className="card bg-base-100 shadow-xl">
      <figure>
        <PhotoProvider>
          <PhotoView src={img}>
            <img className="h-52 w-full cursor-zoom-in" src={img} alt={name} />
          </PhotoView>
        </PhotoProvider>
      </figure>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>card-actions
        <p>{`${description.slice(0, 100) + "..."}`}</p>
        <div className=" p-2 rounded-lg flex bg-slate-100 justify-between items-center">
          <div>
            <p className="font-bold">Price: ${price}</p>
          </div>
          <div className="flex items-center">
            <p className="mr-2">{ratings}</p>{" "}
            <AiFillStar className="text-yellow-500"></AiFillStar>{" "}
          </div>
          <div>
            <button className="btn btn-primary">View Detail</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceItem;
