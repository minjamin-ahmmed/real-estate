import React from "react";

const Mission = () => {
  return (
    <div className="py-20 px-4 w-11/12 lg:w-9/12 mx-auto text-zinc-600">
      <h2 className="text-4xl lg:text-6xl font-bold mb-12">
        Our Mission <span className="text-red-500">.</span>
      </h2>

      <div>
        <p className="text-lg leading-relaxed">
          At <span className="text-red-500 font-semibold">Nex Real Estate</span>
          , our mission is to redefine the way people experience real estate. We
          believe that finding the perfect property should be more than just a
          transaction—it should be a meaningful journey.
        </p>

        <p className="mt-6 text-lg leading-relaxed">
          We are committed to delivering innovative solutions, building
          sustainable communities, and creating long-term value for our clients.
          From luxurious residential spaces to future-ready commercial
          properties, every project we undertake is guided by integrity,
          passion, and precision.
        </p>

        <p className="mt-6 text-lg leading-relaxed">
          Our vision is to become a trusted leader in the industry, known for
          excellence, transparency, and customer satisfaction. We strive to turn
          every space we develop into a place our clients are proud to call home
          or invest in.
        </p>

        <div className="mt-10 border-t border-zinc-600 pt-6 text-sm text-zinc-500">
          Empowering your dreams—one property at a time.
        </div>
      </div>
    </div>
  );
};

export default Mission;
