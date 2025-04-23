import React from "react";
import bannerImg from "../../../assets/banner-image.jpg";
const Banner = () => {
  return (
    <div
      className="mt-12 bg-cover bg-center flex flex-col justify-center items-center text-white text-center py-24 transition-all duration-1000 ease-in-out relative"
      style={{ backgroundImage: `url(${bannerImg})` }}
    >
      <div className="absolute inset-0 bg-black/60 z-0"></div>

      <div className="relative z-10">
        <h2 className="text-white text-4xl lg:text-6xl font-semibold drop-shadow-md">
          Who We Are <span className="text-red-500">.</span>
        </h2>
      </div>
    </div>
  );
};

export default Banner;
