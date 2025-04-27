import {createBrowserRouter, Navigate} from "react-router-dom"
import HomeLayout from "../layouts/HomeLayout";
import CategoryNews from "../Pages/CategoryNews";
import AuthLayout from "../layouts/AuthLayout";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import NewsDetails from "../Pages/NewsDetails";
import PrivateRoutes from "./PrivateRoutes";



const Router = createBrowserRouter([
    {
        path:"/",
        element:<HomeLayout/>,
        children: [
            {
                path:"",
                element:<Navigate to={"category/01"}></Navigate>
            },
            {
                path: "/category/:id",
                element: <CategoryNews/>,
                loader: ({ params }) => {
                    return fetch(`https://openapi.programming-hero.com/api/news/category/${params.id}`)
                     
                  }
               
              },
        ],
    },
    {
        path:"/news/:id",
        element: <PrivateRoutes>
            <NewsDetails></NewsDetails>
        </PrivateRoutes>,
        loader:({params})=>fetch(`https://openapi.programming-hero.com/api/news/${params.id}`)
    },
    {
        path:"/auth",
        element: <AuthLayout/>,
        children: [
        {
            path:"/auth/login", 
            element:<Login></Login>
        },
        {
            path:"/auth/register", 
            element: <Register/>
        },
    ]
    },
    {
        path:"*",
        element: <h1>Error</h1>,
    },
])

export default Router;