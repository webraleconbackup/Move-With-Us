import React, { useState } from "react";

const QuotationForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    from: "",
    to: "",
    movingTime: "Within a Week",
    service: "Home Shifting",
  });

  const [result, setResult] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setResult("Sending...");

    const data = new FormData(e.target);
    data.append("access_key", "6c355479-afcc-42a2-9021-1818083f324d"); // 🔑 Replace this with your Web3Forms Access Key

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: data,
    });

    const res = await response.json();

    if (res.success) {
      setResult("Form submitted successfully ✅");
      e.target.reset();
    } else {
      setResult("Something went wrong ❌");
    }
  };

  return (
    <section className="flex justify-center items-center py-12 px-4 bg-gray-50">
      <div className="w-full max-w-6xl bg-gray-100 rounded-xl shadow-md p-6 sm:p-10">
        <h2 className="text-center text-3xl font-semibold text-gray-900 mb-8">
          Request a Quotation
        </h2>

        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-4"
        >
          {/* Name */}
          <div className="flex flex-col">
            <label className="text-sm font-medium mb-1">
              Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="name"
              placeholder="Name"
              required
              onChange={handleChange}
              className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-red-500"
            />
          </div>

          {/* Phone */}
          <div className="flex flex-col">
            <label className="text-sm font-medium mb-1">
              Phone <span className="text-red-500">*</span>
            </label>
            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              required
              onChange={handleChange}
              className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-red-500"
            />
          </div>

          {/* Moving From */}
          <div className="flex flex-col">
            <label className="text-sm font-medium mb-1">
              Moving From <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="from"
              placeholder="From Location"
              required
              onChange={handleChange}
              className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-red-500"
            />
          </div>

          {/* Moving To */}
          <div className="flex flex-col">
            <label className="text-sm font-medium mb-1">
              Moving To <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="to"
              placeholder="To Location"
              required
              onChange={handleChange}
              className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-red-500"
            />
          </div>

          {/* Moving Time */}
          <div className="flex flex-col">
            <label className="text-sm font-medium mb-1">Moving Time</label>
            <select
              name="movingTime"
              onChange={handleChange}
              className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-red-500"
            >
              <option>Within a Week</option>
              <option>Within a Month</option>
              <option>Flexible</option>
            </select>
          </div>

          {/* Select Services */}
          <div className="flex flex-col">
            <label className="text-sm font-medium mb-1">Select Services</label>
            <select
              name="service"
              onChange={handleChange}
              className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-red-500"
            >
              <option>Home Shifting</option>
              <option>Employee Relocation</option>
              <option>Business Relcocation</option>
              <option>Art & ArtEffect Relocation</option>
              <option>International Relocation</option>
              <option>Vehicle Transport</option>
              <option>Warehouse Storage Service</option>
              <option>Cargo Service</option>
            </select>
          </div>

          {/* Submit Button */}
          <div className="col-span-1 sm:col-span-2 lg:col-span-6 flex justify-center mt-4">
            <button
              type="submit"
              className="bg-red-600 cursor-pointer hover:bg-red-700 text-white font-semibold px-8 py-2 rounded-md transition"
            >
              Submit
            </button>
          </div>
        </form>

        {/* Result Message */}
        {result && (
          <p className="text-center text-sm text-gray-700 mt-4">{result}</p>
        )}
      </div>
    </section>
  );
};

export default QuotationForm;
