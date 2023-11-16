import Logo from "../../Images/logo.png";
import IsUser from "./IsUser";
import CategoryItems from "./CategoryItems";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import NavbarCollapse from "./NavbarCollapse";

const Navbar = () => {
  const navigate = useNavigate();
  const [toggleNavbar, setToggleNavbar] = useState(false)
  return (
    <>
      <div className="navbar">
        <div className="navbar-left" onClick={() => navigate(`/`)}>
          <img src={Logo} alt="navbar-logo" />
        </div>
        <div className="navbar-right">
          <CategoryItems />
          <IsUser />
        </div>
        <div className="navbar-collapse-icon" onClick={() => setToggleNavbar(prev => !prev)}>
          <img src={require('../../Images/navbar.png')} alt="navbar-collapse" width={'35px'} height={'50px'} />
        </div>
      </div>
      <NavbarCollapse toggleNavbar={toggleNavbar} />
    </>
  );
};

export default Navbar;
