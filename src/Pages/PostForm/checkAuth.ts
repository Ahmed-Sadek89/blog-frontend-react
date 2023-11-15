import Cookies from "js-cookie";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const checkAuth = () => {
  const navigate = useNavigate();
  const token = Cookies.get("authorization");
  const isAuth = token ? true : false;
  useEffect(() => {
    isAuth === false && navigate("/login");
  }, [isAuth, navigate]);
};

export default checkAuth;
