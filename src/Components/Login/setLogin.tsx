import { useDispatch } from "react-redux";
import { AppDispatch } from "../../Redux/store";
import { user_login } from "../../Redux/Slices/async_slices/login.slice";
import { userLogin } from "../../Types/types";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";


const setLogin = (loginData: {email: string, password: string}) => {
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();
  async function handleLogin(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const formData = new FormData()
    console.log(formData.get("email"));
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

