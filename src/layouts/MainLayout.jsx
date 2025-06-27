import Header from '../components/Header'
import Footer from '../components/Footer'


import { Outlet } from 'react-router-dom'
function MainLayout() {
  return (
  <>
       <Header />
    <main className="container mx-auto px-4 py-8">
        <Outlet />
    </main>
       <Footer />
  </>
  );
}

export default MainLayout;