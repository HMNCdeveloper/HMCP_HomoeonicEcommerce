function ContactUs() {
  return (
    <div className='border-r-stone-800 shadow-md p-6 bg-white rounded-lg max-w-md mx-auto mt-10'>
      <h1 className='text-2xl font-bold text-gray-900 mb-4'>Contact Us</h1>
      <form action='submit'>
        <label htmlFor='name' className='block text-sm font-medium text-gray-900'>
          {' '}
          name
        </label>
        <input
          type='text'
          name='name'
          className='mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 text-base text-gray-900 placeholder-gray-400 focus:border-yellow-500 focus:ring-yellow-500 sm:text-sm'
          placeholder='Your Name'
          required
        />
        <label htmlFor='email' className='block text-sm font-medium text-gray-900 mt-4'>
          Email
        </label>
        <input
          type='email'
          placeholder='Your email here!'
          name='email'
          required
          className='mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 text-base text-gray-900 placeholder-gray-400 focus:border-yellow-500 focus:ring-yellow-500 sm:text-sm'
        />
      </form>
    </div>
  )
}
export default ContactUs
