// import AuthPage from './pages/AuthPage.jsx'
// import HomePage from './pages/HomePage.jsx'
// import Details from './pages/Details.jsx'
// // import { useState } from 'react'

// function App() {
//   // const [isLogin, setIsLogin] = useState(true) // por defecto: login
//   return <Details />
//   // return <AuthPage isLogin={isLogin} setIsLogin={setIsLogin} />
// }

// export default App


import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AuthPage from './pages/AuthPage.jsx';
import HomePage from './pages/HomePage.jsx';
import Details from './pages/Details.jsx';
import MainLayout from './layouts/MainLayout.jsx';



function App() {
  return (
    <Router>
      <Routes>
          <Route element={<MainLayout/>}>
          <Route path="/" element={<HomePage />} />
          <Route path="/product/:id" element={<Details />} />
          </Route>
        
          <Route path="/signup" element={<AuthPage isLogin={false} />} />
          <Route path="/login" element={<AuthPage isLogin={true} />} />
      </Routes>
    </Router>
  );
}

export default App;