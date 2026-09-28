import React from 'react';
import {
  FaPhoneAlt,
  FaEnvelope,
} from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-300 text-gray-900">

      {/* Top Section */}
      <div className="max-w-8xl mx-auto px-6 lg:px-40 py-16 grid grid-cols-1 md:grid-cols-3 gap-12">

        {/* Logo + Description */}
        <div>
          <h3 className="font-bold text-2xl">Move With Us Packers & Movers</h3>
          <img src="/logo/navlogo.png" alt="Logo" className="w-28 mb-4" />
          <p className="text-lg font-semibold leading-relaxed">
            We provide reliable packing and moving services at affordable prices.
            Our experienced team ensures safe handling and on-time delivery for every move.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="font-bold text-2xl mb-3">Quick Links</h3>
          <ul className="space-y-2 text-lg font-semibold">
            <li className="hover:text-red-500 hover:underline underline-offset-4">
              <Link to="/about">About</Link>
            </li>
            <li className="hover:text-red-500 hover:underline underline-offset-4">
              <Link to="/gallery">Gallery</Link>
            </li>
            <li className="hover:text-red-500 hover:underline underline-offset-4">
              <Link to="/contactus">Contact Us</Link>
            </li>
            <li className="hover:text-red-500 hover:underline underline-offset-4">
              <Link to="/achivement">Achievement</Link>
            </li>
          </ul>
        </div>

        {/* Popular Services */}
        <div>
          <h3 className="font-bold text-2xl mb-3">Popular Services</h3>
          <ul className="space-y-2 text-lg font-semibold">
            <li className="hover:text-red-500 hover:underline underline-offset-4">
              <Link to="/homerelocation">Home Relocation</Link>
            </li>
            <li className="hover:text-red-500 hover:underline underline-offset-4">
              <Link to="/businessrelocation">Business Relocation</Link>
            </li>
            <li className="hover:text-red-500 hover:underline underline-offset-4">
              <Link to="/vehicletransportation">Vehicle Transportation</Link>
            </li>
            <li className="hover:text-red-500 hover:underline underline-offset-4">
              <Link to="/internationalrelocation">International Relocation</Link>
            </li>
            <li className="hover:text-red-500 hover:underline underline-offset-4">
              <Link to="/warehouseandstorage">Warehouse Storage</Link>
            </li>
          </ul>
        </div>
      </div>

      <hr className="border-gray-400" />

      {/* Bottom Section */}
      <div className="max-w-8xl mx-auto px-6 lg:px-40 py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16">

        {/* Customer Support */}
        <div>
          <h3 className="font-bold text-2xl mb-2">Customer Support</h3>
          <p className="flex items-center gap-2 text-lg font-semibold">
            <FaPhoneAlt /> +91 9137238757
          </p>
          <p className="flex items-center gap-2 text-lg font-semibold mt-1">
            <FaEnvelope /> movewithusofficial@gmail.com
          </p>
        </div>

        {/* Regional Office */}
        <div>
          <h3 className="font-bold text-2xl mb-2">Regional Office</h3>
          <p className="text-lg font-semibold leading-relaxed">
            Jai Malhar Shop No. 5, Gothivali,<br />
            Rabale Airoli Navi,<br />
            Sector 30, Mumbai 400701
          </p>
        </div>

        {/* Empty / Design Space (no social icons anymore) */}
        <div>
          <h3 className="font-bold text-2xl mb-2">Our Commitment</h3>
          <p className="text-lg font-semibold leading-relaxed text-gray-700">
            Safe delivery, trusted service, and customer satisfaction—every step of the move.
          </p>
        </div>
      </div>

      <hr className="border-gray-400" />

      {/* Copyright */}
      <div className="px-6 lg:text-center py-4 text-sm font-semibold text-gray-800">
        © 2025 Move With Us. All Rights Reserved.
        <span className="ml-2">Designed by Webralecon India Pvt. Ltd.</span>
      </div>
    </footer>
  );
};

export default Footer;
