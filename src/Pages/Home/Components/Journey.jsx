import React, { useEffect, useState } from "react";
import axios from "axios";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const Journey = () => {
  const [sections, setSections] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get("/public/Data/journeyData.json");
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
        className="absolute z-10 -left-8 top-1/2 transform -translate-y-1/2 bg-red-500 text-white p-3 rounded-full shadow-lg hover:bg-red-600 transition"
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
        className="absolute -right-8 top-1/2 transform -translate-y-1/2 bg-red-500 text-white p-3 rounded-full shadow-lg hover:bg-red-600 transition"
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
    centerPadding: "48px",
    slidesToShow: 3,
    speed: 500,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
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
    <div className="py-24 w-11/12 lg:w-9/12 mx-auto relative">
      <div className="mb-16">
        <h2 className="text-4xl lg:text-6xl font-semibold text-zinc-600">
          Our Growth Story <span className="text-red-500">.</span>
        </h2>
        <p className="mt-4 text-lg lg:text-xl font-semibold text-zinc-600">
          From day one, our mission has been clear: to deliver exceptional
          quality, every time.
        </p>
      </div>

      {/* React Slick Slider */}
      <Slider {...settings}>
        {sections.map((item) => (
          <div key={item.id} className="px-4">
            <div
              className="bg-white shadow border border-gray-100 rounded-lg
            "
            >
              <img
                src={item.image}
                alt={item.heading}
                className="w-full h-64 object-cover rounded-t-md  mb-4"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold text-zinc-800">
                  {item.heading}
                </h3>
                <p className="text-zinc-600 italic">{item.subheading}</p>
                <p className="mt-2 text-sm text-zinc-500">{item.details}</p>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Journey;
