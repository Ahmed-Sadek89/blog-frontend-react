import { useNavigate } from "react-router-dom"

const Login = () => {
  const navigate = useNavigate();
  return (
    <>
      <input type='text' placeholder='username' />
      <input type='password' placeholder='password' />
      <button onClick={() => navigate('/')}>Login</button>
      <p>
        <span>Don't have an account?</span>
        <span onClick={() => navigate('/register')}>Register</span>
      </p>
    </>
  )
}

export default Login