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
          <a id="email" >
            {decoded?.email}
          </a>
          <a onClick={() => navigate(`/write`)} id="write">
            write
          </a>
          <a onClick={handleLogout} id="logout">
            logout
          </a>
        </>
      ) : (
        <a onClick={() => navigate(`/login`)} id="login">
          login
        </a>
      )}
    </>
  );
};

export default IsUser;
