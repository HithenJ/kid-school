import { FaPhone, FaMapMarkerAlt, FaEnvelope } from "react-icons/fa";

export default function Contact() {
  return (
    <section id="contact" className="py-12 bg-gradient-to-r from-purple-200 via-pink-200 to-yellow-200">
      <div className="max-w-4xl mx-auto px-6 text-center">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-pink-600 mb-6">
          Get in Touch
        </h2>

        {/* Contact Form */}
        <form className="flex flex-col gap-4 bg-white p-6 md:p-8 rounded-2xl shadow-lg">
          <input 
            type="text" 
            placeholder="Name" 
            className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400"
          />
          <input 
            type="email" 
            placeholder="Email" 
            className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400"
          />
          <textarea 
            placeholder="Message" 
            rows="5"
            className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400"
          ></textarea>
          <button 
            className="mt-2 px-6 py-3 bg-gradient-to-r from-pink-500 via-yellow-400 to-purple-500 text-white rounded-full font-bold hover:scale-105 transform transition shadow-lg"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}
