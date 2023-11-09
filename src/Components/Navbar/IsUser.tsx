import Cookies from "js-cookie";
import { checkLogout } from "../../assets/sweetAlert";
import { getDecodedToken } from "../../assets/getDecodedToken";
import { useNavigate } from "react-router-dom";

const IsUser = () => {
  const token = Cookies.get("authorization") || "";
  const isUser = token.length > 0 ? true : false;
  const navigate = useNavigate()
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
