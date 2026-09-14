function Hero() {
  return (
    <div>
      <main>
        {/* hero section */}
        <section className="bg-white text-center py-24 px-5">
          <h1 className="text-5xl font-bold text-gray-900 mb-5">
            Welcome To My Website
          </h1>
          <p className="text-lg text-gray-600 mb-8">
            learn React and build modern web application.
          </p>
          <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-red-600 transition font-medium">
            Get Started
          </button>
        </section>
      </main>
    </div>
  );
}

export default Hero;
