// export default AuthPage
import AuthForm from '../components/AuthForm.jsx';

function AuthPage({ isLogin, setIsLogin ,  onClose}) {
  return (
    <div className='grid grid-cols-1 lg:grid-cols-2 h-full'>
      {/* Sección de Imagen */}
      <div className='hidden lg:block relative h-full min-h-[300px]'>
        <img
          className='absolute inset-0 w-full h-full object-cover'
          src='/Login.jpg'
          alt='Login background'
        />
      </div>

      {/* Sección de Formulario */}
      <div className='flex flex-col justify-center p-6 sm:p-8 lg:p-10'>
        <div className='mx-auto w-full max-w-md'>
          {/* Logo */}
          <div className='flex justify-center'>
            <img
              className='h-16 object-contain'
              src='/homoeonic-radionics-machines.png'
              alt='Company logo'
            />
          </div>

          {/* Titulo */}
          <h2 className='mt-6 text-center text-2xl md:text-3xl font-bold text-gray-900'>
            {isLogin ? 'Welcome Back' : 'Register Now'}
          </h2>

          {/* Formulario */}
          <div className='mt-8'>
            <AuthForm isLogin={isLogin} setIsLogin={setIsLogin} onClose={onClose}/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AuthPage;
