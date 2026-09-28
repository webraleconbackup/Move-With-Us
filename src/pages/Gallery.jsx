import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const images = [
  "/gallery/img1.jpg",
  "/gallery/img2.jpg",
  "/gallery/img3.jpg",
  "/gallery/img4.jpg",
  "/gallery/img5.jpg",
  "/gallery/img6.jpg",
  "/gallery/img7.jpg",
  "/gallery/img8.jpg",
  "/gallery/img9.jpg",
  "/gallery/img10.jpg",
  "/gallery/img11.jpg",
  "/gallery/img12.jpg",
  // "/gallery/img13.jpg",
  // "/gallery/img14.jpg",
  // "/gallery/img15.jpg",
];

const ITEMS_PER_PAGE = 12;

// 🔥 Motion variants for bottom-to-top animation
const bottomToTop = {
  hidden: { opacity: 0, y: 80 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      delay: i * 0.1,
      ease: "easeOut",
    },
  }),
};

export default function Gallery() {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(images.length / ITEMS_PER_PAGE);

  const handlePrev = () => currentPage > 1 && setCurrentPage(currentPage - 1);
  const handleNext = () => currentPage < totalPages && setCurrentPage(currentPage + 1);

  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const currentImages = images.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  return (
    <section className="bg-gradient-to-b from-blue-50 to-blue-100 py-14 px-4 lg:px-30">
      <motion.h2
        className="text-3xl md:text-4xl font-bold text-center text-red-600 mb-2"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        Our Recent Moves
      </motion.h2>

      <motion.p
        className="text-center mb-10 text-gray-700"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
      >
        Trusted Relocations, Memorable Moments
      </motion.p>

      {/* Gallery Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {currentImages.map((img, idx) => (
          <motion.div
            key={idx}
            className="relative overflow-hidden rounded-2xl shadow-md bg-white group"
            variants={bottomToTop}
            initial="hidden"
            whileInView="visible"
            custom={idx}
            viewport={{ once: true, amount: 0.2 }}
            whileHover={{ scale: 1.03 }}
            transition={{ type: "spring", stiffness: 200, damping: 15 }}
          >
            <img
              src={img}
              alt={`move-${idx}`}
              className="w-full h-80 object-cover transform group-hover:scale-110 transition-transform duration-500 ease-in-out"
            />
            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition duration-500 flex items-end justify-center p-4">
              <p className="text-white text-sm md:text-base font-semibold">
                Move #{startIndex + idx + 1}
              </p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Pagination */}
      <div className="flex justify-center mt-10 space-x-6">
        <button
          onClick={handlePrev}
          disabled={currentPage === 1}
          className={`flex items-center gap-2 px-4 py-2 rounded-full transition-all ${
            currentPage === 1
              ? "bg-gray-300 text-gray-500 cursor-not-allowed"
              : "bg-red-500 hover:bg-red-600 text-white shadow"
          }`}
        >
          <FaArrowLeft /> Prev
        </button>

        <span className="text-sm lg:text-lg font-medium text-gray-700">
          Page {currentPage} / {totalPages}
        </span>

        <button
          onClick={handleNext}
          disabled={currentPage === totalPages}
          className={`flex items-center gap-2 px-4 py-2 rounded-full transition-all ${
            currentPage === totalPages
              ? "bg-gray-300 text-gray-500 cursor-not-allowed"
              : "bg-red-500 hover:bg-red-600 text-white shadow"
          }`}
        >
          Next <FaArrowRight />
        </button>
      </div>
    </section>
  );
}

