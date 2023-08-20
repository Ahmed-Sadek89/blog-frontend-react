import { useRef, useState, useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import Cookies from 'js-cookie';
import { useNavigate } from "react-router-dom"
import { AppDispatch, rootState } from "../../Redux/store";
import { user_login } from '../../Redux/Slices/async_slices/login.slice';
import { userLogin } from '../../Types/types';

const Login = () => {
  const dispatch = useDispatch<AppDispatch>()
  const navigate = useNavigate();

  const inputRef = useRef<HTMLInputElement>(null);
  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  const [loginData, setLoginData] = useState({
    email: "",
    password: ""
  })

  const { data, loading, error } = useSelector((state: rootState) => state.user_login_state);

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await dispatch(user_login(loginData))
      .then(({ payload }) => {
        const { status, token } = payload as userLogin;
        if ( status === 200 ) {
          Cookies.set('authorization', token || '')
          navigate('/')
        }
      })
  }
  return (
    <>
      <form onSubmit={handleLogin} encType='multipart/form-data'>
        <input
          type='email'
          placeholder='email'
          ref={inputRef}
          required
          disabled={loading}
          value={loginData.email}
          onChange={(e) => {
            setLoginData(prev => {
              return {
                ...prev,
                email: e.target.value
              }
            })
          }}
        />
        <input
          type='password'
          placeholder='password'
          required
          autoComplete="off"
          disabled={loading}
          value={loginData.password}
          onChange={(e) => {
            setLoginData(prev => {
              return {
                ...prev,
                password: e.target.value
              }
            })
          }}
        />
        <button type='submit' disabled={loading}>Login</button>
        <p>
          <span>Don't have an account?</span>
          <span onClick={() => navigate('/register')}>Register</span>
        </p>
      </form>
      {
        error === true &&
        <span className='user-content-error'>{data.result}</span>
      }
    </>
  )
}

export default Login