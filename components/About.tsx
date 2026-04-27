'use client';

export default function About() {
  return (
    <section className="py-20 px-6 md:px-12 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: '#032b4a' }}>
            About Apex International Elite
          </h2>
          <div className="h-1 w-20 mx-auto mb-8" style={{ backgroundColor: '#b29559' }}></div>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto leading-relaxed">
            We are global leaders in luxury product distribution, connecting premium markets across five continents with world-class solutions.
          </p>
        </div>

        {/* Company Info Grid */}
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          {/* Left Column - Mission */}
          <div>
            <h3 className="text-2xl font-bold mb-4" style={{ color: '#032b4a' }}>
              Our Mission
            </h3>
            <p className="text-gray-700 leading-relaxed mb-6">
              To provide the highest quality premium products to discerning clients worldwide. We are committed to maintaining the highest standards of excellence, integrity, and service in every transaction.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Since our founding, we have cultivated lasting relationships with select suppliers and VIP clients, ensuring exclusive access to limited collections and special edition products.
            </p>
          </div>

          {/* Right Column - Global Presence */}
          <div>
            <h3 className="text-2xl font-bold mb-4" style={{ color: '#032b4a' }}>
              Global Presence
            </h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              We operate in strategic high-demand markets. Our international network spans:
            </p>
            <div className="flex flex-wrap gap-3">
              <span className="px-4 py-2 rounded-full text-white font-medium" style={{ backgroundColor: '#b29559' }}>
                Panama
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
                Spain
              </span>
            </div>
            <p className="text-gray-600 text-sm mt-6">
              Connecting premium markets in Latin America and Europe with world-class solutions.
            </p>
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center py-12 border-t border-b" style={{ borderColor: '#b29559' }}>
          <div>
            <div className="text-4xl font-bold mb-2" style={{ color: '#b29559' }}>
              15+
            </div>
            <p className="text-gray-700">Years of Experience</p>
          </div>
          <div>
            <div className="text-4xl font-bold mb-2" style={{ color: '#b29559' }}>
              500+
            </div>
            <p className="text-gray-700">Satisfied Clients</p>
          </div>
          <div>
            <div className="text-4xl font-bold mb-2" style={{ color: '#b29559' }}>
              5
            </div>
            <p className="text-gray-700">Continents</p>
          </div>
          <div>
            <div className="text-4xl font-bold mb-2" style={{ color: '#b29559' }}>
              1000+
            </div>
            <p className="text-gray-700">Premium Products</p>
          </div>
        </div>
      </div>
    </section>
  );
}
