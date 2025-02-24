import React from 'react';

const ServicesSection = () => {
  const services = [
    {
      icon: '🎶',
      title: 'Sistemas de Sonido Premium',
      description: 'Soluciones de audio nítidas adaptadas al tamaño de su espacio y tipo de evento, impulsadas por equipos líderes en la industria.'
    },
    {
      icon: '💡',
      title: 'Iluminación Dinámica',
      description: 'Diseños de iluminación atmosférica que transforman espacios y crean experiencias visuales inmersivas.'
    },
    {
      icon: '🌫️',
      title: 'Efectos Especiales',
      description: 'Máquinas de humo profesionales, cañones de CO2 y sistemas de efectos para amplificar la energía de cualquier evento.'
    }
  ];

  return (
    <section id="services" className="py-24 bg-gradient-to-b from-black via-gray-900 to-black">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center">
          Nuestra <span className="text-blue-500">Experiencia</span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="group p-8 bg-gray-900/50 rounded-2xl border border-gray-800 hover:border-blue-500/30 transition-all duration-300 hover:bg-gray-900/70 backdrop-blur-sm"
            >
              <div className="mb-6 text-blue-500 text-4xl">
                {service.icon}
              </div>
              <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
              <p className="text-gray-400 leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
