import React from "react";
import { user_register } from "../../Redux/Slices/async_slices/register.slice";
import { userRegister } from "../../Types/types";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../Redux/store";

type registeredData = { username: string; email: string; password: string };

const setRegister = (registeredData: registeredData, image: File | null) => {
  const navigate = useNavigate()
  const dispatch = useDispatch<AppDispatch>()
  async function handleRegister(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const formData = new FormData();
    formData.append("username", registeredData.username);
    formData.append("email", registeredData.email);
    formData.append("password", registeredData.password);
    formData.append("image", image as File);

    await dispatch(user_register(formData)).then(({ payload }) => {
      let res = payload as userRegister;
      if (res.status === 200) {
        navigate("/login");
      }
    });
  }

  return handleRegister;
};

export default setRegister;
