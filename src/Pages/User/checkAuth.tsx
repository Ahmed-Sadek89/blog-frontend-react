import Cookies from "js-cookie";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const checkAuth = () => {
  const navigate = useNavigate();
  const token = Cookies.get("authorization");
  const isAuth = token && token?.length > 0 ? true : false;
  useEffect(() => {
    isAuth && navigate("/");
  }, [isAuth, navigate]);
};

export default checkAuth;
