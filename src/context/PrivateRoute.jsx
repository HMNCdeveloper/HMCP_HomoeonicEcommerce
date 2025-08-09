// import { Navigate } from 'react-router-dom';
// import { useAuth } from './AuthContext.jsx';

// function PrivateRoute({ children }) {
//   const { user } = useAuth();
//     console.log('PrivateRoute user:', user);
//   if (!user) {
//     // Si no hay usuario logueado, redirige a login
//     return <Navigate to="/" replace />;
//   }

//   // Si hay usuario, renderiza los hijos (el componente protegido)
//   return children;
// }

// export default PrivateRoute;


import { Navigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext.jsx';

export default function PrivateRoute({ children }) {
  const { user, loading } = useAuth();


  if (loading) {
    // Mientras carga, muestra algo o nada (puede ser spinner)
    return <div>Cargando...</div>;
  }

  if (!user) {
    // Si ya cargó y no hay usuario, redirige a login
    return <Navigate to="/" replace />;
  }

  // Usuario autenticado, muestra children
  return children;
}
