import React from 'react';

const GallerySection = () => {
  const images = [
    '/galeria1.jpg',
    '/galeria2.jpg',
    '/galeria3.jpg',
    '/galeria4.jpg',
    '/galeria5.jpg',
    '/galeria6.jpg',
  ];

  return (
    <div id="gallery" className="py-12 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">Galería</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Momentos Destacados del Evento
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            Una colección de momentos memorables de nuestros eventos.
          </p>
        </div>

        <div className="mt-10">
          <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
            {images.map((image, index) => (
              <div key={index} className="relative">
                <dt>
                  <img
                    className="h-48 w-full object-cover rounded-md shadow-lg"
                    src={image}
                    alt={`Evento ${index + 1}`}
                  />
                </dt>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
};

export default GallerySection;
