// @ts-nocheck
import React from 'react';
import { Accordion, AccordionItem, AccordionHeader, AccordionPanel } from '@/components/Accordion';
import { Plus } from 'lucide-react';

const NosotrosSection: React.FC = () => (
  <section id="nosotros" className="bg-green-500 p-10 text-white">
    <h2 className="text-3xl font-bold mb-6 text-center">Sobre Nosotros</h2>
    <p className="text-center mb-8">
      Conoce más sobre nuestra misión, visión y el equipo que hace posible esta plataforma educativa.
    </p>
    <div className="max-w-2xl mx-auto bg-white p-6 rounded-lg shadow-lg text-green-700">
      <Accordion defaultValue={['mission']} multiple>
        {/* Misión */}
        <AccordionItem value="mission">
          <AccordionHeader icon={<Plus />}>Nuestra Misión</AccordionHeader>
          <AccordionPanel>
            <p>
              Nuestra misión es proporcionar acceso equitativo a recursos educativos de calidad para estudiantes y profesores, fomentando el aprendizaje y la colaboración.
            </p>
          </AccordionPanel>
        </AccordionItem>

        {/* Visión */}
        <AccordionItem value="vision">
          <AccordionHeader icon={<Plus />}>Nuestra Visión</AccordionHeader>
          <AccordionPanel>
            <p>
              Visualizamos un futuro donde la educación de calidad esté al alcance de todos, potenciando el desarrollo personal y profesional a través de herramientas digitales innovadoras.
            </p>
          </AccordionPanel>
        </AccordionItem>

        {/* Equipo */}
        <AccordionItem value="team">
          <AccordionHeader icon={<Plus />}>Nuestro Equipo</AccordionHeader>
          <AccordionPanel>
            <p>
              Contamos con un equipo comprometido de educadores, desarrolladores y especialistas en tecnología educativa que trabajan juntos para construir una experiencia de aprendizaje inclusiva y efectiva.
            </p>
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    </div>
  </section>
);

export default NosotrosSection;
