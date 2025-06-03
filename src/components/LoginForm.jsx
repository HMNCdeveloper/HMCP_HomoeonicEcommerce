import { useState } from 'react'
function LoginForm({ isLogin, setIsLogin }) {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  })

  const handleChange = e => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = e => {
    e.preventDefault()
  }

  return (
    <div>
      <form className='space-y-6 mt-8' onSubmit={handleSubmit}>
        <div>
          <label htmlFor='email' className='block text-sm font-medium text-gray-900'>
            Email address
          </label>
          <input
            type='email'
            name='email'
            autoComplete='email'
            value={formData.email}
            onChange={handleChange}
            required
            className='mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 text-base text-gray-900 placeholder-gray-400 focus:border-yellow-500 focus:ring-yellow-500 sm:text-sm'
            placeholder='you@example.com'
          />
        </div>

        <div>
          <label htmlFor='password' className='block text-sm font-medium text-gray-900'>
            Password
          </label>
          <input
            type='password'
            name='password'
            value={formData.password}
            onChange={handleChange}
            autoComplete='current-password'
            required
            className='mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 text-base text-gray-900 placeholder-gray-400 focus:border-yellow-500 focus:ring-yellow-500 sm:text-sm'
            placeholder='••••••••'
          />
        </div>

        <div>
          <button
            type='submit'
            className='flex w-full justify-center rounded-md bg-yellow-500 px-4 py-2 text-sm font-semibold text-white shadow hover:bg-yellow-400 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-offset-2 transition-colors'
          >
            Login
          </button>
        </div>
      </form>

      <div className='mt-4 text-sm text-center'>
        <a
          href='#'
          className='font-semibold text-yellow-600 hover:text-yellow-500 transition-colors'
        >
          Forgot your account?
        </a>

        <p className='mt-6 text-center text-sm text-gray-500'>
          New here?{' '}
          <a
            href=''
            onClick={e => {
              e.preventDefault()
              setIsLogin(!isLogin)
            }}
            className='font-semibold text-yellow-600 hover:text-yellow-500 transition-colors'
          >
            Create an account
          </a>
        </p>
      </div>
    </div>
  )
}

export default LoginForm
