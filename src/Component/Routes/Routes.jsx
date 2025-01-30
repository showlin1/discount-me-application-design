import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import SignIn from "../../Pages/SignIn/SignIn";
import Register from "../../Pages/Register/Register";
import ForgetPass from "../../Pages/ForgetPass/ForgetPass";
import NewPass from "../../Pages/NewPass/NewPass";
import Home from "../../Pages/Home/Home";
import AllCart from "../../Pages/All Cart/AllCart";
import VisitCafe from "../../Pages/VisitCafe/VisitCafe";
import ShoppingPage from "../../Pages/ShoppingPage/ShoppingPage";
import ShoppingDetails from "../../Pages/ShoppingDetails/ShoppingDetails";
import ShopCart from "../../Pages/ShopCart/ShopCart";
import AboutUs from "../../Pages/AboutUs/AboutUs";
import TermsUse from "../../Pages/TermsUse/TermsUse";
import PrivacyPolicy from "../../Pages/PrivacyPolicy/PrivacyPolicy";
import CheckOut from "../../Pages/CheckOut/CheckOut";
import CouponCard from "../../Pages/CouponCard/CouponCard";
import Dashboard from "../../Pages/Dashboard/Dashboard";
import Profile from "../../Pages/Profile/Profile";
import OrderHistory from "../../Pages/OrderHistory/OrderHistory";
import Setting from "../../Pages/Setting/Setting";
const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: () => fetch('/carts.json'),
            },
            {
                path: '/allCart',
                element: <AllCart></AllCart>,
                loader: () => fetch('/carts.json'),
            },
            {
                path: '/cart/:id',
                element: <VisitCafe></VisitCafe>,
                loader: () => fetch('/carts.json'),
            },
            {
                path: '/shoppingPage',
                element: <ShoppingPage></ShoppingPage>,
                loader: () => fetch('/shopCart.json'),
            },
            {
                path: '/shoppingCart/:id',
                element: <ShoppingDetails></ShoppingDetails>,
                loader: () => fetch('/shopCart.json'),
            },
            {
                path: '/signIn',
                element: <SignIn></SignIn>
            },
            {
                path: '/shopCart',
                element: <ShopCart></ShopCart>,
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
            {
                path: '/aboutUs',
                element: <AboutUs></AboutUs>
            },
            {
                path: '/termsUse',
                element: <TermsUse></TermsUse>
            },
            {
                path: '/privacyPolicy',
                element: <PrivacyPolicy></PrivacyPolicy>
            },
            {
                path: '/checkOut',
                element: <CheckOut></CheckOut>
            },
            {
                path: '/couponCard',
                element: <CouponCard></CouponCard>
            },
            {
                path: '/dashboard',
                element: <Dashboard></Dashboard>,
                children:[
                    {
                        path:'profile',
                        element:<Profile></Profile>
                    },
                    {
                        path:'orderHistory',
                        element:<OrderHistory></OrderHistory>,
                    },
                    {
                        path:'setting',
                        element:<Setting></Setting>,
                    },
                    
                ]
            },
        ]
    },
]);

export default router;