import { useState } from 'react'

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const navLinks = [
    { href: '#home', label: 'Products' },
    { href: '#about', label: 'About Us' },
    { href: '#contact', label: 'Contact' },
    { href: '#login', label: 'Login' },
    { href: '#signup', label: 'Sign Up' },
  ]

  return (
    // Nav de Navegacion, incluye un login y sign up
    <header className='sticky top-0 z-50'>
      <div className='container mx-auto px-4 py-4 flex justify-between items-center'>
        <a href='#/' className='flex items-center focus:outline-none '>
          <img className='h-26 w-64 ml-0 md:ml-5' src='/homoeonic-radionics-machines.png' />
        </a>
        <nav aria-label='Primary navigation'>
          <ul className='hidden md:flex space-x-8'>
            {navLinks.map((link, index) => (
              <li key={index}>
                <a
                  href={link.href}
                  className=' transition-colors duration-200 focus:outline-none focus:[box-shadow:0_0_0_3px_#1F7A8C50] focus:rounded hover:[color:#1F7A8C] hover:font-bold [color:#1F7A8C] '
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        {/* Este boton solo implementa el menu en los dispositivos moviles. */}
        <button
          onClick={toggleMenu}
          aria-label='Toggle menu'
          aria-expanded={isMenuOpen}
          aria-controls='mobile-menu'
          className='md:hidden p-2 rounded focus:outline-none focus:ring-2 focus:ring-yellow-500'
        >
          <svg className='w-6 h-6' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
            {isMenuOpen ? (
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M6 18L18 6M6 6l12 12'
              />
            ) : (
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M4 6h16M4 12h16M4 18h16'
              />
            )}
          </svg>
        </button>
        {/*  Menu desplegable para dispositivos moviles  */}
        {isMenuOpen && (
          <aside
            id='mobile-menu'
            className='md:hidden absolute top-24 left-0 right-0 bg-white shadow-lg py-4 px-4 '
            aria-label='Mobile menu'
          >
            <nav aria-label='Mobile navigation'>
              <ul className='flex flex-col space-y-4'>
                {navLinks.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      className='block text-gray-700 hover:text-pink-600 transition-colors
                        duration-200 py-2 focus:outline-none focus:ring-2 focus:ring-pink-600 focus:rounded'
                      onClick={toggleMenu}
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </aside>
        )}
        {/* Termina la implementacion del menu desplegable en moviles */}
      </div>
    </header>
  )
}

export default Header
