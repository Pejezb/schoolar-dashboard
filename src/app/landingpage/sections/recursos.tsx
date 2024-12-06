'use client';

import React from 'react';
import { useRouter } from 'next/navigation'; // Importamos el hook useRouter
import { FaCalculator, FaStar, FaPaintBrush, FaFlask, FaShieldAlt, FaGlobe } from 'react-icons/fa';

const categories = [
  { title: 'Contabilidad', icon: <FaCalculator />, color: 'bg-yellow-300', path: '/categories/contabilidad' },
  { title: 'Astronomía', icon: <FaStar />, color: 'bg-yellow-300', path: '/categories/astronomia' },
  { title: 'Artes', icon: <FaPaintBrush />, color: 'bg-yellow-300', path: '/categories/artes' },
  { title: 'Ciencia', icon: <FaFlask />, color: 'bg-yellow-300', path: '/categories/ciencia' },
  { title: 'Ciberseguridad', icon: <FaShieldAlt />, color: 'bg-yellow-300', path: '/categories/ciberseguridad' },
  { title: 'Idiomas', icon: <FaGlobe />, color: 'bg-yellow-400', path: '/categories/idiomas' }, 
];

const RecursosSection = () => {
  const router = useRouter(); // Inicializamos el router

  // Función que redirige al usuario a la ruta de la categoría correspondiente
  const handleCategoryClick = (path) => {
    router.push(path);
  };

  return (
    <section className="bg-white p-10 text-green-700">
      <h2 className="text-3xl font-bold mb-6 text-center">Explora Nuestras Categorías</h2>
      <div className="grid gap-4 md:grid-cols-6">
        {categories.map((category, index) => (
          <div
            key={index}
            className={`flex flex-col items-center p-4 rounded-lg shadow-md hover:shadow-lg transition duration-300 ${category.color}`}
            onClick={() => handleCategoryClick(category.path)} // Añadimos el onClick para redirigir
          >
            <div className="text-4xl mb-2">{category.icon}</div>
            <h3 className="text-lg font-semibold">{category.title}</h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default RecursosSection;
