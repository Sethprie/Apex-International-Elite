'use client';

export const Hero = () => {
  return (
    <section
      className="relative h-screen bg-cover bg-center bg-no-repeat flex items-center justify-center"
      style={{
        backgroundImage: 'url(/hero/hero-background.png)',
        backgroundColor: 'rgba(0, 0, 0, 0.4)',
        backgroundBlendMode: 'overlay',
      }}
    >
      <div className="text-center">
        {/* Logo */}
        <div className="mb-6 sm:mb-8 flex justify-center">
          <img
            src="/logo/logo-blanco.png"
            alt="Apex International Elite Logo"
            className="w-full h-full max-w-xs sm:max-w-md md:max-w-lg lg:max-w-2xl max-h-48 sm:max-h-64 md:max-h-80 lg:max-h-96 object-contain"
          />
        </div>

        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-4 sm:mb-6 drop-shadow-lg">
          Apex International Elite
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl text-gray-100 mb-3 sm:mb-4 drop-shadow-md max-w-2xl mx-auto px-4">
          Connecting Markets, Leading Industries
        </p>
        <p className="text-base sm:text-lg md:text-xl text-gray-200 mb-6 sm:mb-8 drop-shadow-md max-w-3xl mx-auto px-4">
          Premium distributor of luxury products with presence across 5 continents. Excellence, integrity, and innovation in every transaction.
        </p>
        
        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href="#products"
            className="px-8 py-4 rounded-xl text-white font-semibold transition-all duration-300 hover:shadow-lg active:scale-95"
            style={{ backgroundColor: '#b29559' }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = '#a68349';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = '#b29559';
            }}
          >
            Explore Products
          </a>
          <a
            href="#contact"
            className="px-8 py-4 rounded-xl text-white font-semibold transition-all duration-300 hover:shadow-lg active:scale-95 border-2"
            style={{ borderColor: '#b29559', backgroundColor: 'transparent' }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = '#b29559';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = 'transparent';
            }}
          >
            Contact Us
          </a>
        </div>
      </div>
    </section>
  );
};
