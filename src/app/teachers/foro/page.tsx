'use client';

import React, { useState } from 'react';
import { FaCommentAlt, FaThumbsUp, FaThumbsDown } from 'react-icons/fa';
import Header from '@/app/landingpage/header';
import Footer from '@/app/landingpage/footer';

const Foro = () => {
  // Estado para manejar las publicaciones y respuestas
  const [publicaciones, setPublicaciones] = useState([]);
  const [nuevoComentario, setNuevoComentario] = useState('');
  const [nuevoPost, setNuevoPost] = useState('');

  // Agregar una nueva publicación
  const agregarPublicacion = () => {
    if (nuevoPost) {
      const nuevaPublicacion = {
        id: Date.now(),
        contenido: nuevoPost,
        comentarios: [],
        likes: 0,
        dislikes: 0,
      };
      setPublicaciones([...publicaciones, nuevaPublicacion]);
      setNuevoPost('');
    }
  };

  // Agregar un nuevo comentario
  const agregarComentario = (id) => {
    if (nuevoComentario) {
      const nuevaPublicacion = publicaciones.map((pub) => {
        if (pub.id === id) {
          pub.comentarios.push({ id: Date.now(), contenido: nuevoComentario });
        }
        return pub;
      });
      setPublicaciones(nuevaPublicacion);
      setNuevoComentario('');
    }
  };

  // Manejo de likes y dislikes
  const manejarLike = (id) => {
    const nuevaPublicacion = publicaciones.map((pub) => {
      if (pub.id === id) {
        pub.likes += 1;
      }
      return pub;
    });
    setPublicaciones(nuevaPublicacion);
  };

  const manejarDislike = (id) => {
    const nuevaPublicacion = publicaciones.map((pub) => {
      if (pub.id === id) {
        pub.dislikes += 1;
      }
      return pub;
    });
    setPublicaciones(nuevaPublicacion);
  };

  return (
    <div className="bg-gradient-to-r from-green-400 to-blue-500 min-h-screen flex flex-col">
      {/* Header */}
      <Header />

      {/* Main Content */}
      <main className="flex-grow p-10">
        <section>
          <h2 className="text-3xl font-bold text-white mb-6">Foro de Discusión</h2>
          <p className="text-lg text-white mb-6">
            Participa en nuestra comunidad, comparte tus opiniones y aprende de otros docentes.
          </p>

          {/* Nueva Publicación */}
          <div className="bg-white p-6 mb-6 shadow-lg rounded-lg">
            <h3 className="text-xl font-semibold text-teal-600 mb-4">Crear Nueva Publicación</h3>
            <textarea
              className="w-full p-4 border-2 border-gray-300 rounded-lg mb-4"
              rows="4"
              value={nuevoPost}
              onChange={(e) => setNuevoPost(e.target.value)}
              placeholder="Escribe tu publicación aquí..."
            />
            <button
              className="bg-teal-500 text-white py-2 px-4 rounded-full hover:bg-teal-600 transition duration-300"
              onClick={agregarPublicacion}
            >
              Publicar
            </button>
          </div>

          {/* Lista de publicaciones */}
          <div>
            {publicaciones.length === 0 ? (
              <p className="text-white">No hay publicaciones aún. Sé el primero en publicar.</p>
            ) : (
              publicaciones.map((post) => (
                <div
                  key={post.id}
                  className="bg-white p-6 mb-6 shadow-lg rounded-lg flex flex-col"
                >
                  {/* Publicación principal */}
                  <div className="flex items-start mb-4">
                    <div className="text-2xl text-teal-600 mr-4">
                      <FaCommentAlt />
                    </div>
                    <div className="w-full">
                      <p className="text-lg">{post.contenido}</p>
                      <div className="flex items-center mt-4">
                        <button
                          className="flex items-center mr-4 text-teal-500"
                          onClick={() => manejarLike(post.id)}
                        >
                          <FaThumbsUp className="mr-2" />
                          {post.likes}
                        </button>
                        <button
                          className="flex items-center text-teal-500"
                          onClick={() => manejarDislike(post.id)}
                        >
                          <FaThumbsDown className="mr-2" />
                          {post.dislikes}
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Comentarios */}
                  <div className="mt-4">
                    <h4 className="text-xl font-semibold text-teal-600 mb-2">Comentarios</h4>
                    <textarea
                      className="w-full p-4 border-2 border-gray-300 rounded-lg mb-4"
                      rows="3"
                      value={nuevoComentario}
                      onChange={(e) => setNuevoComentario(e.target.value)}
                      placeholder="Escribe tu comentario..."
                    />
                    <button
                      className="bg-teal-500 text-white py-2 px-4 rounded-full hover:bg-teal-600 transition duration-300"
                      onClick={() => agregarComentario(post.id)}
                    >
                      Comentar
                    </button>
                    <div className="mt-4">
                      {post.comentarios.length === 0 ? (
                        <p className="text-gray-600">No hay comentarios aún.</p>
                      ) : (
                        post.comentarios.map((comentario) => (
                          <div
                            key={comentario.id}
                            className="bg-gray-100 p-4 mb-4 rounded-lg shadow-sm"
                          >
                            <p>{comentario.contenido}</p>
                          </div>
                        ))
                      )}
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
        </section>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Foro;
