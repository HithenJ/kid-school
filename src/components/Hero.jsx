export default function Hero() {
  return (
    <section
      id="home"
      className="bg-gradient-to-r from-yellow-300 via-pink-300 to-purple-400 text-center py-20 md:py-32 relative"
    >
      <h1 className="text-4xl md:text-6xl font-extrabold text-white drop-shadow-lg">
        Nurturing Young Minds with Care & Creativity
      </h1>

      <p className="mt-4 text-lg md:text-xl text-white max-w-2xl mx-auto">
        A happy place for children to learn, play, and grow together.
      </p>

      <button className="mt-8 px-6 py-3 bg-gradient-to-r from-pink-500 via-yellow-400 to-purple-500 text-white font-bold rounded-full shadow-lg hover:scale-105 transform transition animate-bounce">
        Enroll Now
      </button>

      <div className="mt-12 flex justify-center">
        <div className="w-40 h-40 bg-pink-200 rounded-full flex items-center justify-center text-6xl">
          🐻
        </div>
      </div>
    </section>
  );
}
