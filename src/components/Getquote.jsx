import React, { useState } from "react";

export default function QuoteForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    from: "",
    to: "",
    phone: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        access_key: "6c355479-afcc-42a2-9021-1818083f324d",
        ...formData,
      }),
    });

    const result = await response.json();

    if (result.success) {
      setStatus("✅ Message sent successfully!");
      setFormData({
        name: "",
        email: "",
        from: "",
        to: "",
        phone: "",
        message: "",
      });
    } else {
      setStatus("❌ Failed to send. Please try again.");
    }
  };

  return (
    <div className="flex justify-center px-2 lg:px-12 mt-8 z-50">
      <div className="bg-white text-gray-800 rounded-2xl shadow-lg p-8 w-full max-w-md">
        <h2 className="text-2xl font-bold text-center mb-2">Get Free QUOTE</h2>
        <p className="text-center text-sm text-gray-700 mb-4 font-semibold">
          Enjoy 20% Saving on 1st Booking
        </p>
        <hr className="mb-6" />

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-2 gap-3">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              className="border rounded-md p-2 w-full"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              className="border rounded-md p-2 w-full"
              required
            />
          </div>

          <div className="grid grid-cols-2 gap-3">
            <input
              type="text"
              name="from"
              placeholder="From"
              value={formData.from}
              onChange={handleChange}
              className="border rounded-md p-2 w-full"
              required
            />
            <input
              type="text"
              name="to"
              placeholder="To"
              value={formData.to}
              onChange={handleChange}
              className="border rounded-md p-2 w-full"
              required
            />
          </div>

          <input
            type="tel"
            name="phone"
            placeholder="Your Phone"
            value={formData.phone}
            onChange={handleChange}
            className="border rounded-md p-2 w-full"
            required
          />

          <textarea
            name="message"
            placeholder="Your Message"
            rows="3"
            value={formData.message}
            onChange={handleChange}
            className="border rounded-md p-2 w-full"
          ></textarea>

          <button
            type="submit"
            className="w-full bg-red-600 text-white font-semibold py-4 rounded-md hover:bg-red-700 transition"
          >
            Submit
          </button>
        </form>

        {status && <p className="text-center mt-3">{status}</p>}
      </div>
    </div>
  );
}
