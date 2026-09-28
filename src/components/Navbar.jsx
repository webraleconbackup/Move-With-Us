import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { FaWhatsapp, FaFacebookF, FaInstagramSquare, FaTwitterSquare } from "react-icons/fa";
import { IoLogoLinkedin } from "react-icons/io";
import { MdOutlineArrowRightAlt } from "react-icons/md";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const phoneNumber = "919137238757";
  const message = "I am interested in your service";

  return (
    <>
      {/* Top bar */}
      <div className="fixed top-0 z-50 w-full">
        <div className="bg-red-500 text-white flex justify-between items-center px-3 lg:px-16 py-2">
          <Link
            to={`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`}
          >
            <span className="flex items-center space-x-2 text-green-600 text-sm md:text-lg">
              <FaWhatsapp size={20} />
              <span className="text-white">+91 9137238757</span>
            </span>
          </Link>

          <Link to="tel:+919137238757">
            <span className="text-sm md:text-lg">📞 +91 9137238757</span>
          </Link>
        </div>

        {/* Main Navbar */}
        <div className="flex justify-between items-center px-4 space-x-2 md:px-10 bg-white py-2 shadow-md">
          <div>
            <img
              src="/logo/navlogo.png"
              alt="nav-logo"
              className="lg:h-[108px] h-[75px] w-[95px] lg:w-[188px] lg:ml-20"
            />
          </div>
          <div className="flex items-center space-x-2 lg:space-x-16">
            <ul className="hidden lg:flex space-x-10 text-xs lg:text-lg font-semibold">
              {/* <Link to="/payonline">
                <li className="text-red-600 hover:text-white hover:bg-red-500 cursor-pointer border px-[5px] py-[8px] lg:p-2 font-semibold rounded transition-all duration-700">
                  Pay Online
                </li>
              </Link> */}
              <Link to="/getquotes">
                <li className="text-red-600 hover:text-white hover:bg-red-500 cursor-pointer border px-[5px] py-[8px] lg:p-2 font-semibold rounded transition-all duration-700">
                  Get Quote
                </li>
              </Link>
            </ul>

            {/* Always visible hamburger */}
            <button
              onClick={() => setIsOpen(true)}
              className="text-2xl text-red-600 cursor-pointer"
            >
              <Menu />
            </button>
          </div>
        </div>
      </div>

      {/* Popup Overlay */}
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-start md:items-center z-50 overflow-y-auto">
          <div className="bg-zinc-200 md:rounded-2xl shadow-lg w-full md:w-[90%] lg:w-[80%] py-10 relative overflow-y-auto max-h-screen">
            {/* Close Button */}
            <button
              className="absolute top-3 right-3 text-red-600 text-xl cursor-pointer"
              onClick={() => setIsOpen(false)}
            >
              <X />
            </button>

            {/* Menu Content */}
            <div
              className="flex flex-col md:grid md:grid-cols-2 lg:grid-cols-4 gap-10 px-6"
              onClick={() => setIsOpen(false)}
            >
              {/* Profile */}
              <div>
                <strong className="text-lg text-black underline underline-offset-8">
                  Profile
                </strong>
                <ul className="space-y-4 text-md font-semibold mt-4">
                  <li><Link to="/">Home</Link></li>
                  <li><Link to="/contactus">Contact Us</Link></li>
                </ul>
              </div>

              {/* Company */}
              <div>
                <strong className="text-lg text-black underline underline-offset-8">
                  Company
                </strong>
                <ul className="space-y-4 text-md font-semibold mt-4">
                  <li><Link to="/about">About Us</Link></li>
                  <li><Link to="/whychooseus">Why Choose Us</Link></li>
                  <li><Link to="/ourmission">Our Mission</Link></li>
                  <li><Link to="/faq">FAQ</Link></li>
                  <li><Link to="/awardsandachivements">Awards & Achievements</Link></li>
                </ul>
              </div>

              {/* Services */}
              <div>
                <strong className="text-lg text-black underline underline-offset-8">
                  Services
                </strong>
                <ul className="space-y-4 text-md font-semibold mt-4">
                  <li><Link to="/employeerelocation">Employee Relocation</Link></li>
                  <li><Link to="/homerelocation">Home Relocation</Link></li>
                  <li><Link to="/businessrelocation">Business Relocation</Link></li>
                  <li><Link to="/artandarteffect">Art & ArtEffects</Link></li>
                  <li><Link to="/internationalrelocation">International Relocation</Link></li>
                  <li><Link to="/vehicletransportation">Vehicle Transportation</Link></li>
                  <li><Link to="/warehouseandstorage">Warehouse & Storage</Link></li>
                  <li><Link to="/cargoservice">Cargo Service</Link></li>
                </ul>
              </div>

              {/* Activities */}
              <div>
                <strong className="text-lg text-black underline underline-offset-8">
                  Activities
                </strong>
                <ul className="space-y-4 text-md font-semibold mt-4">
                  {/* <li><Link to="/payonline">Pay Online</Link></li> */}
                  <li><Link to="/gallery">Gallery</Link></li>
                </ul>
              </div>
            </div>

            {/* Bottom Section */}
            <div className="flex flex-col items-center mt-10 pb-6">
              <Link to="/getquotes">
                <button
                  onClick={() => setIsOpen(false)}
                  className="flex items-center justify-center gap-1 bg-red-600 text-white px-8 py-3 cursor-pointer rounded-full text-lg font-semibold hover:bg-red-700 transition-all duration-700"
                >
                  Get Quote
                  <MdOutlineArrowRightAlt className="mt-1" />
                </button>
              </Link>

              <div className="flex flex-col md:flex-row gap-4 items-center mt-6">
                <span className="text-lg font-bold">Follow us:</span>
                <div className="flex gap-4 text-2xl">
                  <Link><FaFacebookF className="text-blue-600" /></Link>
                  <Link><FaInstagramSquare className="text-red-600" /></Link>
                  <Link><FaTwitterSquare className="text-blue-600" /></Link>
                  <Link><IoLogoLinkedin className="text-blue-600" /></Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
