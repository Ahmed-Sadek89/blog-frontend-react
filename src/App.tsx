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
    // blog backend
    // DB design
    // user ->
    //   Image
    //   username
    //   password
    // posts -> 
    //   "id"
    //   "title"
    //   "desc": 
    //   "category",
    //   "owner":{
    //       "username" ,
    //       "image",
    //       "post_published"
    //   }

    // categories -> 
    //   id
    //   catName

      <RouterProvider router={routes} />
  );
}

export default App;
