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
        <div className="mb-8 flex justify-center">
          <img
            src="/logo/logo-blanco.png"
            alt="Apex International Elite Logo"
            className="w-full h-full max-w-2xl max-h-96 object-contain"
                      />
        </div>

        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 drop-shadow-lg">
          Apex International Elite
        </h1>
        <p className="text-xl md:text-2xl text-gray-100 mb-4 drop-shadow-md max-w-2xl mx-auto">
          Connecting Markets, Leading Industries
        </p>
        <p className="text-lg md:text-xl text-gray-200 mb-8 drop-shadow-md max-w-3xl mx-auto">
          Premium distributor of luxury products with presence across 5 continents. Excellence, integrity, and innovation in every transaction.
        </p>
      </div>
    </section>
  );
};
