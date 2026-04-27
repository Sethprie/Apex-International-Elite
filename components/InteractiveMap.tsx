'use client';

import { useEffect, useRef, useState } from 'react';
import dynamic from 'next/dynamic';

const MapContainer = dynamic(() => import('react-leaflet').then((mod) => mod.MapContainer), { ssr: false });
const TileLayer = dynamic(() => import('react-leaflet').then((mod) => mod.TileLayer), { ssr: false });
const Marker = dynamic(() => import('react-leaflet').then((mod) => mod.Marker), { ssr: false });
const Popup = dynamic(() => import('react-leaflet').then((mod) => mod.Popup), { ssr: false });

interface Location {
  name: string;
  country: string;
  description: string;
  coordinates: [number, number]; // [lat, lng]
}

const locations: Location[] = [
  {
    name: 'Panama',
    country: 'Panama',
    description: 'Strategic hub for Americas logistics',
    coordinates: [8.9833, -79.5167]
  },
  {
    name: 'Venezuela',
    country: 'Venezuela',
    description: 'Key market in South America',
    coordinates: [10.5000, -66.9167]
  },
  {
    name: 'Colombia',
    country: 'Colombia',
    description: 'Growing commercial gateway',
    coordinates: [4.5709, -74.2973]
  },
  {
    name: 'Spain',
    country: 'Spain',
    description: 'European market entry point',
    coordinates: [40.4168, -3.7038]
  },
  {
    name: 'Ecuador',
    country: 'Ecuador',
    description: 'Pacific coast strategic location',
    coordinates: [-0.1807, -78.4678]
  }
];

export const InteractiveMap = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    
    // Import Leaflet CSS only on client side
    import('leaflet/dist/leaflet.css');
    
    // Fix for default markers in Leaflet with Webpack
    if (typeof window !== 'undefined') {
      import('leaflet').then((L) => {
        delete (L.Icon.Default.prototype as any)._getIconUrl;
        L.Icon.Default.mergeOptions({
          iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
          iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
          shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
        });
      });
    }
  }, []);

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 
            className="text-4xl md:text-5xl font-bold mb-4"
            style={{ color: '#032b4a' }}
          >
            Global Presence
          </h2>
          <p 
            className="text-xl mb-2"
            style={{ color: '#b29559' }}
          >
            Connecting Markets, Leading Industries
          </p>
          <p className="text-gray-600 max-w-2xl mx-auto">
            At Apex International Elite, borders are not barriers but points of connection. 
            Our strategic network spans key commercial hubs worldwide.
          </p>
        </div>

        {/* Map Container */}
        <div className="relative bg-white rounded-2xl shadow-xl p-8 mb-8">
          {isClient && (
            <div className="h-96 rounded-xl overflow-hidden">
              <MapContainer 
                center={[10, -60]} 
                zoom={3} 
                style={{ height: '100%', width: '100%' }}
                zoomControl={true}
              >
                <TileLayer
                  attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                {locations.map((location) => (
                  <Marker key={location.name} position={location.coordinates}>
                    <Popup>
                      <div className="text-center">
                        <h3 className="font-bold text-lg" style={{ color: '#032b4a' }}>
                          {location.name}
                        </h3>
                        <p className="text-sm text-gray-600 mt-1">
                          {location.description}
                        </p>
                      </div>
                    </Popup>
                  </Marker>
                ))}
              </MapContainer>
            </div>
          )}
        </div>

        {/* Location Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {locations.map((location) => (
            <div
              key={location.name}
              className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300 border border-gray-100"
            >
              <div className="flex items-center mb-3">
                <div 
                  className="w-3 h-3 rounded-full mr-3"
                  style={{ backgroundColor: '#b29559' }}
                />
                <h3 
                  className="text-lg font-bold"
                  style={{ color: '#032b4a' }}
                >
                  {location.name}
                </h3>
              </div>
              <p className="text-gray-600 text-sm">
                {location.description}
              </p>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <button
            className="px-8 py-4 rounded-xl text-white font-semibold transition-all duration-300 hover:shadow-lg"
            style={{ backgroundColor: '#b29559' }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = '#a68349';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = '#b29559';
            }}
          >
            Become a Strategic Partner
          </button>
        </div>
      </div>
    </section>
  );
};
