'use client'

import React from 'react';
import Header from '@/app/landingpage/header';
import Footer from '@/app/landingpage/footer';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import EstudiantesSection from '@/app/landingpage/sections/estudiantes';
import ProfessoresSection from '@/app/landingpage/sections/profesores';
import RecursosSection from '@/app/landingpage/sections/recursos';
import ContactoSection from '@/app/landingpage/sections/contacto';
import NosotrosSection from '@/app/landingpage/sections/nosotros';

const Homepage = () => {
  const router = useRouter();

  return (
    <div className="bg-green-500 min-h-screen flex flex-col text-white">
      <Header />

      <main className="flex flex-col items-center justify-center flex-1 p-4 md:p-10 space-y-10">
        {/* Sección Principal */}
        <section className="flex flex-col md:flex-row items-center justify-center w-full text-center md:text-left space-y-6 md:space-y-0 md:space-x-6">
          <div className="w-full md:w-1/2 flex justify-center md:justify-end animate-fade-in-left">
            <Image className="md:w-[450px] md:h-[450px] w-[250px] h-[250px]"
              src="/imageneshome/landingpageF.png"
              alt="Children Reading"
              width={450}
              height={450}
            />
          </div>

          <div className="w-full md:w-1/2 flex flex-col items-center md:items-start mt-8 md:mt-0 animate-fade-in-right">
            <h2 className="text-3xl md:text-5xl font-extrabold drop-shadow-md">EDUCACIÓN</h2>
            <h3 className="text-xl md:text-2xl font-light mt-2 drop-shadow-md">A TU ALCANCE</h3>
            <p className="text-base md:text-lg mt-6 max-w-md drop-shadow-md">
              ¡Bienvenidos a Educación Digital!, la plataforma educativa creada especialmente para estudiantes y profesores.
            </p>
            <button className="mt-10 bg-yellow-300 text-green-700 font-bold px-4 py-2 md:px-6 md:py-2 rounded-full hover:bg-yellow-400 transition duration-300 drop-shadow-md">
              DESCÚBRELO
            </button>
          </div>
        </section>

        {/* Sección de Estudiantes */}
        <EstudiantesSection />

        {/* Sección de Profesores */}
        <ProfessoresSection />

        {/* Sección de Recursos Educativos */}
        <RecursosSection />

        {/* Sección de Administradores Escolares */}
        <NosotrosSection />

        {/* Sección de Contacto */}
        <ContactoSection />
      </main>

      <Footer />
    </div>
  );
};

export default Homepage;
