'use client';

import React from 'react';
import { FaBook, FaLink, FaFilePdf, FaChalkboardTeacher, FaLaptopCode, FaDatabase } from 'react-icons/fa';
import Header from '@/app/landingpage/header';
import Footer from '@/app/landingpage/footer';

const RecursosDocentes = () => {
  const recursos = [
    {
      categoria: 'Tesis Académicas',
      descripcion: 'Recopilación de tesis y documentos académicos en diferentes áreas del conocimiento.',
      enlaces: [
        {
          titulo: 'Tesis sobre Educación en el Perú',
          url: 'https://repositorio.minedu.gob.pe/handle/20.500.12799/12345',
        },
        {
          titulo: 'Impacto de las TIC en la Educación Secundaria',
          url: 'https://www.sciencedirect.com/science/article/pii/S036013152100128X',
        },
      ],
      icon: <FaFilePdf />,
    },
    {
      categoria: 'Páginas Científicas',
      descripcion: 'Plataformas con investigaciones científicas y artículos académicos.',
      enlaces: [
        {
          titulo: 'ResearchGate',
          url: 'https://www.researchgate.net/',
        },
        {
          titulo: 'Google Scholar',
          url: 'https://scholar.google.com/',
        },
      ],
      icon: <FaBook />,
    },
    {
      categoria: 'Recursos Educativos Abiertos',
      descripcion: 'Plataformas con materiales educativos gratuitos y accesibles.',
      enlaces: [
        {
          titulo: 'Khan Academy',
          url: 'https://www.khanacademy.org/',
        },
        {
          titulo: 'Coursera (Cursos gratuitos)',
          url: 'https://www.coursera.org/courses?query=free',
        },
      ],
      icon: <FaLink />,
    },
    {
      categoria: 'Herramientas Pedagógicas',
      descripcion: 'Aplicaciones y herramientas que facilitan la enseñanza y aprendizaje.',
      enlaces: [
        {
          titulo: 'Padlet',
          url: 'https://padlet.com/',
        },
        {
          titulo: 'Google Classroom',
          url: 'https://classroom.google.com/',
        },
      ],
      icon: <FaChalkboardTeacher />,
    },
    {
      categoria: 'Tecnologías en la Educación',
      descripcion: 'Plataformas y herramientas tecnológicas aplicadas a la educación.',
      enlaces: [
        {
          titulo: 'EdTech Hub',
          url: 'https://edtechhub.org/',
        },
        {
          titulo: 'Tech Tools for Teachers',
          url: 'https://www.teachthought.com/technology/',
        },
      ],
      icon: <FaLaptopCode />,
    },
    {
      categoria: 'Artículos Académicos',
      descripcion: 'Artículos sobre metodologías de enseñanza, educación y desarrollo pedagógico.',
      enlaces: [
        {
          titulo: 'Estudios sobre aprendizaje en línea',
          url: 'https://www.jstor.org/stable/25721524',
        },
        {
          titulo: 'Pedagogía del siglo XXI',
          url: 'https://www.tandfonline.com/doi/full/10.1080/09523987.2020.1712960',
        },
      ],
      icon: <FaBook />,
    },
    {
      categoria: 'Investigaciones de Actualidad',
      descripcion: 'Últimas investigaciones y descubrimientos educativos.',
      enlaces: [
        {
          titulo: 'Estudios sobre la resiliencia escolar',
          url: 'https://www.frontiersin.org/articles/10.3389/feduc.2021.777220/full',
        },
        {
          titulo: 'El futuro de la educación en tiempos de pandemia',
          url: 'https://www.edutopia.org/article/what-we-learned-about-learning-during-pandemic',
        },
      ],
      icon: <FaDatabase />,
    },
  ];

  return (
    <div className="bg-gradient-to-r from-blue-400 to-indigo-500 min-h-screen flex flex-col">
      {/* Header */}
      <Header />

      {/* Main Content */}
      <main className="flex-grow p-10">
        <section>
          <h2 className="text-3xl font-bold text-white mb-6">Recursos para Docentes</h2>
          <p className="text-lg text-white mb-6">
            Aquí encontrarás una variedad de recursos educativos y científicos que te ayudarán en tu labor docente.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {recursos.map((recurso, index) => (
              <div
                key={index}
                className="bg-white p-6 shadow-lg rounded-lg flex flex-col justify-between"
              >
                <div className="flex items-center mb-4">
                  <div className="text-teal-600 text-3xl mr-4">{recurso.icon}</div>
                  <div>
                    <h3 className="text-xl font-semibold text-teal-600">{recurso.categoria}</h3>
                    <p className="text-gray-700">{recurso.descripcion}</p>
                  </div>
                </div>
                <div>
                  {recurso.enlaces.map((enlace, idx) => (
                    <div key={idx} className="mb-2">
                      <a
                        href={enlace.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-500 underline"
                      >
                        {enlace.titulo}
                      </a>
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

export default RecursosDocentes;
