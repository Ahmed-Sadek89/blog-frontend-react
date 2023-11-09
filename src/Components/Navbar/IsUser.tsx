import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";
import { checkLogout } from "../../assets/sweetAlert";
import { getDecodedToken } from "./getDecodedToken";

const IsUser = () => {
  const navigate = useNavigate();
  const token = Cookies.get("authorization") || "";
  const isUser = token.length > 0 ? true : false;

  let decoded = getDecodedToken(token)
  const handleLogout = () => {
    checkLogout();
  };
  return (
    <>
      {isUser === true ? (
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
      ) : (
        <li onClick={() => navigate(`/login`)}>
          <span>login</span>
        </li>
      )}
    </>
  );
};

export default IsUser;
