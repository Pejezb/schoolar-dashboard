'use client';

import React from 'react';
import { useRouter } from 'next/navigation';

const EstudiantesSection = () => {
  const router = useRouter();

  const goToBiblioteca = () => {
    router.push('/students/biblioteca'); 
  };
  const goToActividades = () => {
    router.push('/students/actividades'); 
  };
  const goToLogros = () => {
    router.push('/students/logros'); 
  };



  return (
    <section id="estudiantes" className="bg-green-500 p-10 text-white">
      <h2 className="text-3xl font-bold mb-4">Bienvenidos Estudiantes</h2>
      <p className="text-lg mb-6">
        Un espacio enfocado en el aprendizaje de los niños, con actividades interactivas y recursos organizados.
      </p>
      <div className="grid gap-4 md:grid-cols-3">
        <div className="bg-white text-green-700 p-4 rounded-lg shadow-md">
          <h3 className="font-bold">Biblioteca Digital</h3>
          <p>Accede a materiales de estudio organizados por grado y materia.</p>
          <button
            onClick={goToBiblioteca}
            className="mt-4 bg-yellow-300 text-green-700 font-bold px-4 py-2 rounded-full hover:bg-yellow-400 transition duration-300"
          >
            Ver Biblioteca
          </button>
        </div>
        <div className="bg-white text-green-700 p-4 rounded-lg shadow-md">
          <h3 className="font-bold">Actividades Interactivas</h3>
          <p>Participa en juegos y actividades de matemáticas, ciencias y lenguaje.</p>
          <button onClick={goToActividades} className="mt-4 bg-yellow-300 text-green-700 font-bold px-4 py-2 rounded-full hover:bg-yellow-400 transition duration-300">
            Explorar Actividades
          </button>
        </div>
        <div className="bg-white text-green-700 p-4 rounded-lg shadow-md">
          <h3 className="font-bold">Mi Progreso</h3>
          <p>Revisa tus logros y el estado de tus trabajos completados.</p>
          <button onClick = {goToLogros} className="mt-4 bg-yellow-300 text-green-700 font-bold px-4 py-2 rounded-full hover:bg-yellow-400 transition duration-300">
            Ver Mi Progreso
          </button>
        </div>
      </div>
    </section>
  );
};

export default EstudiantesSection;
