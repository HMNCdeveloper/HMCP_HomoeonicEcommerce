import LoginForm from './LoginForm'
import SignUpForm from './SignUpForm'
function AuthForm({ isLogin, setIsLogin }) {
  return (
    <div>
      {isLogin ? (
        <LoginForm isLogin={isLogin} setIsLogin={setIsLogin} />
      ) : (
        <SignUpForm isLogin={isLogin} setIsLogin={setIsLogin} />
      )}
    </div>
  )
}
export default AuthForm
