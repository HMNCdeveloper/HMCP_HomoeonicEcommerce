import { useEffect, useState } from 'react';
import { useSelector , useDispatch} from 'react-redux';
import iconCart from '../assets/iconCart.png';
import { Link, useLocation } from 'react-router-dom';
import { toggleCart } from '../stores/cart';
function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const carts = useSelector((state) => state.cart.items);
  const location = useLocation();
  const dispatch = useDispatch();
  // Actualizar ancho de ventana para responsividad
  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Cerrar menú al cambiar ruta o al aumentar el tamaño de pantalla
  useEffect(() => {
    if (windowWidth >= 768 || location.pathname !== location.pathname) {
      setIsMenuOpen(false);
    }
  }, [location, windowWidth]);

  // Calcular cantidad total en carrito
  const totalQuantity = carts.reduce((acc, item) => acc + item.quantity, 0);

  const navLinks = [
    { to: '/', label: 'Products' },
    { to: '/about', label: 'About Us' },
    { to: '/contact', label: 'Contact' },
    { to: '/login', label: 'Login' },
    { to: '/signup', label: 'Sign Up' },
  ];

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const handleOpenCartTab = () => {
    dispatch(toggleCart())
  }

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : 'auto';
    return () => document.body.style.overflow = 'auto';
  }, [isMenuOpen]);

  return (
    <>
      {/* Header  */}
      <header className="sticky top-0 z-40 bg-white/90 backdrop-blur-sm shadow-sm border-b border-gray-100">
        <div className="container mx-auto px-4 sm:px-6 py-3 flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex-shrink-0">
            <img 
              className="h-12 md:h-14 transition-transform duration-200 hover:scale-105" 
              src="/homoeonic-radionics-machines.png" 
              alt="Company Logo"
            />
          </Link>

          <div className="flex items-center gap-4 md:gap-6">
            {/*Menu desktop*/}
            <nav className="hidden md:block">
              <ul className="flex flex-wrap gap-x-2 gap-y-1 max-w-[600px] justify-end">
                {navLinks.map((link) => (
                  <li key={link.to}>
                    <Link
                      to={link.to}
                      className="px-3 py-1.5 text-[#1F7A8C] text-sm md:text-base font-medium rounded-md hover:bg-[#1F7A8C]/10 transition-all
                      border-b-2 border-transparent hover:border-[#1F7A8C]/50"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            {/* Carrito */}
            <div className="relative group">
              <div className="w-9 h-9 md:w-10 md:h-10 rounded-full flex items-center justify-center bg-gray-100 hover:bg-gray-200 transition-colors cursor-pointer relative" onClick={handleOpenCartTab}>
                <img src={iconCart} alt="Cart" className="w-4 md:w-5" />
                {totalQuantity > 0 && (
                  <span className="absolute -top-1.5 -right-1.5 bg-red-500 text-white text-xs font-bold w-5 h-5 rounded-full flex justify-center items-center scale-90 group-hover:scale-100 transition-transform">
                    {totalQuantity}
                  </span>
                )}
              </div>
            </div>

            {/* Menu Movil*/}
            <button
              onClick={toggleMenu}
              aria-label="Toggle menu"
              aria-expanded={isMenuOpen}
              className="md:hidden p-1.5 rounded-md focus:outline-none focus:ring-2 focus:ring-[#1F7A8C] focus:ring-opacity-50"
            >
              <svg className="w-6 h-6 text-[#1F7A8C]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </header>

      {/* Menú  */}
      <div className={`fixed inset-0 z-50 ${isMenuOpen ? 'visible' : 'invisible'}`}>
        {/* Overlay con transición */}
        <div 
          onClick={toggleMenu}
          className={`absolute inset-0 bg-black/50 backdrop-blur-sm transition-opacity duration-300 ${isMenuOpen ? 'opacity-100' : 'opacity-0'}`}
        />
        
        {/* Panel deslizable */}
        <div 
          className={`absolute top-0 right-0 h-full w-64 bg-white shadow-xl transition-transform duration-300 ease-out ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}
        >
          {/* Cabecera con botón de cierre */}
          <div className="px-4 py-3 border-b border-gray-200 flex justify-between items-center sticky top-0 bg-white">
            <span className="text-lg font-semibold text-[#1F7A8C]">Menú</span>
            <button 
              onClick={toggleMenu}
              className="p-1 rounded-full hover:bg-gray-100"
              aria-label="Close menu"
            >
              <svg className="w-6 h-6 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          
          {/* Contenido */}
          <div className="h-[calc(100%-60px)] overflow-y-auto pb-4">
            <nav className="px-4 py-2">
              <ul className="space-y-1">
                {navLinks.map((link) => (
                  <li key={link.to}>
                    <Link
                      to={link.to}
                      onClick={toggleMenu}
                      className="block px-4 py-2.5 text-gray-700 hover:text-[#1F7A8C] font-medium hover:bg-[#1F7A8C]/5 rounded-md transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
