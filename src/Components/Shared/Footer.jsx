import React from "react";
import logo from "../../assets/nex-real-estate-logo.png";
import qr_code from "../../assets/qr-code.png";
import {
  FaEnvelope,
  FaFacebookF,
  FaLinkedinIn,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaTwitter,
} from "react-icons/fa";
const Footer = () => {
  return (
    <footer>
      <div className="bg-zinc-900 text-gray-100 py-12">
        <div className="w-11/12 lg:w-9/12 mx-auto pt-12 footer sm:footer-horizontal">
          <aside>
            <img
              className="w-24 h-24 object-contain"
              src={logo}
              alt="nex real estate"
            />
            <p>
              Nex Real Estate
              <br />
              Your Gateway to Dream Properties
            </p>
          </aside>

          <nav className="text-white space-y-4">
            <h6 className="footer-title text-lg font-semibold">Contact Us</h6>
            <p className="text-sm">
              Got questions? Let's connect — we're always down to help.
            </p>

            <div className=" space-y-2">
              <p className="flex items-center gap-2">
                <FaMapMarkerAlt className="text-base" />
                50 lake Circus Kalabagan, Dhaka, Bangladesh
              </p>
              <p className="flex items-center gap-2">
                <FaPhoneAlt className="text-base" />
                <a href="tel:+1234567890" className="hover:underline">
                  01776-000008
                </a>
              </p>
              <p className="flex items-center gap-2">
                <FaEnvelope className="text-base" />
                <a
                  href="mailto:support@jobhive.com"
                  className="hover:underline"
                >
                  info@nex-realestate.com
                </a>
              </p>
            </div>

            <div className="flex items-center gap-4 mt-3">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-secondary transition"
              >
                <FaFacebookF size={24} />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-secondary transition"
              >
                <FaLinkedinIn size={24} />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-secondary transition"
              >
                <FaTwitter size={24} />
              </a>
            </div>
          </nav>

          <nav>
            <h6 className="footer-title">Company</h6>
            <a className="link link-hover">About us</a>
            <a className="link link-hover">Contact</a>

            <a className="link link-hover">Press kit</a>
          </nav>
          <nav>
            <h6 className="footer-title">Legal</h6>
            <a className="link link-hover">Terms of use</a>
            <a className="link link-hover">Privacy policy</a>
            <a className="link link-hover">Cookie policy</a>
          </nav>

          <nav>
            <div className="flex items-center justify-center mb-6">
              <img src={qr_code} alt="" />
            </div>
          </nav>
        </div>
      </div>

      <div className="bg-red-500 text-white py-4">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-semibold">
                &copy; 2025 Nex Real Estate. All rights reserved.
              </p>
            </div>

            <div>
              <p className="text-sm font-semibold">
                Developed and maintained by{" "}
                <a
                  href="https://nexkraft.com/"
                  className="text-zinc-600 underline font-semibold"
                >
                  NexKraft Technologies
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
