import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import Logo from '../../Images/logo.png'
import { rootState } from '../../Redux/store'

const Navbar = () => {
  const { categories: cat_name } = useSelector((state: rootState) => state.categories_get);
  const navigate = useNavigate();
  const goToCategory = (catName: string) => {
    navigate(`category/${catName}`)
  }
  // const isUser = false
  return (
    <div className='navbar'>
      <div className="navbar-left" onClick={() => navigate(`/`)}>
        <img src={Logo} alt="navbar-logo" />
      </div>
      <ul className="navbar-right">
        { // get all categories name
          cat_name.map((cat) => (
            <li key={cat} onClick={() => goToCategory(cat)}>
              <span>{cat}</span>
            </li>
          ))
        }
        <li onClick={() => navigate(`/login`)}>
          <span>login</span>
        </li>
        {/* 
          if user is logged in =>
        <li>
          <span>sadek..</span>
        </li> */}
        <li onClick={() => navigate(`/post/add`)}>
          <span>write</span>
        </li>
      </ul>
    </div>
  )
}

export default Navbar