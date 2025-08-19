// import { createContext, useContext, useEffect, useState } from 'react';

// const AuthContext = createContext();

// export function AuthProvider({ children }) {
//   const [user, setUser] = useState(null);

//   useEffect(() => {
//     const storedUser = sessionStorage.getItem('InfoUser');
//     if (storedUser) {
//       setUser(JSON.parse(storedUser));
//     }
//   }, []);

//   const loginUser = (userData) => {
//     sessionStorage.setItem('InfoUser', JSON.stringify(userData));
//     setUser(userData);
//   };

//   const logoutUser = () => {
//     sessionStorage.removeItem('InfoUser');
//     setUser(null);
//   };

//   return (
//     <AuthContext.Provider value={{ user, loginUser, logoutUser }}>
//       {children}
//     </AuthContext.Provider>
//   );
// }

// export function useAuth() {
//   return useContext(AuthContext);
// }


import { createContext, useContext, useEffect, useState } from 'react';

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true); // <-- estado loading

  useEffect(() => {
    try {
      const storedUser = sessionStorage.getItem('InfoUser');
      if (storedUser && storedUser !== 'undefined') {
        setUser(JSON.parse(storedUser));
      } else {
        setUser(null);
      }
    } catch (error) {
      console.error('Error parsing stored user:', error);
      setUser(null);
    }
    setLoading(false);
  }, []);

  const loginUser = (userData) => {
    sessionStorage.setItem('InfoUser', JSON.stringify(userData));
    setUser(userData);
  };

  const logoutUser = () => {
    sessionStorage.removeItem('InfoUser');
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, loginUser, logoutUser, loading }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
