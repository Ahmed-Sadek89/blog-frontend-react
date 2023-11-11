import { useState } from "react";
import { useSelector } from "react-redux";
import { rootState } from "../../Redux/store";
import makeInputRef from "../../assets/makeInputRef";
import setRegister from "./setRegister";
import setImageChange from "./setImageChange";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();
  const inputRef = makeInputRef();

  const { loading, error, data } = useSelector(
    (state: rootState) => state.user_register
  );

  const [registeredData, setRegisteredData] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [image, setImage] = useState<File | null>(null);

  const handleImageChange = setImageChange(setImage);

  const handleRegister = setRegister(registeredData, image);
  return (
    <>
      <form onSubmit={handleRegister} encType="multipart/form-data">
        <input
          type="text"
          placeholder="username"
          required
          disabled={loading}
          ref={inputRef}
          value={registeredData.username}
          onChange={(e) => {
            setRegisteredData((prev) => {
              return {
                ...prev,
                username: e.target.value,
              };
            });
          }}
        />
        <input
          type="email"
          placeholder="email"
          required
          disabled={loading}
          value={registeredData.email}
          onChange={(e) => {
            setRegisteredData((prev) => {
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
          value={registeredData.password}
          onChange={(e) => {
            setRegisteredData((prev) => {
              return {
                ...prev,
                password: e.target.value,
              };
            });
          }}
        />
        <input
          type="file"
          accept="image/png, image/jpeg"
          required
          disabled={loading}
          onChange={handleImageChange}
        />
        <button type="submit" disabled={loading}>
          Register
        </button>
        <p>
          <span>Do you have account?</span>
          <span onClick={() => navigate("/login")}>Login</span>
        </p>
        {error === true && (
          <span className="user-content-error">{data.result}</span>
        )}
      </form>
    </>
  );
};

export default Register;
