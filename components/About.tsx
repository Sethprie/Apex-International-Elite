'use client';

export default function About() {
  return (
    <section className="py-20 px-6 md:px-12 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: '#032b4a' }}>
            Sobre Apex International Elite
          </h2>
          <div className="h-1 w-20 mx-auto mb-8" style={{ backgroundColor: '#b29559' }}></div>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto leading-relaxed">
            Somos líderes globales en distribución de productos de lujo, conectando mercados premium en cinco continentes con soluciones de clase mundial.
          </p>
        </div>

        {/* Company Info Grid */}
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          {/* Left Column - Mission */}
          <div>
            <h3 className="text-2xl font-bold mb-4" style={{ color: '#032b4a' }}>
              Nuestra Misión
            </h3>
            <p className="text-gray-700 leading-relaxed mb-6">
              Proporcionar productos premium de la más alta calidad a clientes exigentes en todo el mundo. Nos comprometemos a mantener los más altos estándares de excelencia, integridad y servicio en cada transacción.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Desde nuestra fundación, hemos cultivado relaciones duraderas con proveedores selectos y clientes VIP, garantizando acceso exclusivo a colecciones limitadas y productos de edición especial.
            </p>
          </div>

          {/* Right Column - Presencia Global */}
          <div>
            <h3 className="text-2xl font-bold mb-4" style={{ color: '#032b4a' }}>
              Presencia Global
            </h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Operamos en mercados estratégicos de alta demanda. Nuestra red internacional abarca:
            </p>
            <div className="flex flex-wrap gap-3">
              <span className="px-4 py-2 rounded-full text-white font-medium" style={{ backgroundColor: '#b29559' }}>
                Panamá
              </span>
              <span className="px-4 py-2 rounded-full text-white font-medium" style={{ backgroundColor: '#b29559' }}>
                Colombia
              </span>
              <span className="px-4 py-2 rounded-full text-white font-medium" style={{ backgroundColor: '#b29559' }}>
                Venezuela
              </span>
              <span className="px-4 py-2 rounded-full text-white font-medium" style={{ backgroundColor: '#b29559' }}>
                Ecuador
              </span>
              <span className="px-4 py-2 rounded-full text-white font-medium" style={{ backgroundColor: '#b29559' }}>
                España
              </span>
            </div>
            <p className="text-gray-600 text-sm mt-6">
              Conectando mercados premium en América Latina y Europa con soluciones de clase mundial.
            </p>
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center py-12 border-t border-b" style={{ borderColor: '#b29559' }}>
          <div>
            <div className="text-4xl font-bold mb-2" style={{ color: '#b29559' }}>
              15+
            </div>
            <p className="text-gray-700">Años de Experiencia</p>
          </div>
          <div>
            <div className="text-4xl font-bold mb-2" style={{ color: '#b29559' }}>
              500+
            </div>
            <p className="text-gray-700">Clientes Satisfechos</p>
          </div>
          <div>
            <div className="text-4xl font-bold mb-2" style={{ color: '#b29559' }}>
              5
            </div>
            <p className="text-gray-700">Continentes</p>
          </div>
          <div>
            <div className="text-4xl font-bold mb-2" style={{ color: '#b29559' }}>
              1000+
            </div>
            <p className="text-gray-700">Productos Premium</p>
          </div>
        </div>
      </div>
    </section>
  );
}
