import React from 'react';

const Navbar = () => {
  return (
<nav className="bg-black py-4 fixed w-full z-10">
      <div className="container mx-auto px-4 flex items-center justify-between">
        <img src="/logo.png" alt="StrikeProductions Logo" className="h-8 mr-2" />
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
