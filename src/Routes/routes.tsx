import {
    createBrowserRouter
} from "react-router-dom";
// pages
import Home from "../Pages/home";
import SinglePost from "../Pages/singlePost";
import UpdatePost from "../Pages/updatePost";
import PublishPost from "../Pages/publishPost";
import Category from "../Pages/Category";
import Login from "../Pages/login";
import Register from "../Pages/register";
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
                path: '/post/:post_id',
                element: <SinglePost />
            },
            {
                path: '/post/:post_id/update',
                element: <UpdatePost />
            },
            {
                path: '/add_post',
                element: <PublishPost />
            },
            {
                path: '/category/:cat_name',
                element: <Category />
            },
        ]
    },
    {
        path: '/login',
        element: <Login />
    },
    {
        path: '/register',
        element: <Register />
    },
]);


export default routes;