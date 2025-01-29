import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import SignIn from "../../Pages/SignIn/SignIn";
import Register from "../../Pages/Register/Register";
import ForgetPass from "../../Pages/ForgetPass/ForgetPass";
import NewPass from "../../Pages/NewPass/NewPass";
const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <div></div>
            },
            {
                path: '/signIn',
                element: <SignIn></SignIn>
            },
            {
                path: '/register',
                element: <Register></Register>,
            },
            {
                path: '/forget',
                element: <ForgetPass></ForgetPass>
            },
            {
                path: '/newPass',
                element: <NewPass></NewPass>
            },
        ]
    },
]);

export default router;