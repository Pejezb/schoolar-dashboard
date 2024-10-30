"use client"

import React from 'react';
import Header from '@/app/header';
import Footer from '@/app/footer';
import Image from 'next/image';
import { useRouter } from 'next/navigation';


const Homepage = () => {
  const router = useRouter();

  const goToLogin = () => {
    router.push('/sign-in');
  };

  return (
    <div className="bg-green-500 min-h-screen flex flex-col text-white">
      <Header />

      <main className="flex flex-col md:flex-row items-center justify-center flex-1 p-4 md:p-10 text-center md:text-left space-y-6 md:space-y-0 md:space-x-6">
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
            "¡Bienvenidos a Educación Digital!, la plataforma educativa creada especialmente para estudiantes y profesores, facilitando el acceso a materiales de aprendizaje y herramientas interactivas."
          </p>
          <button onClick={goToLogin} className="mt-10 bg-yellow-300 text-green-700 font-bold px-4 py-2 md:px-6 md:py-2 rounded-full hover:bg-yellow-400 transition duration-300 drop-shadow-md">
            DESCÚBRELO
          </button>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Homepage;
