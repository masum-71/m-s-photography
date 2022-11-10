import React, { useContext } from "react";

const Myreview = ({ review, handleDelete }) => {
  const { serviceName, img, name, message, _id } = review;
  return (
    <div className=" text-center border-2 p-4">
      <h1 className="font-bold">{serviceName}</h1>
      <div className="w-full flex justify-center">
        <img className="w-14 rounded-full" src={img} alt="" />
      </div>
      <p>{name}</p>
      <p>Your review is: {message}</p>
      <div className="flex justify-between mt-5">
        <button onClick={() => handleDelete(_id)} className="btn bg-green-800">
          Edit Reviews
        </button>
        <button onClick={() => handleDelete(_id)} className="btn bg-red-600">
          Delete Reviews
        </button>
      </div>
    </div>
  );
};

export default Myreview;
