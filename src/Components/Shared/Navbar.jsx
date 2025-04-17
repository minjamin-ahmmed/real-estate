import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  FaBars,
  FaFacebook,
  FaInstagram,
  FaTimes,
  FaTwitter,
} from "react-icons/fa";
import logo from "../../assets/nex-real-estate-logo.png";

const navItems = [
  { name: "Home", path: "/" },

  { name: "About", path: "/about" },
  {
    name: "Projects",
    path: "/projects",
    dropdown: [
      { name: "Commercial", path: "/projects/commercial" },
      { name: "Residential", path: "/projects/residential" },
      { name: "Retail", path: "/projects/retail" },
    ],
  },
  { name: "Contact", path: "/contact" },
  { name: "Career", path: "/career" },
  { name: "Connect", path: "/connect" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(null);
  const location = useLocation();

  const toggleDrawer = () => setIsOpen(!isOpen);
  const handleMouseEnter = (name) => setDropdownOpen(name);
  const handleMouseLeave = () => setDropdownOpen(null);

  const renderDropdown = (items) => (
    <div className="absolute left-0 mt-2 w-48 bg-white text-black rounded-md shadow-lg z-10">
      {items.map((subItem) => (
        <Link
          key={subItem.name}
          to={subItem.path}
          className="block px-4 py-2 text-sm hover:bg-gray-100"
        >
          {subItem.name}
        </Link>
      ))}
    </div>
  );

  return (
    <nav
      className={`${
        location.pathname === "/contact" ? "bg-gray-50" : "bg-white"
      } py-4 text-zinc-600 fixed top-0 left-0 w-full z-50`}
    >
      <div className="w-9/12 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-12 items-center">
          {/* Logo + Title */}
          <div>
            <Link to="/">
              <img src={logo} alt="Logo" className="w-16 h-16 object-contain" />
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-4">
            {navItems.map((item) => (
              <div
                key={item.name}
                className="relative"
                onMouseEnter={() => handleMouseEnter(item.name)}
                onMouseLeave={handleMouseLeave}
              >
                <Link
                  to={item.path}
                  className={`px-3 py-2 text-lg font-semibold transition ${
                    location.pathname === item.path
                      ? "border-b-2 border-red-500 text-red-500"
                      : "text-zinc-600"
                  }`}
                >
                  {item.name}
                </Link>
                {item.dropdown &&
                  dropdownOpen === item.name &&
                  renderDropdown(item.dropdown)}
              </div>
            ))}
          </div>

          {/* Social Media Icons */}
          <div className="hidden md:flex items-center space-x-4 ">
            <a
              href="https://www.facebook.com/NexRealEstateLtd/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-red-500 transition"
            >
              <FaFacebook size={24} />
            </a>
            <a
              href="https://www.facebook.com/NexRealEstateLtd/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-red-500 transition"
            >
              <FaTwitter size={24} />
            </a>
            <a
              href="https://www.facebook.com/NexRealEstateLtd/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-red-500 transition"
            >
              <FaInstagram size={24} />
            </a>
          </div>

          {/* Mobile Menu Icon */}
          <div className="md:hidden">
            <button onClick={toggleDrawer} aria-label="Toggle Menu">
              {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      <div
        className={`md:hidden fixed inset-0 bg-white text-zinc-600 z-40 w-3/4 transform transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex justify-end p-4">
          <button onClick={toggleDrawer} aria-label="Close Menu">
            <FaTimes size={24} />
          </button>
        </div>
        <div className="flex flex-col items-center space-y-4 mt-10">
          {navItems.map((item) => (
            <div key={item.name} className="w-full text-center">
              <Link
                to={item.path}
                onClick={toggleDrawer}
                className="block px-3 py-2 text-lg font-medium hover:bg-gray-600 hover:text-zinc-900"
              >
                {item.name}
              </Link>
              {item.dropdown && (
                <div className="mt-2 space-y-2">
                  {item.dropdown.map((subItem) => (
                    <Link
                      key={subItem.name}
                      to={subItem.path}
                      onClick={toggleDrawer}
                      className="block px-6 py-1 text-sm hover:bg-secondary hover:text-primary"
                    >
                      {subItem.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
