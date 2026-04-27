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
    title: 'Excellence',
    description: 'Committed to the highest quality in every product and service we offer to our clients worldwide.',
    icon: <Award className="w-12 h-12" style={{ color: '#b29559' }} />
  },
  {
    id: 2,
    title: 'Integrity',
    description: 'We act with transparency and honesty in all our business relationships, always fulfilling our commitments.',
    icon: <Shield className="w-12 h-12" style={{ color: '#b29559' }} />
  },
  {
    id: 3,
    title: 'Innovation',
    description: 'We continuously seek new solutions and trends to meet the changing needs of our premium clients.',
    icon: <Zap className="w-12 h-12" style={{ color: '#b29559' }} />
  },
  {
    id: 4,
    title: 'Global Connection',
    description: 'We connect markets, people, and opportunities, creating strategic commercial bridges between continents.',
    icon: <Globe className="w-12 h-12" style={{ color: '#b29559' }} />
  },
  {
    id: 5,
    title: 'Passion for Service',
    description: 'We are passionate about serving our clients with dedication, personalized attention, and rapid response to their needs.',
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
            Our Corporate Values
          </h2>
          <div className="h-1 w-20 mx-auto mb-8" style={{ backgroundColor: '#b29559' }}></div>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            The fundamental principles that guide every decision and action at Apex International Elite
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
            These values are not just words to us, but the foundation upon which we build lasting relationships with our clients, partners, and the communities in which we operate.
          </p>
        </div>
      </div>
    </section>
  );
}
