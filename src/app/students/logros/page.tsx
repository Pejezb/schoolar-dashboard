'use client';

import React, { useState } from 'react';
import { FaTrophy, FaUserCircle, FaCheckCircle, FaTimesCircle } from 'react-icons/fa';
import { Line } from 'react-chartjs-2'; // Gráfico de Chart.js
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';
import Header from '@/app/landingpage/header';
import Footer from '@/app/landingpage/footer';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const MisLogros = () => {
  const [user] = useState({
    nombre: 'Juan Pérez',
    imagenPerfil: 'https://www.w3schools.com/howto/img_avatar.png',
    progresoGeneral: 85, // Progreso general en porcentaje
  });

  const [logros] = useState([
    { materia: 'Matemáticas', actividad: 'Suma y Resta', puntuacion: 90, completado: true },
    { materia: 'Ciencias', actividad: 'Exploración de la Tierra', puntuacion: 85, completado: true },
    { materia: 'Inglés', actividad: 'Comprensión de lectura', puntuacion: 92, completado: true },
    { materia: 'Historia', actividad: 'Revolución Industrial', puntuacion: 88, completado: false },
    { materia: 'Arte', actividad: 'Dibujo de paisajes', puntuacion: 95, completado: true },
  ]);

  // Datos para el gráfico de progreso
  const data = {
    labels: ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun'],
    datasets: [
      {
        label: 'Progreso de Logros',
        data: [80, 85, 87, 90, 85, 95],
        fill: false,
        borderColor: 'rgba(75, 192, 192, 1)',
        tension: 0.1,
      },
    ],
  };

  return (
    <div className="bg-gradient-to-r from-green-400 to-blue-500 min-h-screen flex flex-col">

      {/* Header */}
      <Header />

      {/* Main Content */}
      <main className="flex-grow p-10">

        {/* Sección de Información del Usuario */}
        <section className="flex items-center bg-white p-8 rounded-lg shadow-xl mb-8">
          <img
            src={user.imagenPerfil}
            alt="Avatar"
            className="w-24 h-24 rounded-full border-4 border-green-600 mr-6"
          />
          <div>
            <h2 className="text-2xl font-semibold text-teal-600">{user.nombre}</h2>
            <p className="text-lg text-gray-700 mt-2">Progreso general: {user.progresoGeneral}%</p>
            <div className="flex items-center mt-4">
              <FaUserCircle className="text-2xl text-gray-700 mr-2" />
              <span className="text-gray-700">Usuario</span>
            </div>
          </div>
        </section>

        {/* Gráfico de Progreso */}
        <section className="bg-white p-8 rounded-lg shadow-xl mb-8">
          <h3 className="text-xl font-semibold text-teal-600 mb-4">Progreso Mensual</h3>
          <Line data={data} />
        </section>

        {/* Sección de Logros */}
        <section>
          <h2 className="text-3xl font-bold text-white mb-4">Mis Logros</h2>
          <p className="text-lg text-white mb-6">
            Aquí puedes ver el progreso y los logros que has alcanzado en las actividades realizadas.
          </p>

          {/* Contenedor de Logros */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {logros.map((logro, index) => (
              <div
                key={index}
                className="bg-white p-6 shadow-lg rounded-lg flex flex-col justify-between transition-transform transform hover:scale-105"
              >
                {/* Cabecera del Logro */}
                <div className="flex items-center mb-4">
                  <FaTrophy className="text-yellow-500 mr-4 text-3xl" />
                  <div>
                    <h3 className="text-xl font-semibold text-teal-600">{logro.actividad}</h3>
                    <p className="text-gray-700">Materia: {logro.materia}</p>
                  </div>
                </div>

                {/* Información de Puntuación y Estado */}
                <div className="mb-4">
                  <p className="font-bold text-gray-700">Puntuación: {logro.puntuacion}%</p>
                  <div className="mt-2 flex items-center">
                    {logro.completado ? (
                      <FaCheckCircle className="text-green-500 text-xl" />
                    ) : (
                      <FaTimesCircle className="text-red-500 text-xl" />
                    )}
                    <span className="ml-2 text-gray-600">
                      {logro.completado ? 'Completado' : 'No completado'}
                    </span>
                  </div>
                </div>

                {/* Botón de Acción */}
                <button className="mt-auto bg-teal-600 text-white py-2 px-4 rounded-lg text-lg hover:bg-teal-700 transition duration-300">
                  Ver Actividades
                </button>
              </div>
            ))}
          </div>
        </section>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default MisLogros;
