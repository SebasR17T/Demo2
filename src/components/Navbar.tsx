import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-black py-4 fixed w-full z-10">
      <div className="container mx-auto px-4 flex items-center justify-between">
        <a href="#" className="text-2xl font-bold text-blue-500 font-serif">
          StrikeProductions
        </a>
        <div className="flex space-x-6">
          <a href="#services" className="hover:text-blue-400 transition-colors font-serif">
            Servicios
          </a>
          <a href="#contact" className="hover:text-blue-400 transition-colors font-serif">
            Contacto
          </a>
          <a href="#gallery" className="hover:text-blue-400 transition-colors font-serif">
            Galería
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
