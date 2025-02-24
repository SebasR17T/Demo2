import React from 'react';

const ContactSection = () => {
  return (
    <section id="contact" className="py-24 bg-black">
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            ¿Listo para <span className="text-blue-500">Elevar</span> Su Evento?
          </h2>
          <p className="text-xl text-gray-300 mb-12">
            Creemos juntos una experiencia inolvidable. Contáctenos para obtener una cotización personalizada.
          </p>
          <div className="flex flex-col md:flex-row gap-6 justify-center">
            <a
              href="mailto:info@strikeproductions.com"
              className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-8 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg shadow-blue-500/30"
            >
              Obtener Cotización Gratis
            </a>
            <a
              href="tel:+1234567890"
              className="border border-gray-700 hover:border-blue-500 text-gray-300 hover:text-white font-bold py-4 px-8 rounded-full transition-all duration-300"
            >
              +1 (234) 567-890
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
