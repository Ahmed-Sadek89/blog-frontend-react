import { useState } from "react";
import { useSelector } from "react-redux";
import { rootState } from "../../Redux/store";
import makeInputRef from "../../assets/makeInputRef";
import setLogin from "./setLogin";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate()

  const inputRef = makeInputRef();

  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  const { data, loading, error } = useSelector(
    (state: rootState) => state.user_login_state
  );
  const handleLogin = setLogin(loginData);
  return (
    <>
      <form onSubmit={handleLogin}>
        <input
          type="email"
          placeholder="email"
          ref={inputRef}
          required
          disabled={loading}
          value={loginData.email}
          onChange={(e) => {
            setLoginData((prev) => {
              return {
                ...prev,
                email: e.target.value,
              };
            });
          }}
        />
        <input
          type="password"
          placeholder="password"
          required
          autoComplete="off"
          disabled={loading}
          value={loginData.password}
          onChange={(e) => {
            setLoginData((prev) => {
              return {
                ...prev,
                password: e.target.value,
              };
            });
          }}
        />
        <button type="submit" disabled={loading}>
          Login
        </button>
        <p>
          <span>Don't have an account?</span>
          <span onClick={() => navigate("/register")}>Register</span>
        </p>
        {error === true && (
          <span className="user-content-error">{data.result}</span>
        )}
      </form>
    </>
  );
};

export default Login;
