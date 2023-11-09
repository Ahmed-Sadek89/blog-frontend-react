import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../Navbar/navbar";
import Footer from "../footer/footer";
import { useSelector } from "react-redux";
import { rootState } from "../../Redux/store";

const layout = () => {
  const { pathname } = useLocation();
  const isLoginPage = pathname === "/login";
  const isRegisterPage = pathname === "/register";
  const { loading, error } = useSelector(
    (state: rootState) => state.categories_getAll
  );

  if (isLoginPage || isRegisterPage) {
    return (
      <main>
        <Outlet />
      </main>
    );
  }
  return (
    <>
      {loading === true && <h1>loading...</h1>}
      {error === true && <h1>error connecting...</h1>}

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
