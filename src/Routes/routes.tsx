import {
    createBrowserRouter
} from "react-router-dom";
// pages
import Home from "../Pages/Home/home";
import SinglePost from "../Pages/SinglePost/singlePost";
import User from "../Pages/User/User";
import PostForm from "../Pages/PostForm/PostForm";
// conponents
import Layout from "../Components/Layout/layout";


const routes = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        //errorElement: <h1>put error component here</h1>
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: 'category/:cat_name',
                element: <Home />
            },
            {
                path: 'post/:post_id',
                element: <SinglePost />
            },
            {
                path: 'login',
                element: <User />
            },
            {
                path: 'register',
                element: <User />
            },
            {
                path: '/post/add',
                element: <PostForm />
            },
            {
                path: '/post/edit/:post_id',
                element: <PostForm />
            },
        ]
    },
    // {
    //     path: '/login',
    //     element: <Login />
    // },
    // {
    //     path: '/register',
    //     element: <Register />
    // },
]);


export default routes;