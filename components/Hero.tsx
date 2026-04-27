'use client';

export const Hero = () => {
  return (
    <section
      className="relative h-screen bg-cover bg-center bg-no-repeat flex items-center justify-center"
      style={{
        backgroundImage: 'url(https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&h=800&fit=crop)',
        backgroundColor: 'rgba(0, 0, 0, 0.4)',
        backgroundBlendMode: 'overlay',
      }}
    >
      <div className="text-center">
        {/* Logo placeholder - Usuario puede reemplazar con su logo */}
        <div className="mb-8 flex justify-center">
          <div
            className="w-32 h-32 rounded-full flex items-center justify-center shadow-2xl"
            style={{
              background: `linear-gradient(135deg, #032b4a 0%, #b29559 100%)`,
            }}
          >
            <svg
              className="w-20 h-20 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M13 10V3L4 14h7v7l9-11h-7z"
              />
            </svg>
          </div>
        </div>

        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 drop-shadow-lg">
          Apex International Elite
        </h1>
        <p className="text-xl md:text-2xl text-gray-100 mb-4 drop-shadow-md max-w-2xl mx-auto">
          Conectando Mercados, Liderando Industrias
        </p>
        <p className="text-lg md:text-xl text-gray-200 mb-8 drop-shadow-md max-w-3xl mx-auto">
          Distribuidora premium de productos de lujo con presencia en 5 continentes. Excelencia, integridad e innovación en cada transacción.
        </p>
      </div>
    </section>
  );
};
