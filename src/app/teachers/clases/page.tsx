'use client';

import React, { useState } from 'react';
import { FaUserTie, FaCalendarAlt, FaBook } from 'react-icons/fa';
import { Calendar } from 'react-calendar';
import Header from '@/app/landingpage/header';
import Footer from '@/app/landingpage/footer';
import 'react-calendar/dist/Calendar.css'; // Importando estilos para el calendario

const Clases = () => {
  // Datos de los profesores y sus materias
  const [professors] = useState([
    {
      nombre: 'Prof. Ana García',
      materia: 'Matemáticas',
      horario: ['Lunes 10:00 AM - 12:00 PM', 'Miércoles 1:00 PM - 3:00 PM'],
      imagen: 'https://www.w3schools.com/howto/img_avatar.png',
    },
    {
      nombre: 'Prof. Luis Pérez',
      materia: 'Ciencias',
      horario: ['Martes 9:00 AM - 11:00 AM', 'Jueves 3:00 PM - 5:00 PM'],
      imagen: 'https://www.w3schools.com/howto/img_avatar2.png',
    },
    {
      nombre: 'Prof. Marta López',
      materia: 'Inglés',
      horario: ['Lunes 2:00 PM - 4:00 PM', 'Viernes 11:00 AM - 1:00 PM'],
      imagen: 'https://www.w3schools.com/howto/img_avatar.png',
    },
  ]);

  const [selectedDate, setSelectedDate] = useState(new Date()); // Fecha seleccionada en el calendario

  const handleDateChange = (date: Date) => {
    setSelectedDate(date);
  };

  return (
    <div className="bg-gradient-to-r from-blue-400 to-indigo-500 min-h-screen flex flex-col">
      {/* Header */}
      <Header />

      {/* Main Content */}
      <main className="flex-grow p-10">

        {/* Sección de Clases */}
        <section className="mb-10">
          <h2 className="text-3xl font-bold text-white mb-4">Calendario de Clases</h2>
          <p className="text-lg text-white mb-6">
            Elige una fecha en el calendario para ver las clases programadas para ese día.
          </p>

          {/* Calendario de Clases */}
          <div className="mb-8">
            <Calendar
              onChange={handleDateChange}
              value={selectedDate}
              className="react-calendar bg-white rounded-lg shadow-lg"
            />
          </div>
        </section>

        {/* Sección de Profesores */}
        <section>
          <h2 className="text-3xl font-bold text-white mb-4">Nuestros Profesores</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {professors.map((profesor, index) => (
              <div
                key={index}
                className="bg-white p-6 shadow-lg rounded-lg flex flex-col justify-between transition-transform transform hover:scale-105"
              >
                {/* Información del Profesor */}
                <div className="flex items-center mb-4">
                  <img
                    src={profesor.imagen}
                    alt="Profesor"
                    className="w-16 h-16 rounded-full border-4 border-teal-600 mr-4"
                  />
                  <div>
                    <h3 className="text-xl font-semibold text-teal-600">{profesor.nombre}</h3>
                    <p className="text-gray-700">{profesor.materia}</p>
                  </div>
                </div>

                {/* Horarios del Profesor */}
                <div className="mb-4">
                  <h4 className="font-bold text-gray-700 mb-2">Horario:</h4>
                  <ul className="list-disc pl-5">
                    {profesor.horario.map((horario, idx) => (
                      <li key={idx} className="text-gray-700">{horario}</li>
                    ))}
                  </ul>
                </div>

                {/* Botón de Ver Calendario de Clases */}
                <button className="mt-auto bg-teal-600 text-white py-2 px-4 rounded-lg text-lg hover:bg-teal-700 transition duration-300">
                  Ver Clases
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

export default Clases;
