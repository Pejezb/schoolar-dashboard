import React from 'react';

const footer = () => {
  return (
    <footer className="w-full bg-gray-800 text-white p-4 text-center text-sm">
      <p>&copy; Educacion Digital, Todos los derechos reservados.</p>
      <div className="flex flex-col md:flex-row justify-center gap-2 mt-2">
        <a href="#privacy" className="hover:underline">Política de Privacidad</a>
        <span className="hidden md:inline">|</span>
        <a href="#terms" className="hover:underline">Términos de Servicio</a>
      </div>
    </footer>
  );
};

export default footer;
