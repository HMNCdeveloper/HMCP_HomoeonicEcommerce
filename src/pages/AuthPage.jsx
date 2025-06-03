import AuthForm from '../components/AuthForm.jsx'

// AuthPage Permite a auttenticacion de usuarios, tanto para login como para registro
function AuthPage({ isLogin, setIsLogin }) {
  return (
    <div className='grid grid-cols-1 lg:grid-cols-2 min-h-[75vh] bg-white shadow-xl '>
      <div className='relative '>
        <img
          className='absolute inset-0 w-full h-full object-cover rounded-l-md '
          src='/Login.jpg'
          alt='pexels-cristian-rojas-8391374'
        />
      </div>
      <div className='flex items-center justify-center px-4 py-8 lg:px-8 '>
        <div className='sm:w-full sm:max-w-sm'>
          <img
            className='mx-auto max-w-xs h-auto'
            src='/homoeonic-radionics-machines.png'
            alt='homeonic-radionics'
          />
          <h2 className='mt-6 text-center text-3xl font-bold text-gray-900'>
            {isLogin ? 'Welcome Back' : 'Register Now'}
          </h2>

          <AuthForm isLogin={isLogin} setIsLogin={setIsLogin} />
        </div>
      </div>
    </div>
  )
}
export default AuthPage

// NOTAS:
// Se esta realizando el registro en 2 pasos, se esta mirando como implementar serachParams para enviar parametros a traves de la URL
// se necesita probar que ambos formularios funcionen correctamente, tanto el de login como el de registro
