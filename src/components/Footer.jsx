import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-yellow-200 via-pink-200 to-purple-200 py-6">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
        {/* School Info */}
        <div className="text-center md:text-left text-gray-700 mb-4 md:mb-0">
          <h3 className="text-xl font-bold text-pink-600 mb-1">Little Bright Minds School</h3>
          <p>🏫 123 Little St, Happy Town, India</p>
          <p>📞 +91 98765 43210</p>
          <p>✉️ info@littlebrightminds.com</p>
        </div>

        {/* Social Media Icons */}
        <div className="flex space-x-4 text-pink-600 text-2xl">
          <a href="#" className="hover:text-purple-600 transition"><FaFacebookF /></a>
          <a href="#" className="hover:text-purple-600 transition"><FaInstagram /></a>
          <a href="#" className="hover:text-purple-600 transition"><FaTwitter /></a>
        </div>
      </div>

      {/* Copyright */}
      <div className="mt-4 text-center text-gray-600 text-sm">
        &copy; 2025 Little Bright Minds School. All rights reserved.
      </div>
    </footer>
  );
}
