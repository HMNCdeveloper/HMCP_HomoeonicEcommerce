import LoginForm from './LoginForm'
import SignUpForm from './SignUpForm'
function AuthForm({ isLogin, setIsLogin, onClose }) {
  return (
    <div>
      {isLogin ? (
        <LoginForm isLogin={isLogin} setIsLogin={setIsLogin}  onClose={onClose}/>
      ) : (
        <SignUpForm isLogin={isLogin} setIsLogin={setIsLogin}  onClose={onClose}/>
      )}
    </div>
  )
}
export default AuthForm
