import DashBoardLayout from "../../Layout/DashBoardLayout";
import About from "../../Pages/About/About";
import Appoinment from "../../Pages/Appoinment/Appoinment";
import AddDoctor from "../../Pages/Dashboard/AddDoctor/AddDoctor";
import AllUsers from "../../Pages/Dashboard/AllUsers/AllUsers";
import ManageDoctors from "../../Pages/Dashboard/ManageDoctors/ManageDoctors";
import MYAppoinments from "../../Pages/Dashboard/MyAppoinments/MYAppoinments";
import Payment from "../../Pages/Dashboard/MyAppoinments/Payment";
import Signup from "../../Pages/Login/Signup";
import DisplayError from "../../Pages/Shared/DisplayError/DisplayError";
import AdminRoute from "../PrivetRout/AdminRoute";
import PrivetRout from "../PrivetRout/PrivetRout";

const { createBrowserRouter } = require("react-router-dom");
const { default: Main } = require("../../Layout/Main");
const { default: Home } = require("../../Pages/Home/Home/Home");
const { default: Login } = require("../../Pages/Login/Login");

const router = createBrowserRouter(
    [
        {
            path: '/',
            element: <Main></Main>,
            errorElement: <DisplayError></DisplayError>,
            children: [
                {
                    path: '/',
                    element: <Home></Home>
                },
                {
                    path: 'appoinment',
                    element: <Appoinment></Appoinment>
                },
                {
                    path: 'about',
                    element: <About></About>
                },

                {
                    path: 'login',
                    element: <Login></Login>
                },
                {
                    path: 'signup',
                    element: <Signup></Signup>
                }
            ]
        },
        {
            path: '/dashboard',
            element: <PrivetRout><DashBoardLayout></DashBoardLayout> </PrivetRout>,
            errorElement: <DisplayError></DisplayError>,
            children: [
                {
                    path: '/dashboard',
                    element: <MYAppoinments></MYAppoinments>
                },
                {
                    path: '/dashboard/users',
                    element: <AdminRoute><AllUsers></AllUsers></AdminRoute>
                },
                {
                    path: '/dashboard/adddoctor',
                    element: <AddDoctor></AddDoctor>
                },
                {
                    path: '/dashboard/managedoctors',
                    element: <ManageDoctors></ManageDoctors>
                },
                {
                    path: '/dashboard/payment/:bookingId',
                    element: <Payment></Payment>,
                    loader: ({ params }) => fetch(`https://doctors-portal-server-six-phi.vercel.app/bookings/${params.bookingId}`)
                }
            ]
        }
    ]
)

export default router;