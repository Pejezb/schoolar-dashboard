'use client';

import React from 'react';
import { FaHistory, FaLanguage, FaCalculator, FaFlask, FaPaintBrush } from 'react-icons/fa'; // Importando los iconos
import Header from '@/app/landingpage/header';
import Footer from '@/app/landingpage/footer';
import { useRouter } from 'next/navigation';

const Actividades = () => {
  const router = useRouter();

  // Función para redirigir a las actividades correspondientes
  const goToActivities = (subject: string) => {
    router.push(`https://play.kahoot.it/v2/?quizId=a1fe8896-dd9f-4419-b527-cc94f9bc764c&hostId=dfb56b4e-97d3-4615-bc31-5258d0196bda`);
  };

  // Materias a incluir
  const subjects = [
    { name: 'Historia', icon: <FaHistory className="mr-2 text-teal-600" />, description: 'Explora eventos históricos y su impacto en el presente.' },
    { name: 'Inglés', icon: <FaLanguage className="mr-2 text-teal-600" />, description: 'Mejora tu comprensión del inglés con actividades interactivas.' },
    { name: 'Matemáticas', icon: <FaCalculator className="mr-2 text-teal-600" />, description: 'Resuelve ejercicios matemáticos de diferentes niveles.' },
    { name: 'Ciencias', icon: <FaFlask className="mr-2 text-teal-600" />, description: 'Aprende sobre el mundo natural y experimenta conceptos científicos.' },
    { name: 'Arte', icon: <FaPaintBrush className="mr-2 text-teal-600" />, description: 'Desarrolla tu creatividad con actividades de dibujo y diseño.' }
  ];

  return (
    <div className="bg-gray-100 min-h-screen flex flex-col">
      {/* Header */}
      <Header />

      {/* Main Content */}
      <main className="flex-grow p-8">
        {/* Sección Primaria */}
        <section className="my-10">
          <h2 className="text-3xl font-bold text-green-700 mb-4">Actividades para Primaria</h2>
          <p className="text-lg text-gray-700 mb-6">Explora las actividades diseñadas para niños de primaria.</p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {['1ero', '2do', '3ro', '4to', '5to', '6to'].map((grado) => (
              <div key={grado} className="bg-white p-6 shadow-lg rounded-lg hover:shadow-2xl transition duration-300">
                <h3 className="text-xl font-bold text-teal-600 mb-4">{grado} de Primaria</h3>
                <div className="space-y-4">
                  {subjects.map((subject) => (
                    <div key={subject.name} className="flex items-center justify-between border-b pb-3 mb-3">
                      <div className="flex items-center text-gray-700">
                        {subject.icon}
                        <span className="ml-2">{subject.name}</span>
                      </div>
                      <button
                        onClick={() => goToActivities(subject.name.toLowerCase())}
                        className="bg-teal-600 text-white px-4 py-2 rounded-md hover:bg-teal-700 transition duration-300"
                      >
                        Realizar Actividades
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Sección Secundaria */}
        <section className="my-10">
          <h2 className="text-3xl font-bold text-green-700 mb-4">Actividades para Secundaria</h2>
          <p className="text-lg text-gray-700 mb-6">Explora las actividades diseñadas para estudiantes de secundaria.</p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {['1ero', '2do', '3ro', '4to', '5to'].map((grado) => (
              <div key={grado} className="bg-white p-6 shadow-lg rounded-lg hover:shadow-2xl transition duration-300">
                <h3 className="text-xl font-bold text-teal-600 mb-4">{grado} de Secundaria</h3>
                <div className="space-y-4">
                  {subjects.map((subject) => (
                    <div key={subject.name} className="flex items-center justify-between border-b pb-3 mb-3">
                      <div className="flex items-center text-gray-700">
                        {subject.icon}
                        <span className="ml-2">{subject.name}</span>
                      </div>
                      <button
                        onClick={() => goToActivities(subject.name.toLowerCase())}
                        className="bg-teal-600 text-white px-4 py-2 rounded-md hover:bg-teal-700 transition duration-300"
                      >
                        Realizar Actividades
                      </button>
                    </div>
                  ))}
                </div>
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

export default Actividades;
