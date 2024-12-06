'use client';

import React from 'react';
import Header from '@/app/landingpage/header';
import Footer from '@/app/landingpage/footer';

const BibliotecaPage: React.FC = () => {
  return (

    <div className="bg-green-500 min-h-screen flex flex-col text-white">
      <Header />
      
    <div className="bg-gray-100 min-h-screen p-5">
      {/* Header de la sección */}
      <header className="bg-green-700 text-white py-4 text-center">
        <h1 className="text-3xl font-bold">Biblioteca Digital</h1>
        <p className="mt-2">Explora libros en diferentes categorías</p>
      </header>

      {/* Contenido principal */}
      <main className="mt-10">
        {/* Sección de Categorías */}
        <section className="my-10">
          <h2 className="text-2xl font-semibold mb-5 text-teal-600">Categorías</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Categoría: Matemáticas */}
            <div className="bg-white p-5 shadow rounded">
              <h3 className="text-lg font-bold text-teal-600">Matemáticas</h3>
              <ul className="mt-3 list-disc list-inside text-gray-700">
                <li>
                  <span className="font-semibold">Título:</span> Conjuntos
                  <a
                    href="https://es.scribd.com/document/348755985/Teoria-de-Conjuntos-y-Temas-Afines-Seymour-Lipschutz"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 underline ml-2"
                  >
                    Leer
                  </a>
                </li>
                <li>
                  <span className="font-semibold">Título:</span> Suma y Resta
                  <a
                    href="https://www.orientacionandujar.es/2019/12/24/100-fichas-de-sumas-y-restas-variadas/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 underline ml-2"
                  >
                    Leer
                  </a>
                </li>
                <li>
                  <span className="font-semibold">Título:</span> Multiplicación
                  <a
                    href="https://elbibliote.com/libro-pedia/manual_matematica/?tag=multiplicaciones"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 underline ml-2"
                  >
                    Leer
                  </a>
                </li>
                <li>
                  <span className="font-semibold">Título:</span> Ecuaciones
                  <a
                    href="https://issuu.com/skcp.588/docs/libro_mary_cruz__1_-convertido__1_"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 underline ml-2"
                  >
                    Leer
                  </a>
                </li>
              </ul>
            </div>

            {/* Categoría: Comunicación */}
            <div className="bg-white p-5 shadow rounded">
              <h3 className="text-lg font-bold text-teal-600">Comunicación</h3>
              <ul className="mt-3 list-disc list-inside text-gray-700">
                <li>
                  <span className="font-semibold">Título:</span> El uso del adjetivo
                  <a
                    href="https://global-exam.com/blog/es/gramatica-espanola-uso-de-adjetivos-reglas-tipos-ejemplos-y-ejercicios/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 underline ml-2"
                  >
                    Leer
                  </a>
                </li>
                <li>
                  <span className="font-semibold">Título:</span> El uso de la G-J
                  <a
                    href="https://www.rae.es/libro-estilo-lengua-espa%C3%B1ola/palabras-con-g-y-j"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 underline ml-2"
                  >
                    Leer
                  </a>
                </li>
                <li>
                  <span className="font-semibold">Título:</span> El uso de la coma
                  <a
                    href="https://es.scribd.com/document/499229830/uso-de-la-coma"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 underline ml-2"
                  >
                    Leer
                  </a>
                </li>
                <li>
                  <span className="font-semibold">Título:</span> La oración
                  <a
                    href="https://human.libretexts.org/Bookshelves/Languages/Spanish/Libro%3A_Manual_de_gramatica_basica_y_avanzada_del_espanol_(Thomas_and_McAlister)/02%3A_La_oracion_simple/02.1%3A_La_estructura_de_la_oracion_simple%3A_el_sujeto_y_el_predicado"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 underline ml-2"
                  >
                    Leer
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </main>
    </div>
    <Footer />
    </div>
  );
};

export default BibliotecaPage;
