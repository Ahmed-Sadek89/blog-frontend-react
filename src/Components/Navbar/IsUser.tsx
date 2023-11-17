import Cookies from "js-cookie";
import { checkLogout } from "../../assets/sweetAlert";
import { getDecodedToken } from "../../assets/getDecodedToken";
import { useNavigate } from "react-router-dom";
import React from "react";

type props = {
  setToggleNavbar: React.Dispatch<React.SetStateAction<boolean>>
}
const IsUser = ({ setToggleNavbar }: props) => {
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
          <a onClick={() => {

            setToggleNavbar(prev => !prev)
          }} id="email" >
            {decoded?.email}
          </a>
          <a onClick={() => {

            setToggleNavbar(prev => !prev)
            navigate('/write')
          }} id="write">
            write
          </a>
          <a onClick={() => {

            setToggleNavbar(prev => !prev)
            handleLogout
          }} id="logout">
            logout
          </a>
        </>
      ) : (
        <a onClick={() => {

          setToggleNavbar(prev => !prev)
          navigate('/login')
        }} id="login">
          login
        </a>
      )}
    </>
  );
};

export default IsUser;
