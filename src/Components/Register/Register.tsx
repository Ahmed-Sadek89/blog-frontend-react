import { useRef, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { AppDispatch, rootState } from '../../Redux/store'
import { user_register } from '../../Redux/Slices/async_slices/register.slice'
import { userRegister } from '../../Types/types'

const Register = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();

  const inputRef = useRef<HTMLInputElement>(null);
  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  const { loading, error, data } = useSelector((state: rootState) => state.user_register);

  const [registeredData, setRegisteredData] = useState({
    username: "",
    email: "",
    password: "",
  })
  const [image, setImage] = useState<File | null>(null);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setImage(e.target.files[0]);
    }
  }
  
  const handleRegister = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('username', registeredData.username)
    formData.append('email', registeredData.email)
    formData.append('password', registeredData.password)
    formData.append('image', image as File)
    await dispatch(user_register(formData))
    .then(({payload}) => {
      let res = payload as userRegister
      if ( res.status === 200 ) {
        navigate('/login')
      }
    })
  }
  return (
    <>
      <form onSubmit={handleRegister} encType='multipart/form-data'>
        <input
          type='text'
          placeholder='username'
          required
          disabled={loading}
          ref={inputRef}
          value={registeredData.username}
          onChange={(e) => {
            setRegisteredData(prev => {
              return {
                ...prev,
                username: e.target.value
              }
            })
          }}
        />
        <input
          type='email'
          placeholder='email'
          required
          disabled={loading}
          value={registeredData.email}
          onChange={(e) => {
            setRegisteredData(prev => {
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
          autoComplete='off'
          disabled={loading}
          value={registeredData.password}
          onChange={(e) => {
            setRegisteredData(prev => {
              return {
                ...prev,
                password: e.target.value
              }
            })
          }}
        />
        <input
          type='file'
          required
          disabled={loading}
          onChange={handleImageChange}
        />
        <button type='submit' disabled={loading}>Register</button>
        <p>
          <span>Do you have account?</span>
          <span onClick={() => navigate('/login')}>Login</span>
        </p>
      </form>
      {
        error === true &&
        <span className='user-content-error'>{data.result}</span>
      }
    </>
  )
}

export default Register