import { Outlet, useLocation } from 'react-router-dom'
import Navbar from "../Navbar/navbar";
import Footer from "../footer/footer";

const layout = () => {
  const { pathname } = useLocation();
  const isLoginPage = pathname === '/login';
  const isRegisterPage = pathname === '/register';
  if ( isLoginPage || isRegisterPage ) {
    return (<main><Outlet /></main>)
  }
  return(
    <div className='layout container'>
      <header><Navbar/></header>
      <main><Outlet /></main>
      <footer><Footer /></footer>
    </div>
  )
}

export default layout