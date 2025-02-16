import React from 'react';
import { Waves, Disc3, Phone } from 'lucide-react';

const SocialPoster = () => {
  return (
    <div className="relative bg-gradient-to-br from-blue-500 to-green-400 min-h-screen flex flex-col items-center justify-center p-16 font-sans overflow-hidden">
      {/* Background wave */}
      <div className="absolute -bottom-40 -left-20 w-full h-96 bg-blue-500/10 transform rotate-12 origin-top-left shadow-xl"></div>
      
      {/* Logo */}
      <div className="mb-8">
        <Disc3 size={180} className="text-green-400" />
      </div>

      {/* Main slogan */}
      <h1 className="text-6xl font-bold text-center text-white mb-12 leading-tight">
        Agua, jabón<br/> 
        <span className="text-yellow-300">¡acción!</span>
      </h1>

      {/* Services grid */}
      <div className="grid grid-cols-2 gap-12 mb-16 w-full max-w-4xl">
        <ServiceCard 
          icon={<Waves className="w-20 h-20"/>}
          title="Lavado y Secado"
          items={['Prendas diarias', 'Ropa de cama', 'Cortinas', 'Manteles', 'Trajes']}
        />
        
        <ServiceCard 
          icon={<Waves className="w-20 h-20"/>}
          title="Planchado Profesional"
          items={['Tecnología a vapor', 'Prendas delicadas', 'Pliegues perfectos']}
        />
      </div>

      {/* Delivery section */}
      <div className="bg-white/90 p-8 rounded-2xl shadow-2xl mb-12 w-full max-w-3xl">
        <div className="flex items-center gap-8">
          <Waves className="text-7xl text-blue-500 w-16 h-16"/>
          <div>
            <h3 className="text-4xl font-bold text-gray-700 mb-4">
              Alquiler de Lavadoras
            </h3>
            <p className="text-2xl text-green-500 font-semibold">
              Delivery Gratis + Detergente Incluido<br/>
              <span className="text-xl text-gray-600">(Casco Central de La Grita)</span>
            </p>
          </div>
        </div>
      </div>

      {/* Contact */}
      <div className="flex flex-col items-center gap-6">
        <div className="text-5xl font-bold text-white bg-gray-700/80 px-12 py-4 rounded-full flex items-center gap-4">
          <Phone className="w-8 h-8" />
          <a href="tel:+584243035553">0424 303.5553</a>
        </div>
        <p className="text-3xl text-white font-medium">María Rangel</p>
        <div className="h-2 w-48 bg-green-400 rounded-full mt-4"/>
      </div>

      {/* Decorative bubbles */}
      {[...Array(12)].map((_, i) => (
        <div
          key={i}
          className="absolute bg-white/20 rounded-full"
          style={{
            width: `${Math.random() * 40 + 20}px`,
            height: `${Math.random() * 40 + 20}px`,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`
          }}
        />
      ))}
    </div>
  );
};

const ServiceCard = ({ icon, title, items }) => (
  <div className="bg-white/90 p-8 rounded-2xl shadow-xl hover:-translate-y-2 transition-transform">
    <div className="flex flex-col items-center">
      <div className="text-blue-500 mb-4">{icon}</div>
      <h3 className="text-3xl font-bold text-gray-700 mb-4">{title}</h3>
      <ul className="text-xl text-center space-y-2 text-gray-600">
        {items.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>
    </div>
  </div>
);

export default SocialPoster;