import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ProjectDetails = () => {
  const [data, setData] = useState([]);

  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get("/public/Data/projects.json");
        const allProjects = res.data;
        const foundProjects = allProjects.find(
          (item) => String(item.id) === id
        );
        setData(foundProjects);
      } catch {
        console.log("Error fetching data");
      }
    };
    fetchData();
  }, [id]);

  return (
    <div className="pt-32 pb-24 w-11/12 lg:w-9/12 mx-auto">
      {data ? (
        <>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <img
                src={data.img}
                alt={data.holding_name}
                className="w-full h-[700px] object-cover rounded-xl shadow-lg"
              />
              <p className="mt-4 text-center text-zinc-600 font-semibold text-xl">
                {data.holding_name}
              </p>
            </div>

            <div>
              <h1 className="text-4xl font-bold mt-6 text-zinc-700">
                {data.holding_name}
              </h1>
              <p className="text-lg text-zinc-500 mt-2">{data.location}</p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
                <div className="bg-zinc-100 p-6 rounded-xl">
                  <h3 className="font-semibold">Category</h3>
                  <p>{data.position}</p>
                </div>
                <div className="bg-zinc-100 p-6 rounded-xl">
                  <h3 className="font-semibold">Area</h3>
                  <p>{data.location}</p>
                </div>
                <div className="bg-zinc-100 p-6 rounded-xl">
                  <h3 className="font-semibold">Sqft</h3>
                  <p>{data.sqft} Sqft</p>
                </div>
              </div>

              <div className="mt-10">
                <h3 className="text-2xl font-semibold text-zinc-700 mb-4">
                  Description
                </h3>
                <p className="text-zinc-600 text-lg mb-2">{data.description}</p>
                <p className="text-zinc-600">{data.details_description}</p>
              </div>
            </div>
          </div>
        </>
      ) : (
        <p className="text-center text-zinc-500 text-lg">Loading...</p>
      )}
    </div>
  );
};

export default ProjectDetails;
