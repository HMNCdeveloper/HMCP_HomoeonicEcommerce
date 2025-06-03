import { useState } from 'react'

const RegisterForm = ({ isLogin, setIsLogin }) => {
  const [step, setStep] = useState(1)
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    phoneNumber: '',
    address1: '',
    address2: '',
    city: '',
    ZIPcode: '',
  })

  const handleChange = e => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleNext = () => {
    if (
      !formData.firstName ||
      !formData.lastName ||
      !formData.email ||
      !formData.password ||
      !formData.confirmPassword
    ) {
      alert('Please fill in all fields in Step 1')
      return
    }
    if (formData.password !== formData.confirmPassword) {
      alert('Passwords do not match')
      return
    }
    setStep(2)
  }

  const handleBack = () => setStep(1)

  const handleSubmit = e => {
    e.preventDefault()
    // Aquí puedes hacer validaciones adicionales si lo deseas
    console.log('Registrando usuario:', formData)
    alert('Registro exitoso (simulado)')
  }

  return (
    <form onSubmit={handleSubmit} className='space-y-6 mt-8'>
      {step === 1 && (
        <>
          <h2 className='text-xl font-bold text-gray-900'>Step 1: Personal Info</h2>

          <input
            type='text'
            name='firstName'
            value={formData.firstName}
            onChange={handleChange}
            placeholder='First Name'
            required
            className='block w-full border rounded px-3 py-2'
          />

          <input
            type='text'
            name='lastName'
            value={formData.lastName}
            onChange={handleChange}
            placeholder='Last Name'
            required
            className='block w-full border rounded px-3 py-2'
          />

          <input
            type='email'
            name='email'
            value={formData.email}
            onChange={handleChange}
            placeholder='Email'
            required
            className='block w-full border rounded px-3 py-2'
          />

          <input
            type='password'
            name='password'
            value={formData.password}
            onChange={handleChange}
            placeholder='Password'
            required
            className='block w-full border rounded px-3 py-2'
          />

          <input
            type='password'
            name='confirmPassword'
            value={formData.confirmPassword}
            onChange={handleChange}
            placeholder='Confirm Password'
            required
            className='block w-full border rounded px-3 py-2'
          />
          <a
            href='#'
            onClick={e => {
              e.preventDefault()
              setIsLogin(!isLogin)
            }}
            className='font-semibold text-yellow-600 hover:text-yellow-500 transition-colors'
          >
            Have an account? Login
          </a>

          <div className='flex justify-end'>
            <button
              type='button'
              onClick={handleNext}
              className='bg-yellow-500 text-white py-2 px-4 rounded'
            >
              Next
            </button>
          </div>
        </>
      )}

      {step === 2 && (
        <>
          <h2 className='text-xl font-bold text-gray-900'>Step 2: Contact Info</h2>

          <input
            type='text'
            name='phoneNumber'
            value={formData.phoneNumber}
            onChange={handleChange}
            placeholder='Phone Number'
            required
            className='block w-full border rounded px-3 py-2'
          />

          <input
            type='text'
            name='address1'
            value={formData.address1}
            onChange={handleChange}
            placeholder='Address 1'
            required
            className='block w-full border rounded px-3 py-2'
          />

          <input
            type='text'
            name='address2'
            value={formData.address2}
            onChange={handleChange}
            placeholder='Address 2'
            className='block w-full border rounded px-3 py-2'
          />

          <input
            type='text'
            name='city'
            value={formData.city}
            onChange={handleChange}
            placeholder='City'
            required
            className='block w-full border rounded px-3 py-2'
          />

          <input
            type='text'
            name='ZIPcode'
            value={formData.ZIPcode}
            onChange={handleChange}
            placeholder='ZIP Code'
            required
            className='block w-full border rounded px-3 py-2'
          />

          <div className='flex justify-between mt-4'>
            <button type='button' onClick={handleBack} className='text-gray-600 underline'>
              Back
            </button>

            <button type='submit' className='bg-yellow-500 text-white py-2 px-4 rounded'>
              Sign Up
            </button>
          </div>
        </>
      )}
    </form>
  )
}

export default RegisterForm
