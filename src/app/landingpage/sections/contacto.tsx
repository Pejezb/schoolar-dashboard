import React from 'react';

const ContactoSection = () => (
  <section id="contacto" className="bg-green-500 p-10 text-white">
    <h2 className="text-3xl font-bold mb-6 text-center">Contacto</h2>
    <p className="text-center mb-8">
      Un espacio para que los usuarios puedan resolver dudas, obtener ayuda o enviar comentarios.
    </p>
    <div className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-lg text-green-700">
      <form>
        <div className="mb-4">
          <label htmlFor="nombre" className="block text-sm font-semibold mb-2">Nombre</label>
          <input
            type="text"
            id="nombre"
            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-green-500"
            placeholder="Escribe tu nombre"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-semibold mb-2">E-mail</label>
          <input
            type="email"
            id="email"
            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-green-500"
            placeholder="Escribe tu e-mail"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="telefono" className="block text-sm font-semibold mb-2">Teléfono (opcional)</label>
          <input
            type="tel"
            id="telefono"
            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-green-500"
            placeholder="Escribe tu teléfono"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="mensaje" className="block text-sm font-semibold mb-2">Mensaje</label>
          <textarea
            id="mensaje"
            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-green-500"
            placeholder="Escribe tu mensaje"
            rows={4}
            required
          />
        </div>
        <button
          type="submit"
          className="w-full bg-yellow-300 text-green-700 font-bold py-2 rounded-full hover:bg-yellow-400 transition duration-300"
        >
          Enviar Mensaje
        </button>
      </form>
    </div>
  </section>
);

export default ContactoSection;
