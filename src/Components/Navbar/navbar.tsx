import { useSelector } from 'react-redux';
import jwt_decode from "jwt-decode";
import { useNavigate } from 'react-router-dom'
import Logo from '../../Images/logo.png'
import { rootState } from '../../Redux/store'
import Cookies from 'js-cookie'
import { checkLogout } from '../../assets/sweetAlert'
import jwtDecode from 'jwt-decode';

const Navbar = () => {
  const { data, loading, error } = useSelector((state: rootState) => state.categories_getAll);
  const navigate = useNavigate();
  const goToCategory = (catName: string) => {
    navigate(`category/${catName}`)
  }
  const token = Cookies.get('authorization') || '';
  const isUser = token.length > 0 ? true : false;

  let decoded = {
    email: ''
  }
  try {
    decoded = jwtDecode(token);
  } catch (error) {
    // console.log('JWT decoding error:', error);
    decoded.email = ''
  }
  const handleLogout = () => {
    checkLogout()
  }
  return (
    <div className='navbar'>
      <div className="navbar-left" onClick={() => navigate(`/`)}>
        <img src={Logo} alt="navbar-logo" />
      </div>
      <ul className="navbar-right">
        {
          (loading === false && data.status === 200) &&
          data.result.map((index) => (
            <li key={index.id} onClick={() => goToCategory(index.cat_name)}>
              <span>{index.cat_name}</span>
            </li>
          ))
        }
        {
          (loading === true) &&
          <li>
            <span>loading...</span>
          </li>
        }
        {
          (error === true) &&
          <li>
            <span>no categories || something went wrong...</span>
          </li>
        }
        {
          isUser === true ?
            <>
              <li>
                <span>{decoded?.email}</span>
              </li>
              <li onClick={() => navigate(`/write`)}>
                <span>write</span>
              </li>
              <li onClick={handleLogout}>
                <span>logout</span>
              </li>
            </>
            :
            <li onClick={() => navigate(`/login`)}>
              <span>login</span>
            </li>
        }
      </ul>
    </div>
  )
}

export default Navbar