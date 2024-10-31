import React from "react";

interface ToggleContainerProps {
  isSignUpActive: boolean;
  handleToggle: () => void;
}

const ToggleContainer: React.FC<ToggleContainerProps> = ({ isSignUpActive, handleToggle }) => {
  return (
    <div
      className={`absolute top-0 left-0 w-1/2 h-full bg-green-700 text-white transform transition-transform duration-700 ease-in-out ${
        isSignUpActive ? "translate-x-full" : "translate-x-0"
      }`}
    >
      <div className="flex flex-col items-center justify-center h-full text-center px-10">
        {isSignUpActive ? (
          <div className="flex flex-col items-center">
            <h1 className="text-2xl font-bold">¡Hola, Amigo!</h1>
            <p className="text-sm mb-4">Regístrate y descubre un mundo de posibilidades</p>
            <button
              onClick={handleToggle}
              className="px-6 py-2 border-2 border-white rounded-lg hover:bg-white hover:text-green-700"
            >
              Iniciar Sesión
            </button>
          </div>
        ) : (
          <div className="flex flex-col items-center">
            <h1 className="text-2xl font-bold">¡Bienvenido de Nuevo!</h1>
            <p className="text-sm mb-4">Ingresa tus datos para acceder</p>
            <button
              onClick={handleToggle}
              className="px-6 py-2 border-2 border-white rounded-lg hover:bg-white hover:text-green-700"
            >
              Crear Cuenta
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ToggleContainer;
