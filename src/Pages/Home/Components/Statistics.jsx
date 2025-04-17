import React from "react";
import buildingImg from "../../../assets/building-bg-remove.png";

const Statistics = () => {
  return (
    <div className="py-24 w-11/12 lg:w-9/12 mx-auto">
      <div className="mb-24">
        <h2 className="text-4xl lg:text-6xl font-semibold text-zinc-600 max-w-4xl">
          Transforming Your Land into a Lasting Landmark
          <span className="text-red-500">.</span>
        </h2>
        <p className="mt-4 text-lg lg:text-xl font-semibold text-zinc-600 ">
          Unlock the full potential of your property with expert planning,
          design, and development.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        <div className="lg:col-span-1">
          <div className="space-y-16">
            <div>
              <h2 className="text-4xl lg:text-8xl font-bold text-zinc-600">
                10M<span className="text-red-500">+</span>
              </h2>
              <p className="mt-2 text-zinc-600 text-sm uppercase tracking-wide">
                Square Feet Delivered
              </p>
            </div>

            <div className="lg:text-end lg:max-w-sm">
              <h2 className="text-4xl lg:text-8xl font-bold text-zinc-600">
                20
              </h2>
              <p className="mt-2 text-zinc-600 text-sm uppercase tracking-wide">
                Years of Excellence
              </p>
            </div>

            <div>
              <h2 className="text-4xl lg:text-8xl font-bold text-zinc-600">
                52
              </h2>
              <p className="mt-2 text-zinc-600 text-sm uppercase tracking-wide">
                Projects Completed
              </p>
            </div>
          </div>
        </div>

        <div className="lg:col-span-1">
          <div>
            <img
              className="w-full h-[600px] object-cover"
              src={buildingImg}
              alt=""
            />
          </div>
        </div>

        <div className="lg:col-span-1">
          <div className="space-y-16">
            <div>
              <h2 className="text-4xl lg:text-8xl font-bold text-zinc-600">
                100<span className="text-red-500">+</span>
              </h2>
              <p className="mt-2 text-zinc-600 text-sm uppercase tracking-wide">
                Number of Projects
              </p>
            </div>

            <div className="lg:text-end lg:max-w-md">
              <h2 className="text-4xl lg:text-8xl font-bold text-zinc-600">
                1400<span className="text-red-500">+</span>
              </h2>
              <p className="mt-2 text-zinc-600 text-sm uppercase tracking-wide">
                Happy Clients
              </p>
            </div>

            <div>
              <h2 className="text-4xl lg:text-8xl font-bold text-zinc-600">
                18M<span className="text-red-500">+</span>
              </h2>
              <p className="mt-2 text-zinc-600 text-sm uppercase tracking-wide">
                Total area in pipeline(Million Sft)
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Statistics;
