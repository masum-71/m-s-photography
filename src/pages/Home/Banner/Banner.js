import React from "react";
import image1 from "../../../images/image1.jpg";
import image2 from "../../../images/image2.jfif";
import "./Banner.css";

const Banner = () => {
  return (
    <div className="carousel w-full my-5 banner-height">
      <div id="slide1" className="carousel-item relative w-full ">
        <div className="banner-description banner-height">
          <img
            src={image1}
            className="w-full banner-height rounded-2xl"
            alt=""
          />
        </div>
        <div className="absolute flex justify-start transform -translate-y-1/2 left-20 top-1/3">
          <h1 className="text-4xl font-bold text-white text-center">
            A picture is worth <br />
            A thousand <br />
            Word
          </h1>
        </div>
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide2" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide2" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide2" className="carousel-item relative w-full ">
        <div className="banner-description banner-height">
          <img
            src={image2}
            className="w-full banner-height rounded-2xl"
            alt=""
          />
        </div>
        <div className="absolute flex justify-start transform -translate-y-1/2 left-20 top-1/3">
          <h1 className="text-4xl font-bold text-white text-start">
            A picture is worth <br />
            A thousand <br />
            Word
          </h1>
        </div>
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide1" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide1" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
    </div>
  );
};

export default Banner;
