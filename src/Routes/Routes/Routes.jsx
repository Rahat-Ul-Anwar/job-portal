import { createBrowserRouter } from "react-router-dom";
import About from "../../components/About/About";
import Contact from "../../components/Contact/Contact";
import Home from "../../components/Home/Home/Home";
import LogIn from "../../components/LogIn/LogIn";
import Main from "../../Layout/Main";

export const router = createBrowserRouter([

    {
        path: '/',
        element: <Main></Main>,
        children:[

            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/about',
                element: <About></About>
            },
            {
                path: '/contact',
                element: <Contact></Contact>,
            },
            {
                path: '/login',
                element: <LogIn></LogIn>
            },
        ]
}

]);