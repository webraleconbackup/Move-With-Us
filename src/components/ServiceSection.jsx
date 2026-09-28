import React from "react";

const ServicesSection = ({ servicesData }) => {
  const intro =
    "We provide reliable and professional relocation services tailored for families, businesses, and individuals. Our expert team ensures safe packing, secure transportation, and smooth delivery every time.";

  return (
    <section className="bg-white mt-20 px-4">
      
      {/* Section Heading */}
      <div className="text-center mb-14">
        <h2 className="text-3xl lg:text-4xl font-extrabold text-gray-900 tracking-tight">
          Our Popular Moving Services
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto mt-3 leading-relaxed">
          {intro}
        </p>
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {servicesData.map((service, index) => (
          <div
            key={index}
            className="
              relative bg-white rounded-2xl overflow-hidden
              shadow-md hover:shadow-2xl transition-all duration-500
              hover:-translate-y-2 border border-gray-200
              group
            "
          >
            {/* Top Highlight Ribbon */}
            <div className="
              absolute top-0 left-0 w-full h-1 
              bg-gradient-to-r from-red-500 to-orange-500
              opacity-70 group-hover:opacity-100 transition
            "></div>

            {/* Image */}
            <div className="h-44 overflow-hidden">
              <img
                src={service.image}
                alt={service.title}
                className="
                  w-full h-full object-cover 
                  transition-transform duration-700 
                  group-hover:scale-110 group-hover:rotate-1
                "
              />
            </div>

            {/* Content */}
            <div className="p-5">
              <h3 className="
                text-lg font-bold text-gray-900 mb-2
                group-hover:text-red-600 transition
              ">
                {service.title}
              </h3>

              <p className="text-gray-600 text-sm leading-relaxed">
                {service.description}
              </p>

              {/* Button */}
              <a
                href={service.link}
                className="
                  mt-5 inline-block w-full text-center
                  bg-gradient-to-r from-red-500 to-red-600
                  text-white py-2 rounded-lg text-sm font-semibold
                  shadow-md
                  hover:from-red-600 hover:to-red-700
                  transition-all duration-300
                  hover:-translate-y-1 hover:shadow-lg
                "
              >
                Read More
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServicesSection;
