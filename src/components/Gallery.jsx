// src/components/Gallery.jsx
import kid1 from "../assets/kid1.png";
import kid2 from "../assets/kid2.png";
import kid3 from "../assets/kid3.png";
import kid4 from "../assets/kid4.png";
import kid5 from "../assets/kid5.png";
import kid6 from "../assets/kid6.png";

export default function Gallery() {
  const images = [kid1, kid2, kid3, kid4, kid5, kid6];

  return (
    <section id="activities" className="py-20 bg-gradient-to-r from-yellow-100 via-pink-100 to-purple-100">
      {/* Section Heading */}
      <h2 className="text-3xl md:text-4xl font-bold text-pink-600 text-center mb-12">
        Gallery
      </h2>

      {/* Image Grid */}
      <div className="max-w-7xl mx-auto grid sm:grid-cols-2 md:grid-cols-3 gap-6 px-6">
        {images.map((src, idx) => (
          <div 
            key={idx} 
            className="overflow-hidden rounded-2xl shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-2xl"
          >
            <img 
              src={src} 
              alt={`Activity ${idx + 1}`} 
              className="w-full h-48 object-cover"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
