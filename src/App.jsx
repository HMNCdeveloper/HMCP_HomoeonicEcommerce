import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AuthPage from './pages/AuthPage.jsx';
import HomePage from './pages/HomePage.jsx';
import Details from './pages/Details.jsx';
import MainLayout from './layouts/MainLayout.jsx';
import ScrollToTop from './components/common/ScrollToTop.jsx';
import { AuthProvider } from './context/AuthContext.jsx';
import PrivacyPolicy from './pages/PrivacyPolicy.jsx';
import TermsAndConditions from './pages/TermsAndConditions.jsx';
import LegalNotice from './pages/LegalNotice.jsx';
import Perfil from './components/profile.jsx';
import PrivateRoute from './context/PrivateRoute.jsx';
import RecoveryPassword from './pages/RecoveryPassword.jsx';
import ResetPassword from './pages/ResetPassword';
import Testimonials from './pages/Testimonials.jsx';
import AboutUs from './components/AboutUs.jsx';
import { useFetch } from './hooks/useFetch.jsx';

function App() {
  const {data}= useFetch('products/')
  return (
    <AuthProvider>
    <Router>
      <ScrollToTop />
      <Routes>
          <Route element={<MainLayout/>}>
          <Route path="/" element={<HomePage />} />
          <Route path="/product/:id" element={<Details productData={data} />} />
          {/* <Route path="/profile" element={<Perfil />}  /> */}
          <Route path="/profile" element={
                <PrivateRoute>
                  <Perfil />
                </PrivateRoute>
              }
            />
          <Route path='/recovery-password' element={<RecoveryPassword/>}/>
          <Route path='/reset-password' element={<ResetPassword/>} />
          <Route path="/testimonials" element={<Testimonials />} />
          <Route path="/about-us" element={<AboutUs/>} />
          <Route path="/privacidad" element={<PrivacyPolicy />} />
          <Route path="/terminos" element={<TermsAndConditions />} />
          <Route path="/aviso-legal" element={<LegalNotice />} />
          </Route>
        
          <Route path="/signup" element={<AuthPage isLogin={false} />} />
          <Route path="/login" element={<AuthPage isLogin={true} />} />
          
      </Routes>
    </Router>
    </AuthProvider>
  );
}

export default App;