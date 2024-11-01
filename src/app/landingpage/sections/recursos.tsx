import React from 'react';
import { FaCalculator, FaStar, FaPaintBrush, FaFlask, FaShieldAlt, FaGlobe } from 'react-icons/fa';

const categories = [
  { title: 'Contabilidad', icon: <FaCalculator />, color: 'bg-yellow-300' },
  { title: 'Astronomía', icon: <FaStar />, color: 'bg-yellow-300' },
  { title: 'Artes', icon: <FaPaintBrush />, color: 'bg-yellow-300' },
  { title: 'Ciencia', icon: <FaFlask />, color: 'bg-yellow-300' },
  { title: 'Ciberseguridad', icon: <FaShieldAlt />, color: 'bg-yellow-300' },
  { title: 'Idiomas', icon: <FaGlobe />, color: 'bg-yellow-400' }, 
];

const RecursosSection = () => (
  <section className="bg-white p-10 text-green-700">
    <h2 className="text-3xl font-bold mb-6 text-center">Explora Nuestras Categorías</h2>
    <div className="grid gap-4 md:grid-cols-6">
      {categories.map((category, index) => (
        <div
          key={index}
          className={`flex flex-col items-center p-4 rounded-lg shadow-md hover:shadow-lg transition duration-300 ${category.color}`}
        >
          <div className="text-4xl mb-2">{category.icon}</div>
          <h3 className="text-lg font-semibold">{category.title}</h3>
        </div>
      ))}
    </div>
  </section>
);

export default RecursosSection;
