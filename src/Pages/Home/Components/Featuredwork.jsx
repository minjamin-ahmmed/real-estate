import React from "react";
import img1 from "../../../assets/featured-1.jpg";
import img2 from "../../../assets/featured-2.jpg";
import img3 from "../../../assets/featured-3.jpg";
import img4 from "../../../assets/featured-4.jpg";
import img5 from "../../../assets/featured-5.jpg";
import img6 from "../../../assets/featured-6.jpg";
import img7 from "../../../assets/featured-7.jpg";
import img8 from "../../../assets/featured-8.jpg";
import img9 from "../../../assets/featured-9.jpeg";
import img10 from "../../../assets/featured-10.jpg";
import img11 from "../../../assets/featured-11.jpg";
import img12 from "../../../assets/featured-12.jpg";

const images = [
  img1,
  img2,
  img3,
  img4,
  img5,
  img6,
  img7,
  img8,
  img9,
  img10,
  img11,
  img12,
];

const Featuredwork = () => {
  return (
    <div className="pt-12 lg:pt-48 pb-24 w-11/12 lg:w-9/12 mx-auto">
      <div className="mb-16">
        <h2 className="text-4xl lg:text-6xl font-semibold text-zinc-600">
          Featured Work <span className="text-red-500">.</span>
        </h2>
        <p className="mt-4 text-lg lg:text-xl font-semibold text-zinc-600 ">
          A curated selection of recent projects that blend creativity,
          functionality, and modern design.
        </p>
      </div>

      <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-5 space-y-5">
        {images.map((img, index) => (
          <div
            key={index}
            className="overflow-hidden rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 break-inside-avoid"
          >
            <img
              src={img}
              alt={`Featured work ${index + 1}`}
              className="w-full object-cover hover:scale-105 transition-transform duration-300"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Featuredwork;
