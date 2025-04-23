import axios from "axios";
import React, { useEffect, useState } from "react";
import { FaMapMarkerAlt, FaRulerCombined, FaWater } from "react-icons/fa";
import { Link } from "react-router-dom";

const Projects = () => {
  const [sections, setSections] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get("/Data/projects.json");
        setSections(res.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="pt-12 lg:pt-48 pb-24 w-11/12 lg:w-9/12 mx-auto">
      <div className="mb-16">
        <h2 className="text-4xl lg:text-6xl font-semibold text-zinc-600">
          Explore Our Signature Developments{" "}
          <span className="text-red-500">.</span>
        </h2>
        <p className="mt-4 text-lg lg:text-xl font-semibold text-zinc-600">
          Explore our curated list of premium real estate projects currently
          open for sale.
        </p>
      </div>

      <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-5 space-y-5">
        {sections.length === 0 ? (
          <div className="text-center text-gray-500 col-span-full">
            No Projects works available.
          </div>
        ) : (
          sections.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden break-inside-avoid relative"
            >
              <Link to={`/projects/${project.id}`}>
                <div>
                  <img
                    src={project.img}
                    alt={project.holding_name}
                    className="w-full object-cover"
                  />
                </div>
              </Link>
              <span className="absolute top-4 left-4 bg-red-500 text-white px-3 py-1 text-sm rounded-full shadow">
                {project.position}
              </span>
              <div className="p-4 space-y-2">
                <Link to={`/projects/${project.id}`}>
                  <h3 className="text-xl font-semibold text-zinc-700 hover:text-zinc-900">
                    {project.holding_name}
                  </h3>
                </Link>
                <p className="text-sm text-zinc-500">{project.description}</p>
                <div className="mt-2 space-y-1 text-zinc-500 text-sm">
                  <p className="flex items-center gap-2">
                    <FaMapMarkerAlt className="text-red-500" />{" "}
                    {project.location}
                  </p>
                  <p className="flex items-center gap-2">
                    <FaWater className="text-blue-500" /> {project.position}
                  </p>
                  <p className="flex items-center gap-2">
                    <FaRulerCombined className="text-green-500" />{" "}
                    {project.sqft} sqft
                  </p>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Projects;
