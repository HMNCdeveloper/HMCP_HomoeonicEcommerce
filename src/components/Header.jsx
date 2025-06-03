function Header() {
  return (
    <header>
      <h1 className='text-2xl font-bold'>Homoeonic</h1>
      <nav className='mt-2'>
        <ul className='flex space-x-4'>
          <li>
            <a href='#home' className='hover:underline'>
              Productos
            </a>
          </li>
          <li>
            <a href='#about' className='hover:underline'>
              Nosotros
            </a>
          </li>
          <li>
            <a href='#contact' className='hover:underline'>
              Contacto
            </a>
          </li>
          <li>
            <a href='#contact' className='hover:underline'>
              Login
            </a>
            <a href='#contact' className='hover:underline'>
              Sign Up
            </a>
          </li>
        </ul>
      </nav>
    </header>
  )
}
export default Header
