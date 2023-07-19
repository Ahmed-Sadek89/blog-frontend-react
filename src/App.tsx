import {useEffect} from 'react'
import { useDispatch } from 'react-redux';
import {
  RouterProvider
} from "react-router-dom";
import routes from "./Routes/routes";
import { AppDispatch } from "./Redux/store";
import { fetchPosts } from './Redux/Slices/getPosts.slice';
import { fetchCategories } from './Redux/Slices/getCategoriesSlice';

const App = () => {
  const dispatch = useDispatch<AppDispatch>();
  useEffect(() => {
    dispatch(fetchCategories())
    dispatch(fetchPosts());
  }, [])
  return (
      <RouterProvider router={routes} />
  );
}

export default App;
