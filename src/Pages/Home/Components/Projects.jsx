import axios from "axios";
import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import {
  FaArrowLeft,
  FaArrowRight,
  FaMapMarkerAlt,
  FaRulerCombined,
  FaWater,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const Projects = () => {
  const [sections, setSections] = useState([]);

  useEffect(() => {
    axios
      .get("/Data/projects.json")
      .then((res) => {
        setSections(res.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
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
    centerPadding: "24px",
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
          Available Projects for Sale <span className="text-red-500">.</span>
        </h2>
        <p className="mt-4 text-lg lg:text-xl font-medium text-zinc-500">
          Explore our curated list of premium real estate projects with modern
          architecture and scenic views.
        </p>
      </div>

      <Slider {...settings}>
        {sections.map((project, index) => (
          <Link to={`/projects/${project.id}`} key={index}>
            <div className="px-4">
              <div className="bg-white rounded-2xl overflow-hidden border border-gray-100 hover:scale-105 transition-transform duration-300 ease-in-out">
                <div className="relative">
                  <img
                    src={project.img}
                    alt={project.holding_name}
                    className="w-full h-64 object-cover"
                  />
                  <span className="absolute top-4 left-4 bg-gradient-to-r from-red-500 to-red-400 text-white px-3 py-1 text-sm rounded-full shadow">
                    {project.position}
                  </span>
                </div>

                <div className="p-6">
                  <h3 className="text-2xl font-bold text-zinc-700 mb-4">
                    {project.holding_name}
                  </h3>

                  <p className="text-zinc-600 mb-4">{project.description}</p>

                  <p className="flex items-center gap-2 text-zinc-500 mt-2 text-sm">
                    <FaMapMarkerAlt className="text-red-500" />
                    <span>{project.location}</span>
                  </p>

                  <p className="flex items-center gap-2 text-zinc-500 mt-2 text-sm">
                    <FaWater className="text-blue-500" />
                    <span>{project.position}</span>
                  </p>

                  <p className="flex items-center gap-2 text-zinc-500 mt-2 text-sm">
                    <FaRulerCombined className="text-green-500" />
                    <span>{project.sqft} sqft</span>
                  </p>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </Slider>
    </div>
  );
};

export default Projects;
