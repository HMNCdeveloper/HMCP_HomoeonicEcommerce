import { useState } from 'react';
import { useAuth } from '../context/AuthContext';

 export function useLogin() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [response, setResponse] = useState(null);
  const { loginUser } = useAuth();

  const fetchUser = async (accessToken) => {
    try {
      const res = await fetch(`${import.meta.env.VITE_API_HMCP}users/me/`, {
        method: 'GET',
        headers: {
          "Authorization": `Bearer ${accessToken}`,
          "Content-Type": "application/json",
        }
      });
      if (!res.ok) {
        throw new Error('Error al obtener la información del usuario');
      }

      const userData = await res.json();
      sessionStorage.setItem('InfoUser', JSON.stringify(userData));

      console.log(userData)
      return userData;
    } catch (err) {
      setError(err.message);
      console.error('Error fetching user data:', err);
      return null;
    }
  };

  const login = async ({ email, password }) => {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch(`${import.meta.env.VITE_API_HMCP}token/`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      if (!res.ok) {
        const errorData = await res.json();
        throw new Error(errorData.message || 'Error al iniciar sesión');
      }

      const data = await res.json();
      
      const userInfo = await fetchUser(data.access);
      loginUser(userInfo);
      setResponse(data);
      return { tokens: data, user: userInfo };
    } catch (err) {
      setError(err.message);
      return null;
    } finally {
      setLoading(false);
    }
  };

  return { login, loading, error, response };
}
