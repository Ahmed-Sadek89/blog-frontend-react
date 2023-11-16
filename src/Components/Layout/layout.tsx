import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../Navbar/navbar";
import Footer from "../footer/footer";
import { useSelector } from "react-redux";
import { rootState } from "../../Redux/store";
import Loading from "../Loading/Loading";
import { getErrorMsg } from "../../assets/sweetAlert";

const layout = () => {
  const { pathname } = useLocation();
  const isLoginPage = pathname === "/login";
  const isRegisterPage = pathname === "/register";
  const { loading, error } = useSelector((state: rootState) => state.posts_get);

  if (isLoginPage || isRegisterPage) {
    return (
      <main>
        <Outlet />
      </main>
    );
  }
  return (
    <>
      {loading === true && <Loading />}
      {error === true && getErrorMsg()}

      {error === false && loading === false && (
        <div className="layout container">
          <header>
            <Navbar />
          </header>
          <main>
            <Outlet />
          </main>
          <footer>
            <Footer />
          </footer>
        </div>
      )}
    </>
  );
};

export default layout;
