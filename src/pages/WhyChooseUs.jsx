import React from "react";
import { FaRupeeSign, FaHeadphones, FaGlobe } from "react-icons/fa";
import { MdDoorFront, MdAccessTimeFilled, MdSecurity } from "react-icons/md";
import BottomBanner from "../components/BottomBanner";

const features = [
  {
    icon: <FaRupeeSign size={28} />,
    title: "Flexible & Affordable",
    desc: "We provide budget-friendly and customizable moving solutions tailored to meet your specific relocation needs across Mumbai.",
  },
  {
    icon: <MdDoorFront size={28} />,
    title: "Door-To-Door Service",
    desc: "Experience complete convenience with our door-to-door relocation service, covering everything from packing to final placement.",
  },
  {
    icon: <MdAccessTimeFilled size={28} />,
    title: "On-Time Delivery",
    desc: "We value your time. Our team ensures timely pickup and delivery so your move stays perfectly on schedule.",
  },
  {
    icon: <MdSecurity size={28} />,
    title: "Safe & Secure Move",
    desc: "Your belongings are handled with the highest level of care using quality packing materials and secure transportation methods.",
  },
  {
    icon: <FaHeadphones size={28} />,
    title: "24/7 Support",
    desc: "Our support team is available 24/7 to assist you at every stage of your move, ensuring a smooth and stress-free experience.",
  },
  {
    icon: <FaGlobe size={28} />,
    title: "Worldwide Delivery",
    desc: "Need to move internationally? Trust our global relocation network for fast, efficient, and hassle-free overseas deliveries.",
  },
];


export default function WhyChooseUs() {
  return (
    <>
    <section className="py-16 px-6 lg:px-20 bg-white text-gray-800">
      <div className="text-center mb-10">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
          Why Choose Us
        </h2>
        <p className="text-gray-600 mt-3 max-w-2xl mx-auto">
          Discover what makes us stand out as the preferred choice for reliable
          and professional packers and movers in Mumbai.
        </p>
        <div className="w-20 h-[3px] bg-orange-500 mx-auto mt-4 rounded"></div>
      </div>

      {/* Features Grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {features.map((item, index) => (
          <div key={index} className="flex items-start gap-4">
            <div className="bg-red-600 text-white p-4 rounded-md flex-shrink-0">
              {item.icon}
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900">
                {item.title}
              </h3>
              <p className="text-gray-600 mt-1">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
    <section>
       <BottomBanner />
    </section>
      </>
  );
}

