import React from "react";
import {mumbailocalservice} from "../../data";


export default function LocalMovingSection() {
  return (
    <section className="w-full bg-white py-16 px-4 md:px-12 lg:px-30">
      {mumbailocalservice.map((item) => (
        <div key={item.id}>
          {/* Top Title */}
          <div className="text-center max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-semibold text-red-600 leading-tight">
              {item.topTitle}
            </h2>

            <p className="text-gray-600 text-base md:text-lg mt-3">
              {item.subTitle.split("—")[0]} —
              <span className="font-medium">
                {item.subTitle.split("—")[1]}
              </span>
            </p>
          </div>

          {/* Middle Title */}
          <div className="text-center mt-12">
            <h3 className="text-2xl md:text-3xl font-semibold text-red-600">
              {item.midTitle}
            </h3>
          </div>

          {/* Paragraphs */}
          <div className="max-w-4xl mx-auto mt-10 space-y-6 text-gray-700 text-base md:text-lg leading-relaxed">
            {item.paragraphs.map((text, i) => (
              <p key={i}>{text}</p>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
}
