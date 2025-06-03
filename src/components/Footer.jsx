function Footer() {
  return (
    <footer className='bg-gray-800 text-white '>
      <div className='container mx-auto text-center'>
        <p className='text-sm'>
          &copy; {new Date().getFullYear()} My Website. All rights reserved.
        </p>
        <p className='text-xs mt-2'>Built with React and Tailwind CSS</p>
      </div>
    </footer>
  )
}
export default Footer
