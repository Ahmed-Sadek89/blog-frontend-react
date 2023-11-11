import { user_login } from "../../Redux/Slices/async_slices/login.slice";
import { userLogin } from "../../Types/types";
import Cookies from "js-cookie";
import { AppDispatch } from "../../Redux/store";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";


const setLogin = (loginData: {email: string, password: string}) => {
  const navigate = useNavigate()
  const dispatch = useDispatch<AppDispatch>()

  async function handleLogin(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    await dispatch(user_login(loginData)).then(({ payload }) => {
      const { status, token } = payload as userLogin;
      if (status === 200) {
        Cookies.set("authorization", token || "");
        navigate("/");
      }
    });
  }
  return handleLogin
}

export default setLogin

