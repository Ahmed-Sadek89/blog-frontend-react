import { memo } from "react";
import Login from "../../Components/Login/Login";
import Register from "../../Components/Register/Register";
import setUserPageName from "./setUserPageName";
import checkAuth from "./checkAuth";

const User = () => {
  checkAuth();
  let page = setUserPageName();
  return (
    <div className="user">
      <h3>{page}</h3>
      <div className="user-content">
        {page === "login" && <Login />}
        {page === "register" && <Register />}
      </div>
    </div>
  );
};

export default memo(User);
