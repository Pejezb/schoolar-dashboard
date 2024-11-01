import React from 'react';

const ProfessoresSection = () => (
  <section id="profesores" className="bg-green-500 p-10 text-white">
    <h2 className="text-3xl font-bold mb-4">Bienvenidos Profesores</h2>
    <p className="text-lg mb-6">
      Planifica tus lecciones, comparte materiales y evalúa el progreso de tus alumnos de manera sencilla.
    </p>
    <div className="grid gap-4 md:grid-cols-3">
      <div className="bg-white text-green-700 p-4 rounded-lg shadow-md">
        <h3 className="font-bold">Gestión de Clases</h3>
        <p>Planificadores, guías y plantillas de clases para organizar tus lecciones de manera eficiente.</p>
        <button className="mt-4 bg-yellow-300 text-green-700 font-bold px-4 py-2 rounded-full hover:bg-yellow-400 transition duration-300">
          Planificar Ahora
        </button>
      </div>
      <div className="bg-white text-green-700 p-4 rounded-lg shadow-md">
        <h3 className="font-bold">Recursos para Docentes</h3>
        <p>Documentos, videos y actividades para utilizar dentro del aula.</p>
        <button className="mt-4 bg-yellow-300 text-green-700 font-bold px-4 py-2 rounded-full hover:bg-yellow-400 transition duration-300">
          Ver Recursos
        </button>
      </div>
      <div className="bg-white text-green-700 p-4 rounded-lg shadow-md">
        <h3 className="font-bold">Comunicación con Alumnos</h3>
        <p>Envía mensajes, asigna tareas y resuelve dudas para mantenerte en contacto con tus estudiantes.</p>
        <button className="mt-4 bg-yellow-300 text-green-700 font-bold px-4 py-2 rounded-full hover:bg-yellow-400 transition duration-300">
          Contactar
        </button>
      </div>
    </div>
  </section>
);

export default ProfessoresSection;