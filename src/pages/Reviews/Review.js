import React from "react";
import { BsFillPersonFill } from "react-icons/bs";

const Review = ({ review }) => {
  const { name, img, message } = review;
  return (
    <div className="text-center border-2 w-1/2 m-auto mb-8">
      <div className="flex justify-center items-center">
        {img ? (
          <div className="mr-4">
            <img className="w-14 rounded-full" src={img} alt="" />
          </div>
        ) : (
          <BsFillPersonFill></BsFillPersonFill>
        )}
        <h1>{name}</h1>
      </div>
      <p>{message}</p>
    </div>
  );
};

export default Review;
