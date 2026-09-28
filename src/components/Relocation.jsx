import React from "react";
import { FaPlay } from "react-icons/fa";
import { Link } from "react-router-dom";

const RelocationList = ({relocationData}) => {
  return (
    <section className="py-12 bg-white text-center">
      <h2 className="text-2xl md:text-3xl font-bold mb-8">
        Seamless Relocation Across India
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-4 gap-x-10 text-left">
        {relocationData.map((item) => (
          <div
            key={item.id}
            className=" hover:text-blue-600 cursor-pointer"
          >
            <Link to={item.link} className="flex items-center space-x-2">
            <FaPlay className="text-blue-500" />
            <span>{item.title}</span>
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
};

export default RelocationList;
