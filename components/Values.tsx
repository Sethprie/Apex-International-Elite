'use client';

import { Heart, Shield, Zap, Globe, Award } from 'lucide-react';

interface Value {
  id: number;
  title: string;
  description: string;
  icon: React.ReactNode;
}

const values: Value[] = [
  {
    id: 1,
    title: 'Excelencia',
    description: 'Comprometidos con la más alta calidad en cada producto y servicio que ofrecemos a nuestros clientes en todo el mundo.',
    icon: <Award className="w-12 h-12" style={{ color: '#b29559' }} />
  },
  {
    id: 2,
    title: 'Integridad',
    description: 'Actuamos con transparencia y honestidad en todas nuestras relaciones comerciales, cumpliendo siempre nuestros compromisos.',
    icon: <Shield className="w-12 h-12" style={{ color: '#b29559' }} />
  },
  {
    id: 3,
    title: 'Innovación',
    description: 'Buscamos continuamente nuevas soluciones y tendencias para satisfacer las necesidades cambiantes de nuestros clientes premium.',
    icon: <Zap className="w-12 h-12" style={{ color: '#b29559' }} />
  },
  {
    id: 4,
    title: 'Conexión Global',
    description: 'Conectamos mercados, personas y oportunidades creando puentes comerciales estratégicos entre continentes.',
    icon: <Globe className="w-12 h-12" style={{ color: '#b29559' }} />
  },
  {
    id: 5,
    title: 'Pasión por el Servicio',
    description: 'Nos apasiona servir a nuestros clientes con dedicación, atención personalizada y respuesta rápida a sus necesidades.',
    icon: <Heart className="w-12 h-12" style={{ color: '#b29559' }} />
  }
];

export default function Values() {
  return (
    <section className="py-20 px-6 md:px-12" style={{ backgroundColor: '#f8f6f0' }}>
      <div className="max-w-6xl mx-auto">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: '#032b4a' }}>
            Nuestros Valores Corporativos
          </h2>
          <div className="h-1 w-20 mx-auto mb-8" style={{ backgroundColor: '#b29559' }}></div>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Los principios fundamentales que guían cada decisión y acción en Apex International Elite
          </p>
        </div>

        {/* Values Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8">
          {values.map((value) => (
            <div
              key={value.id}
              className="p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 text-center"
            >
              <div className="flex justify-center mb-4">
                {value.icon}
              </div>
              <h3 className="text-xl font-bold mb-3" style={{ color: '#032b4a' }}>
                {value.title}
              </h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                {value.description}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom Message */}
        <div className="mt-16 p-8 rounded-2xl" style={{ backgroundColor: '#032b4a' }}>
          <p className="text-white text-lg text-center leading-relaxed">
            Estos valores no son solo palabras para nosotros, sino el cimiento sobre el cual construimos relaciones duraderas con nuestros clientes, socios y comunidades en los que operamos.
          </p>
        </div>
      </div>
    </section>
  );
}
