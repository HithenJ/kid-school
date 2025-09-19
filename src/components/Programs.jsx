import { FaBook, FaPalette, FaRunning } from "react-icons/fa";

export default function Programs() {
  const programs = [
    {
      title: "Kindergarten",
      description: "Fun and interactive learning environment for your little ones.",
      icon: <FaBook className="text-pink-600 w-10 h-10" />,
    },
    {
      title: "Primary",
      description: "Build creativity and foundational skills in a safe, nurturing space.",
      icon: <FaPalette className="text-yellow-500 w-10 h-10" />,
    },
    {
      title: "After-School Activities",
      description: "Sports, arts, and games to explore new interests and hobbies.",
      icon: <FaRunning className="text-purple-500 w-10 h-10" />,
    },
  ];

  return (
    <section id="programs" className="py-20 bg-gradient-to-r from-pink-100 via-yellow-100 to-purple-100">
      <h2 className="text-3xl md:text-4xl font-bold text-pink-600 text-center mb-12">
        Our Programs
      </h2>
      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8 px-6">
        {programs.map((program) => (
          <div
            key={program.title}
            className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transform hover:scale-105 transition duration-300 text-center"
          >
            <div className="flex justify-center mb-4 bg-gradient-to-br from-pink-200 via-yellow-200 to-purple-200 rounded-full w-16 h-16 items-center text-2xl">
              {program.icon}
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              {program.title}
            </h3>
            <p className="text-gray-600">{program.description}</p>
            <button className="mt-4 px-4 py-2 bg-gradient-to-r from-pink-500 via-yellow-400 to-purple-500 text-white rounded-full shadow hover:scale-105 transition transform">
              Learn More
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}
