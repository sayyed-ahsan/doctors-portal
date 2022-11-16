import Appoinment from "../../Pages/Appoinment/Appoinment";
import Signup from "../../Pages/Login/Signup";

const { createBrowserRouter } = require("react-router-dom");
const { default: Main } = require("../../Layout/Main");
const { default: Home } = require("../../Pages/Home/Home/Home");
const { default: Login } = require("../../Pages/Login/Login");

const router = createBrowserRouter(
    [
        {
            path: '/',
            element: <Main></Main>,
            children: [
                {
                    path: '/',
                    element: <Home></Home>
                },
                {
                    path: 'login',
                    element: <Login></Login>
                },
                {
                    path: 'signup',
                    element: <Signup></Signup>
                },
                {
                    path: 'appoinment',
                    element: <Appoinment></Appoinment>
                }
            ]
        }
    ]
)

export default router;