import { FaBuilding, FaFacebookF, FaInstagram, FaTwitter, FaWhatsapp } from 'react-icons/fa'
import { MdAccessTime, MdEmail, MdLocationOn, MdPhone } from 'react-icons/md'

function Footer() {
  const socialLinks = [
    { icon: <FaFacebookF className='text-lg' />, label: 'Facebook', href: '#' },
    { icon: <FaTwitter className='text-lg' />, label: 'Twitter', href: '#' },
    { icon: <FaInstagram className='text-lg' />, label: 'Instagram', href: '#' },
    { icon: <FaWhatsapp className='text-lg' />, label: 'Whatsapp', href: '#' },
  ]

  const quickLinks = [
    { text: 'Home', href: '#' },
    { text: 'About Us', href: '#about' },
    { text: 'Our Services', href: '#services' },
    { text: 'Contact Us', href: '#contact' },
  ]

  const contactInfo = [
    {
      icon: <MdLocationOn className='text-white text-xl mt-1 mr-4 flex-shrink-0' />,
      content: (
        <a href='#' className='text-gray-400 font-bold hover:text-yellow-500 transition'>
          Baja California,
          Mexico
        </a>
      ),
    },
    {
      icon: <MdPhone className='text-white text-xl mt-1 mr-4 flex-shrink-0' />,
      content: (
        <a href='#' className='text-gray-400 font-bold hover:text-yellow-500 transition'>
          Call us: +52-664-594-9244
        </a>
      ),
    },
    {
      icon: <MdAccessTime className='text-white text-xl mt-1 mr-4 flex-shrink-0' />,
      content: (
        <a href='#' className='text-gray-400 font-bold hover:text-yellow-500 transition'>
          Sun-Thu: 9:00 AM - 5:00 PM
        </a>
      ),
    },
    {
      icon: <MdEmail className='text-white text-xl mt-1 mr-4 flex-shrink-0' />,
      content: (
        <a href='#' className='text-gray-400 font-bold hover:text-yellow-500 transition'>
          Email us: info@homoeonic.com
        </a>
      ),
    },
  ]

  const legalLinks = [
    { href: '#', text: 'Privacy Policy' },
    { href: '#', text: 'Terms of Service' },
    { href: '#', text: 'Cookie Policy' },
  ]

  return (
    <footer className='bg-black text-white pt-16 pb-8'>
      <div className='container mx-auto px-4'>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12'>
          {/* Empresa e íconos sociales */}
          <section className='md:col-span-2'>
            <div className='flex items-center mb-4'>
              <FaBuilding className='text-3xl text-white mr-3' aria-hidden='true' />
              <h2 className='text-xl font-bold'>HOMOEONIC</h2>
            </div>
            <p className='text-gray-400 mb-6'>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum accusantium officiis
              est earum aspernatur inventore rem dolorem eveniet odio totam, tempore ex iusto iste
              exercitationem incidunt quisquam numquam vero voluptatem?
            </p>
            <nav aria-label='Social media links'>
              <ul className='flex space-x-4'>
                {socialLinks.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      className='text-gray-400 hover:text-yellow-500 transition-colors'
                      aria-label={link.label}
                    >
                      {link.icon}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </section>

          {/* Quick Links */}
          <section>
            <h3 className="text-lg font-bold mb-6 relative pb-2 after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-12 after:h-1 after:bg-yellow-500">
              Quick Links
            </h3>
            <nav aria-label='Quick links'>
              <ul className='space-y-3'>
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      className='text-gray-400 hover:text-yellow-500 transition-colors'
                    >
                      {link.text}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </section>

          {/* Contacto */}
          <address className='not-italic'>
            <h3 className="text-xl font-bold mb-6 relative pb-2 after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-12 after:h-1 after:bg-yellow-500">
              Contact Us
            </h3>
            <ul className='space-y-4'>
              {contactInfo.map((info, index) => (
                <li key={index} className='flex items-start'>
                  {info.icon}
                  <span className='text-gray-400 hover:text-yellow-500 transition-colors'>
                    {info.content}
                  </span>
                </li>
              ))}
            </ul>
          </address>
        </div>
        {/* Barra inferior */}
        <div className='pt-8 mt-8 border-t border-gray-700 flex flex-col md:flex-row justify-between items-center'>
          <p className='text-gray-400 text-sm mb-4 md:mb-0'>
            &copy; {new Date().getUTCFullYear()} HOMOEONIC. All rights reserved.
          </p>
          <nav aria-label='Legal links'>
            <ul className='flex space-x-6'>
              {legalLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className='text-gray-400 hover:text-yellow-500 transition-colors'
                  >
                    {link.text}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </footer>
  )
}

export default Footer
