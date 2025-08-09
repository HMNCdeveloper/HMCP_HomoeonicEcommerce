import React from 'react';
import AuthPage from '../pages/AuthPage';

function AuthModal({ isOpen, onClose, isLogin, setIsLogin }) {
  if (!isOpen) return null;

  // Función para cerrar al hacer clic fuera
  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) onClose();
  };


  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4" 
      onClick={handleOverlayClick}
    >
      <div className="relative bg-white rounded-xl shadow-xl w-full max-w-4xl overflow-hidden flex flex-col md:flex-row h-[90vh] max-h-[800px]">
        {/* Botón de cierre en esquina superior derecha */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 text-gray-500 hover:text-gray-700 rounded-full hover:bg-gray-100 transition-colors"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Contenedor del AuthPage */}
        <div className="flex-1 min-h-0 overflow-y-auto">
          <AuthPage isLogin={isLogin} setIsLogin={setIsLogin} onClose={onClose}  />
        </div>
      </div>
    </div>
  );
}

export default AuthModal;
