import React from 'react';
import Image from "next/image";

const HeroSection = () => {
  return (
    <section className="relative py-32 overflow-hidden mt-16">
    
      <div className="absolute inset-0 z-0">
        <Image
          src="/fondo.png"
          alt="Fondo de StrikeProductions"
          layout="fill"
          objectFit="cover"
          className="opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
      </div>
      
      <div className="container mx-auto text-center relative z-10 px-4">
        <h1 className="text-6xl md:text-8xl font-extrabold mb-6 bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
          StrikeProductions
        </h1>
        <p className="text-xl md:text-2xl mb-12 max-w-2xl mx-auto font-light text-gray-300">
          Elevando Eventos con Sonido Inmersivo, Iluminación Dinámica y Efectos Especiales Cautivadores
        </p>
        <a
          href="#services"
          className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-8 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg shadow-blue-500/30"
        >
          Descubre la Experiencia
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
