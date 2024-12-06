'use client';

import React, { useState } from 'react';
import { FaCartPlus, FaCreditCard, FaCheckCircle } from 'react-icons/fa';
import Header from '@/app/landingpage/header';
import Footer from '@/app/landingpage/footer';

const CursosContabilidad = () => {
  // Estado para manejar el carrito de compras
  const [carrito, setCarrito] = useState([]);
  const [mensajeCompra, setMensajeCompra] = useState('');

  // Cursos disponibles
  const cursos = [
    {
      id: 1,
      titulo: 'Curso Básico de Contabilidad',
      descripcion:
        'Este curso te proporciona una comprensión sólida de los principios fundamentales de la contabilidad.',
      precio: 50, // Precio en dólares
      url: 'https://example.com/cursos/curso-basico-contabilidad',
    },
    {
      id: 2,
      titulo: 'Curso Avanzado de Contabilidad Financiera',
      descripcion:
        'Aprende sobre contabilidad financiera avanzada, incluyendo técnicas de análisis de estados financieros.',
      precio: 120,
      url: 'https://example.com/cursos/curso-avanzado-contabilidad-financiera',
    },
    {
      id: 3,
      titulo: 'Curso de Impuestos para Contadores',
      descripcion:
        'Un curso especializado en la contabilidad de impuestos, ideal para profesionales en la industria contable.',
      precio: 90,
      url: 'https://example.com/cursos/curso-impuestos-contabilidad',
    },
  ];

  // Agregar curso al carrito
  const agregarAlCarrito = (curso) => {
    setCarrito([...carrito, curso]);
    setMensajeCompra(`El curso "${curso.titulo}" ha sido agregado al carrito.`);
  };

  // Simulación de compra exitosa
  const realizarCompra = () => {
    setMensajeCompra('¡Compra realizada exitosamente! Puedes acceder a tus cursos en tu cuenta.');
    setCarrito([]);
  };

  return (
    <div className="bg-gradient-to-r from-blue-400 to-indigo-500 min-h-screen flex flex-col">
      {/* Header */}
      <Header />

      {/* Main Content */}
      <main className="flex-grow p-10">
        <section>
          <h2 className="text-3xl font-bold text-white mb-6">Cursos de Contabilidad</h2>
          <p className="text-lg text-white mb-6">
            Aprende contabilidad con nuestros cursos especializados. Todos los cursos están diseñados para brindarte el
            conocimiento práctico que necesitas.
          </p>

          {/* Mensaje de compra */}
          {mensajeCompra && (
            <div className="bg-teal-500 text-white p-4 rounded-lg mb-6">
              <p>{mensajeCompra}</p>
            </div>
          )}

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {cursos.map((curso) => (
              <div key={curso.id} className="bg-white p-6 shadow-lg rounded-lg flex flex-col">
                <h3 className="text-xl font-semibold text-teal-600 mb-4">{curso.titulo}</h3>
                <p className="text-gray-700 mb-4">{curso.descripcion}</p>
                <div className="flex justify-between items-center mb-4">
                  <p className="text-lg font-bold text-teal-600">${curso.precio}</p>
                  <button
                    onClick={() => agregarAlCarrito(curso)}
                    className="bg-teal-500 text-white py-2 px-4 rounded-full hover:bg-teal-600 transition duration-300"
                  >
                    <FaCartPlus className="mr-2" />
                    Agregar al carrito
                  </button>
                </div>
                <a
                  href={curso.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 underline mt-4 text-center"
                >
                  Ver más detalles
                </a>
              </div>
            ))}
          </div>

          {/* Carrito */}
          {carrito.length > 0 && (
            <div className="bg-white p-6 mt-10 shadow-lg rounded-lg">
              <h3 className="text-xl font-semibold text-teal-600 mb-4">Tu Carrito</h3>
              <ul className="mb-4">
                {carrito.map((item, index) => (
                  <li key={index} className="text-gray-700">
                    {item.titulo} - ${item.precio}
                  </li>
                ))}
              </ul>
              <button
                onClick={realizarCompra}
                className="bg-teal-500 text-white py-2 px-4 rounded-full hover:bg-teal-600 transition duration-300"
              >
                <FaCreditCard className="mr-2" />
                Realizar compra
              </button>
            </div>
          )}
        </section>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default CursosContabilidad;
