// src/components/Testimonials.jsx
import parent1 from "../assets/parent1.png";
import parent2 from "../assets/parent2.png";

export default function Testimonials() {
  const testimonials = [
    {
      name: "Mr. Ajay Sharma",
      photo: parent1,
      feedback: "Little Bright Minds School has been amazing for my child. The teachers are caring, and the activities are both fun and educational!"
    },
    {
      name: "Mr. Rajesh Kumar",
      photo: parent2,
      feedback: "I love how my daughter has grown socially and academically. The colorful environment keeps kids excited to learn every day."
    }
  ];

  return (
    <section id="testimonials" className="py-20 bg-gradient-to-r from-purple-200 via-pink-200 to-yellow-200">
      <h2 className="text-3xl md:text-4xl font-bold text-pink-600 text-center mb-12">
        What Parents Say
      </h2>

      <div className="max-w-7xl mx-auto grid sm:grid-cols-1 md:grid-cols-2 gap-8 px-6">
        {testimonials.map((t, idx) => (
          <div 
            key={idx} 
            className="bg-white p-6 rounded-2xl shadow-lg flex flex-col items-center text-center transform transition duration-300 hover:scale-105"
          >
            <img 
              src={t.photo} 
              alt={t.name} 
              className="w-24 h-24 rounded-full object-cover mb-4"
            />
            <p className="text-gray-700 mb-4">{t.feedback}</p>
            <h3 className="text-lg font-bold text-pink-600">{t.name}</h3>
          </div>
        ))}
      </div>
    </section>
  );
}
