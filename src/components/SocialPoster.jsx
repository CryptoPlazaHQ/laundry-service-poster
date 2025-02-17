import React from 'react';
import { Waves, Phone, Globe, MapPin } from 'lucide-react';

const ModernLaundryPoster = () => {
  return (
    <div className="relative bg-[#243773] min-h-screen w-full flex flex-col items-center justify-start p-8 font-sans overflow-hidden">
      {/* Wave Background */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-[#D94EA8]/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-[#7EDDF2]/20 rounded-full blur-3xl"></div>
      </div>

      {/* Logo Section */}
      <div className="relative z-10 mb-8">
        <div className="flex items-center gap-4">
          <Waves className="w-16 h-16 text-[#7EDDF2]" />
          <h1 className="text-4xl font-bold text-white">LAVAPRENDA</h1>
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 w-full max-w-4xl bg-white/10 backdrop-blur-lg rounded-3xl p-8 mb-8">
        <h2 className="text-6xl font-bold text-white mb-8">
          Servicio de
          <span className="block text-[#D94EA8]">Lavandería</span>
        </h2>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <ServiceCard
            title="Servicios Principales"
            items={[
              'Lavado y Secado',
              'Planchado Profesional',
              'Ropa de Cama',
              'Cortinas y Manteles',
              'Trajes'
            ]}
          />
          <ServiceCard
            title="Servicios Especiales"
            items={[
              'Alquiler de Lavadoras',
              'Delivery Gratis',
              'Detergente Incluido',
              'Servicio Express',
              'Atención Personalizada'
            ]}
          />
        </div>

        {/* Location Info */}
        <div className="flex items-center gap-2 text-[#7EDDF2] mb-4">
          <MapPin className="w-6 h-6" />
          <span className="text-lg">Casco Central de La Grita</span>
        </div>
      </div>

      {/* Contact Section */}
      <div className="relative z-10 w-full max-w-4xl">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 text-white">
          <div className="flex items-center gap-4 bg-[#2D55A6] px-6 py-3 rounded-full">
            <Phone className="w-6 h-6" />
            <span className="text-xl font-medium">0424 303.5553</span>
          </div>
          <div className="text-2xl font-bold">
            María Rangel
          </div>
          <div className="flex gap-4">
            {['facebook', 'instagram', 'twitter'].map((social) => (
              <div key={social} className="w-10 h-10 rounded-full bg-[#D94EA8] flex items-center justify-center">
                <Globe className="w-5 h-5" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const ServiceCard = ({ title, items }) => (
  <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 hover:bg-white/10 transition-all">
    <h3 className="text-xl font-semibold text-[#7EDDF2] mb-4">{title}</h3>
    <ul className="space-y-2">
      {items.map((item, index) => (
        <li key={index} className="text-white flex items-center gap-2">
          <div className="w-2 h-2 bg-[#D94EA8] rounded-full"></div>
          {item}
        </li>
      ))}
    </ul>
  </div>
);

export default ModernLaundryPoster;