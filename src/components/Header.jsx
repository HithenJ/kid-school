import { useState } from "react";
import { FaHome, FaInfoCircle, FaGraduationCap, FaPalette, FaEnvelope } from "react-icons/fa";

export default function Header() {
  const [open, setOpen] = useState(false);

  const links = [
    { name: "Home", href: "#home", icon: <FaHome /> },
    { name: "About Us", href: "#aboutus", icon: <FaInfoCircle /> },
    { name: "Admissions", href: "#programs", icon: <FaGraduationCap /> },
    { name: "Activities", href: "#activities", icon: <FaPalette /> },
    { name: "Contact", href: "#contact", icon: <FaEnvelope /> },
  ];

  return (
    <header className="sticky top-0 bg-gradient-to-r from-pink-200 via-yellow-200 to-purple-200 shadow-md z-50">
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <div className="text-2xl font-bold text-pink-600 flex items-center">
          <span className="inline-block w-10 h-10 bg-pink-400 rounded-full mr-2"></span>
          Little Bright Minds
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6 text-gray-700 font-medium">
          {links.map((link) => (
            <li key={link.name} className="flex items-center space-x-1">
              <a
                href={link.href}
                className="flex items-center gap-1 hover:text-pink-600 hover:scale-105 transition-transform"
              >
                {link.icon} {link.name}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden text-pink-600 text-2xl"
          onClick={() => setOpen(!open)}
        >
          ☰
        </button>
      </nav>

      {/* Mobile Menu */}
      {open && (
        <ul className="md:hidden flex flex-col items-center bg-gradient-to-r from-pink-100 via-yellow-100 to-purple-100 shadow-md py-4 space-y-4">
          {links.map((link) => (
            <li key={link.name} className="flex items-center space-x-2">
              <a
                href={link.href}
                className="text-gray-700 font-medium flex items-center gap-2 hover:text-pink-600"
              >
                {link.icon} {link.name}
              </a>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
}
