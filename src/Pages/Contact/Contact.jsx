import React from "react";
import nex_building from "../../assets/nex-building.jpg";
const Contact = () => {
  return (
    <div className="bg-gray-50">
      <div className="py-24 w-11/12 lg:w-9/12 mx-auto ">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 relative">
          <div className="lg:col-span-1"></div>
          <div className="lg:absolute top-1/3 left-1/4 transform -translate-x-1/2 -translate-y-1/2">
            <div className="bg-white p-8 rounded-lg border border-gray-100 text-gray-700 w-[350px] lg:w-[500px] shadow-md space-y-6">
              <h3 className="text-2xl font-bold text-red-500">Contact Us</h3>

              {/* Sales Enquiries */}
              <div>
                <h4 className="text-lg font-semibold">Sales Enquiries</h4>
                <p>
                  For Bangladesh:{" "}
                  <span className="font-medium text-gray-900">16702</span>
                </p>
                <p>
                  For Overseas:{" "}
                  <span className="font-medium text-gray-900">09666716702</span>
                </p>
              </div>

              {/* General Enquiries */}
              <div>
                <h4 className="text-lg font-semibold">General Enquiries</h4>
                <p>
                  <span className="font-medium text-gray-900">
                    +88 01776-000008
                  </span>
                </p>
                <p>
                  <a
                    href="mailto:email@southbreezebd.com"
                    className="text-blue-600 underline"
                  >
                    info@nex-realestate.com
                  </a>
                </p>
              </div>

              {/* Address */}
              <div>
                <h4 className="text-lg font-semibold">Corporate Head Office</h4>
                <p>50 lake Circus Kalabagan, Dhaka, Bangladesh </p>
              </div>

              {/* CTA */}
              <p className="italic text-sm text-gray-500">
                Pick up the phone today to get a brochure or schedule an
                appointment to talk to the directors.
              </p>
            </div>
          </div>

          <div className="lg:col-span-3">
            <img className="w-full object-cover" src={nex_building} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
