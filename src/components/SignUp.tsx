import React from "react";
import { FaGooglePlusG, FaFacebookF, FaGithub, FaLinkedinIn } from "react-icons/fa";

const SignUp = () => (
  <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center flex-col px-10">
    <form className="flex flex-col items-center text-center">
      <h1 className="text-3xl font-semibold mb-4">Crear Cuenta</h1>
      <div className="flex gap-3 mb-4">
        <a href="#" className="p-2 border rounded-full text-gray-600"><FaGooglePlusG /></a>
        <a href="#" className="p-2 border rounded-full text-gray-600"><FaFacebookF /></a>
        <a href="#" className="p-2 border rounded-full text-gray-600"><FaGithub /></a>
        <a href="#" className="p-2 border rounded-full text-gray-600"><FaLinkedinIn /></a>
      </div>
      <span className="text-sm mb-4">o usa tu correo electrónico para registrarte</span>
      <input type="text" placeholder="Nombre" className="w-full px-4 py-2 mb-3 bg-gray-200 rounded-lg" />
      <input type="email" placeholder="Correo Electrónico" className="w-full px-4 py-2 mb-3 bg-gray-200 rounded-lg" />
      <input type="password" placeholder="Contraseña" className="w-full px-4 py-2 mb-3 bg-gray-200 rounded-lg" />
      <button type="button" className="px-6 py-2 bg-green-700 text-white rounded-lg hover:bg-green-800">Registrarse</button>
    </form>
  </div>
);

export default SignUp;

