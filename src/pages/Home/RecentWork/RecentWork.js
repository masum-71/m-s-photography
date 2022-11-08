import React from "react";
import { PhotoProvider, PhotoView } from "react-photo-view";
import image1 from "../../../images/recent/image1.webp";
import image2 from "../../../images/recent/image2.jfif";
import image3 from "../../../images/recent/image3.jpg";
import image4 from "../../../images/recent/image4.jfif";
import image5 from "../../../images/recent/image5.jpg";
import image6 from "../../../images/recent/image6.jfif";

const RecentWork = () => {
  const images = [image1, image2, image3, image4, image5, image6];
  return (
    <div>
      <div className="text-center mb-6 text-5xl font-bold my-4">
        Some Recent Work
      </div>
      <div className="grid mt-4 gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {images.map((image, index) => (
          <PhotoProvider key={index}>
            <PhotoView src={image}>
              <img
                className="w-full h-60 border-8 shadow-sm cursor-zoom-in rounded-lg"
                src={image}
                alt=""
              ></img>
            </PhotoView>
          </PhotoProvider>
        ))}
      </div>
    </div>
  );
};

export default RecentWork;
