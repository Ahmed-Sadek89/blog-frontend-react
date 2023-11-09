import Logo from "../../Images/logo.png";
import IsUser from "./IsUser";
import CategoryItems from "./CategoryItems";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <div className="navbar">
      <div className="navbar-left" onClick={() => navigate(`/`)}>
        <img src={Logo} alt="navbar-logo" />
      </div>
      <ul className="navbar-right">
        <CategoryItems />
        <IsUser />
      </ul>
    </div>
  );
};

export default Navbar;
