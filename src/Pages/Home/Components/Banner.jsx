import React, { useEffect, useState } from "react";
import bannerImg from "../../../assets/banner-image.jpg";
import bannerImg2 from "../../../assets/banner-image2.jpg";
import bannerImg3 from "../../../assets/banner-image3.jpg";
import bannerImg4 from "../../../assets/banner-image4.jpg";

import icon1 from "../../../assets/land-owner-icon.png";
import icon2 from "../../../assets/key-icon.png";
import icon3 from "../../../assets/others.png";

const Banner = () => {
  const images = [bannerImg, bannerImg2, bannerImg3, bannerImg4];
  const [currentIndex, setCurrentIndex] = useState(0);

  const icons = [icon1, icon2, icon3];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className="relative bg-cover bg-center mt-24 flex flex-col justify-center items-center text-white text-center py-64 transition-all duration-1000 ease-in-out"
      style={{
        backgroundImage: `url(${images[currentIndex]})`,
      }}
    >
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/50 to-transparent z-0"></div>

      {/* Content */}
      <div className="relative z-10 p-10">
        <h1 className="text-4xl lg:text-6xl font-semibold">
          Turning House-Hunting into Home-Finding
        </h1>
        <p className="mt-4 max-w-md mx-auto">
          Explore curated listings, connect with trusted agents, and find the
          place that truly feels like yours.
        </p>
      </div>

      <div className="lg:absolute lg:-bottom-28">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {icons.length === 0 ? (
            <div className="text-center text-gray-500 col-span-full">
              No icon available.
            </div>
          ) : (
            icons.map((icon, idx) => (
              <div
                key={idx}
                className="bg-white border border-white/30 text-white rounded-lg shadow p-4 space-y-4"
              >
                <div className="flex items-center justify-center">
                  <img className="w-32 h-32 object-contain" src={icon} alt="" />
                </div>
                <p className="text-2xl font-semibold text-zinc-600 text-center">
                  From Dirt to Dream
                </p>
                <p className="text-center text-zinc-700">
                  Realize the True Worth of Your Land.
                </p>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default Banner;
