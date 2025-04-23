import React, { useEffect, useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import axios from "axios";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const Explore = () => {
  const [sections, setSections] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get("/Data/videoData.json");
        setSections(res.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const PrevArrow = (props) => {
    const { onClick } = props;
    return (
      <button
        className="hidden lg:block absolute z-10 -left-8 top-1/2 transform -translate-y-1/2 bg-red-500 text-white p-3 rounded-full shadow-lg hover:bg-red-600 transition"
        onClick={onClick}
      >
        <FaArrowLeft size={20} />
      </button>
    );
  };

  const NextArrow = (props) => {
    const { onClick } = props;
    return (
      <button
        className="hidden lg:block absolute -right-8 top-1/2 transform -translate-y-1/2 bg-red-500 text-white p-3 rounded-full shadow-lg hover:bg-red-600 transition"
        onClick={onClick}
      >
        <FaArrowRight size={20} />
      </button>
    );
  };

  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "100px",
    slidesToShow: 1,
    speed: 500,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
        },
      },
    ],
  };

  return (
    <div className="py-24 w-11/12 lg:w-9/12 mx-auto">
      <div className="mb-16">
        <h2 className="text-4xl lg:text-6xl font-semibold text-zinc-600">
          Explore <span className="text-red-500">.</span>
        </h2>
        <p className="mt-4 text-lg lg:text-xl font-semibold text-zinc-600">
          Start your journey today and explore the finest properties at your
          fingertips.
        </p>
      </div>

      <Slider {...settings}>
        {sections.length === 0 ? (
          <div className="text-center text-gray-500 col-span-full">
            No Explore Card to show.
          </div>
        ) : (
          sections.map((item, index) => (
            <div key={index} className="px-4">
              <div className="bg-white shadow border border-gray-100 rounded-lg h-[500px] flex items-center justify-center overflow-hidden">
                <video
                  className="rounded-lg object-cover w-full h-full"
                  autoPlay
                  loop
                  muted
                  playsInline
                >
                  <source src={item.src} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>
          ))
        )}
      </Slider>
    </div>
  );
};

export default Explore;
