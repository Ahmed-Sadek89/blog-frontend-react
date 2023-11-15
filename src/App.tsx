import { useEffect } from "react";
import { RouterProvider } from "react-router-dom";
import routes from "./Routes/routes";
import { posts_getAll } from "./Redux/Slices/async_slices/posts/getPosts.slice";
import { categories_getAll } from "./Redux/Slices/async_slices/categories/getAllCategories.slice";
import { useDispatch } from "react-redux";
import { AppDispatch } from "./Redux/store";

const App = () => {
  const dispatch = useDispatch<AppDispatch>()
  useEffect(() => {
    dispatch(categories_getAll());
    dispatch(posts_getAll());
  }, []);

  return <RouterProvider router={routes} />;
};

export default App;
