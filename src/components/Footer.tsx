import React from 'react';

const Footer = () => {
  return (
    <footer className="py-8 border-t border-gray-900">
      <div className="container mx-auto px-4 text-center text-gray-400">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p>&copy; 2025 StrikeProductions. Todos los derechos reservados.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-blue-500 transition-colors">Twitter</a>
            <a href="#" className="hover:text-blue-500 transition-colors">Instagram</a>
            <a href="#" className="hover:text-blue-500 transition-colors">LinkedIn</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
