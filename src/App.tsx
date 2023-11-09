import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { RouterProvider } from "react-router-dom";
import routes from "./Routes/routes";
import { AppDispatch } from "./Redux/store";
import { posts_getAll } from "./Redux/Slices/async_slices/getPosts.slice";
import { categories_getAll } from "./Redux/Slices/async_slices/getAllCategories.slice";

const App = () => {
  const dispatch = useDispatch<AppDispatch>();
  useEffect(() => {
    dispatch(categories_getAll());
    dispatch(posts_getAll());
  }, []);

  return <RouterProvider router={routes} />;
};

export default App;
