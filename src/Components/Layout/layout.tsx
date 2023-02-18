import { Outlet } from 'react-router-dom'
import Navbar from "../navbar";
import Footer from "../footer";

const layout = () => {
  return (
    <div className='layout'>
      <header>
        <Navbar/>
      </header>
      <main>
        <Outlet />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  )
}

export default layout