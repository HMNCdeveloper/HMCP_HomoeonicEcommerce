import { Navigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext.jsx';

export default function PrivateRoute({ children }) {
  const { user, loading } = useAuth();


  if (loading) {
    // Mensaje de cargando
    return <div>Cargando...</div>;
  }

  if (!user) {
    // Si ya cargó y no hay usuario, redirige a login
    return <Navigate to="/" replace />;
  }

  // Usuario autenticado, muestra children
  return children;
}
