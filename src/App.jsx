import React, { useState } from "react";

export default function CancerAwarenessPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thank you for your message! We will get back to you soon.");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      {/* HERO / LANDING SECTION */}
      <header className="relative bg-gradient-to-r from-blue-200 via-gray-200 to-green-100 text-black py-24 px-6 text-center shadow-lg overflow-hidden">
        {/* BACKGROUND IMAGE */}
        <img
          src="https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?auto=format&fit=crop&w=1350&q=80"
          alt="Cancer awareness ribbon"
          className="absolute inset-0 w-full h-full object-cover opacity-30"
        />

        <div className="relative z-10 max-w-4xl mx-auto animate-fade-in">
          <h1 className="text-5xl md:text-6xl font-extrabold mb-4 drop-shadow-lg">
            Cancer Awareness & Support
          </h1>
          <p className="text-lg md:text-xl font-light mb-8 max-w-2xl mx-auto drop-shadow-xl">
            Hope is stronger than fear. Together, we raise awareness, support survivors,
            and stand with every fighter. Join the mission to spread strength and knowledge.
          </p>

          <a
            href="#contact"
            className="inline-block bg-white text-red-600 font-semibold py-3 px-10 rounded-full shadow-lg hover:bg-gray-100 transition duration-300"
          >
            Join the Movement
          </a>
        </div>
      </header>

      {/* ABOUT SECTION */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-blue-800 mb-6">Our Mission</h2>
          <p className="text-lg text-pink-600 leading-relaxed mb-12">
            We work to spread awareness, support families, encourage early detection, and
            promote research to fight cancer effectively. Knowledge saves lives—awareness empowers healing.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="p-8 bg-yellow-100 rounded-xl shadow hover:shadow-lg transition">
              <img
                src="https://cdn-icons-png.flaticon.com/512/4149/4149679.png"
                alt="Education"
                className="w-20 mx-auto mb-4"
              />
              <h3 className="text-xl font-bold text-gray-800 mb-2">Education</h3>
              <p className="text-gray-600">
                Spreading vital information on prevention, screenings, and early detection.
              </p>
            </div>
            <div className="p-8 bg-yellow-100 rounded-xl shadow hover:shadow-lg transition">
              <img
                src="https://cdn-icons-png.flaticon.com/512/1048/1048949.png"
                alt="Support"
                className="w-20 mx-auto mb-4"
              />
              <h3 className="text-xl font-bold text-gray-800 mb-2">Support</h3>
              <p className="text-gray-600">
                Helping patients and families with emotional, mental, and financial assistance.
              </p>
            </div>
            <div className="p-8 bg-yellow-100 rounded-xl shadow hover:shadow-lg transition">
              <img
                src="https://cdn-icons-png.flaticon.com/512/3208/3208750.png"
                alt="Advocacy"
                className="w-20 mx-auto mb-4"
              />
              <h3 className="text-xl font-bold text-gray-800 mb-2">Advocacy</h3>
              <p className="text-gray-600">
                Working to influence policies that improve access to treatment and research.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* STATISTICS SECTION */}
      <section className="py-20 px-6 bg-gradient-to-br from-rose-50 to-pink-100">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Cancer Statistics</h2>
          <p className="text-gray-700 mb-12">
            Understanding the impact helps us take informed action.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="p-6 bg-white rounded-xl shadow-lg">
              <h3 className="text-5xl font-bold text-rose-600 mb-2">10M+</h3>
              <p className="text-gray-700 font-medium">Cancer deaths yearly worldwide</p>
            </div>
            <div className="p-6 bg-white rounded-xl shadow-lg">
              <h3 className="text-5xl font-bold text-green-600 mb-2">50%</h3>
              <p className="text-gray-700 font-medium">Avoidable with early detection</p>
            </div>
            <div className="p-6 bg-white rounded-xl shadow-lg">
              <h3 className="text-5xl font-bold text-purple-600 mb-2">1 in 2</h3>
              <p className="text-gray-700 font-medium">Will face cancer in their lifetime</p>
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS SECTION */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-6">Stories of Hope</h2>
          <p className="text-lg text-gray-600 mb-12">
            Hear from survivors and families who have been touched by our support.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div className="p-8 bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl shadow-lg">
              <p className="text-gray-700 italic mb-4">
                "This organization gave me the strength to fight. Their awareness campaigns saved my life through early detection."
              </p>
              <p className="font-semibold text-gray-800">- Sarah, Lung cancer Survivor</p>
            </div>
            <div className="p-8 bg-gradient-to-br from-green-50 to-green-100 rounded-xl shadow-lg">
              <p className="text-gray-700 italic mb-4">
                "The support group helped my family cope. We're forever grateful for the community here."
              </p>
              <p className="font-semibold text-gray-800">- Michael, Caregiver</p>
            </div>
          </div>
        </div>
      </section>

      {/* HOW YOU CAN HELP */}
      <section className="py-20 px-6 bg-gray-100">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-8">How You Can Help</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 text-left">
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Spread Awareness</h3>
              <ul className="list-disc ml-5 text-gray-700 space-y-2">
                <li>Share facts on social media</li>
                <li>Encourage regular cancer screenings</li>
                <li>Participate in community events</li>
              </ul>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Support the Cause</h3>
              <ul className="list-disc ml-5 text-gray-700 space-y-2">
                <li>Donate to cancer research</li>
                <li>Volunteer in support groups</li>
                <li>Provide emotional care to patients</li>
              </ul>
            </div>
          </div>

          <div className="mt-10 flex flex-col md:flex-row justify-center gap-4">
            <a
              href="#contact"
              className="inline-block bg-rose-600 text-white font-semibold py-3 px-10 rounded-full hover:bg-rose-700 transition duration-300 shadow-lg"
            >
              Contact Us
            </a>
            <a
              href="#"
              className="inline-block bg-green-600 text-white font-semibold py-3 px-10 rounded-full hover:bg-green-700 transition duration-300 shadow-lg"
            >
              Donate Now
            </a>
          </div>
        </div>
      </section>

      {/* CONTACT FORM */}
      <section id="contact" className="py-20 px-6 bg-gray-200">
        <div className="max-w-2xl mx-auto bg-white p-10 rounded-xl shadow-xl">
          <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
            Get in Touch
          </h2>

          <form onSubmit={handleSubmit} className="space-y-6">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-rose-500"
            />

            <input
              type="email"
              name="email"
              placeholder="your.email@example.com"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-rose-500"
            />

            <textarea
              name="message"
              rows="5"
              placeholder="Your message..."
              value={formData.message}
              onChange={handleChange}
              required
              className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-rose-500"
            />

            <button
              type="submit"
              className="w-full bg-rose-600 text-white py-3 rounded-lg font-semibold hover:bg-rose-700 transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-gray-900 text-gray-300 py-10 px-6 text-center">
        <p className="mb-4">&copy; 2025 Cancer Awareness & Support — All Rights Reserved</p>
        <div className="flex justify-center space-x-6">
          <a href="#" className="hover:text-white">Facebook</a>
          <a href="#" className="hover:text-white">Instagram</a>
          <a href="#" className="hover:text-white">Twitter</a>
        </div>
      </footer>
    </div>
  );
}
