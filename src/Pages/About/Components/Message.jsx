import React from "react";
import ceoImg from "../../../assets/ceo.jpeg";

const Message = () => {
  return (
    <div className="py-20 px-4 w-11/12 lg:w-9/12 mx-auto text-zinc-600">
      <h2 className="text-4xl lg:text-6xl font-bold mb-14">
        CEO'S Message <span className="text-red-500">.</span>
      </h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left Text Block */}
        <div className="space-y-6 text-lg leading-relaxed">
          <blockquote className="border-l-4 border-red-500 pl-4 italic text-zinc-600">
            Welcome to our world of real estate—where dreams meet addresses.
          </blockquote>

          <p>
            At <strong className="text-red-500">Nex Real Estate</strong>, we
            don’t just build structures — we create homes, communities, and
            lasting relationships. Our mission has always been to go beyond
            transactions and deliver meaningful experiences, built on trust,
            transparency, and commitment.
          </p>

          <p>
            The real estate landscape is evolving, and so are we. With a focus
            on innovation, sustainability, and a customer-first approach, we
            lead with purpose and integrity. Whether you're searching for your
            first home, expanding your investment portfolio, or launching a
            commercial project — we’re here for you.
          </p>

          <p>
            Thank you for choosing us as your trusted partner. The future of
            real estate is bright, and we're honored to help you be a part of
            it.
          </p>

          <div className="mt-8">
            <p className="font-semibold text-lg">– Mohammad Shahriar Khan</p>
            <p className="text-sm text-zinc-500">
              Managing Director, Next Real Estate
            </p>
          </div>
        </div>

        {/* Right Image Block */}
        <div className="w-full flex justify-center">
          <img
            src={ceoImg}
            alt="CEO"
            className="rounded-xl w-3/4 mx-auto max-h-[500px] object-contain transition-transform duration-500 hover:scale-105"
          />
        </div>
      </div>
    </div>
  );
};

export default Message;
