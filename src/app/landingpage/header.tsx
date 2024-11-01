'use client'

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

const Header = () => {
  const router = useRouter();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const goToLogin = () => {
    router.push('/sign-in');
  };

  return (
    <header className="w-full p-4 bg-green-700 text-white relative">
      <div className="flex items-center justify-between">
        {/* LOGO */}
        <div className="flex items-center gap-2">
          <Image src="/logo.png" alt="Logo" width={40} height={40} />
          <h1 className="text-lg font-bold">EDUCACIÓN DIGITAL</h1>
        </div>

        {/* MENU MOBILE */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="focus:outline-none">
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>

        {/* DESKTOP MENU */}
        <nav className="hidden md:flex gap-4 items-center">
          <a href="#inicio" className="hover:text-yellow-300">INICIO</a>
          <a href="#estudiantes" className="hover:text-yellow-300">ESTUDIANTES</a>
          <a href="#profesores" className="hover:text-yellow-300">PROFESORES</a>
          <a href="#recursos" className="hover:text-yellow-300">RECURSOS</a>
          <a href="#conocenos" className="hover:text-yellow-300">NOSOTROS</a>
          <a href="#contacto" className="hover:text-yellow-300">CONTACTO</a>
          <button onClick={goToLogin} className="hover:text-yellow-300">INICIAR SESIÓN</button>
          <button onClick={goToLogin} className="bg-yellow-300 text-green-700 px-3 py-1 rounded-md font-semibold text-sm hover:bg-yellow-400 transition duration-300">
            REGISTRO
          </button>
        </nav>
      </div>

      {/* MOBILE SLIDE MENU */}
      <div className={`fixed top-0 right-0 h-full w-1/2 bg-green-700 text-white transform ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-500 ease-in-out z-50`}>
        <div className="flex justify-end p-4">
          <button onClick={toggleMenu} className="focus:outline-none text-white">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          </button>
        </div>
        <nav className="flex flex-col items-start gap-4 p-4">
          <a href="#inicio" className="hover:text-yellow-300" onClick={toggleMenu}>INICIO</a>
          <a href="#estudiantes" className="hover:text-yellow-300" onClick={toggleMenu}>ESTUDIANTES</a>
          <a href="#profesores" className="hover:text-yellow-300" onClick={toggleMenu}>PROFESORES</a>
          <a href="#recursos" className="hover:text-yellow-300" onClick={toggleMenu}>RECURSOS</a>
          <a href="#administradores" className="hover:text-yellow-300" onClick={toggleMenu}>ADMINISTRADORES</a>
          <a href="#contacto" className="hover:text-yellow-300" onClick={toggleMenu}>CONTACTO</a>
          <button onClick={goToLogin} className="hover:text-yellow-300">INICIAR SESIÓN</button>
          <button onClick={goToLogin} className="bg-yellow-300 text-green-700 px-3 py-1 rounded-md font-semibold text-sm hover:bg-yellow-400 transition duration-300">
            REGISTRO
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
