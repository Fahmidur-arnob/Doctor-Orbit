import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import Home from "../../Pages/Home/Home";
import Signin from "../../Pages/Signin/Signin";
import CreateAccount from "../../Pages/CreateAccount/CreateAccount";
import About from "../../Pages/About/About";
import Shop from "../../Pages/Shop/Shop";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import { productsAndCartLoader } from "../../Loaders/ProductsAndCartLoader";
import Shipping from "../../Pages/Shipping/Shipping";
import DashboardLayout from "../../Layout/DashboardLayout";
import Dashboard from "../../Pages/Dashboard/Dashboard/Dashboard";
import MyOrders from "../../Pages/Dashboard/MyOrders/MyOrders";
import Cart from "../../Pages/Cart/Cart";


const router = createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'/signin',
                element:<Signin></Signin>
            },
            {
                path:'/createaccount',
                element:<CreateAccount></CreateAccount>
            },
            {
                path:'/about',
                element:<About></About>
            },
            {
                path:'/shop',
                loader: () => fetch('products.json'),
                element:<Shop></Shop>
            },
            {
                path:'/shipping',
                element:<PrivateRoute><Shipping></Shipping></PrivateRoute>
            },
            {
                path:'/cart',
                element:<Cart></Cart>
            }
            // {
            //     path:'/orders',
            //     loader: productsAndCartLoader,
            //     element:<Orders></Orders>
            // },
        ]
    },
    {
        path:'/dashboard',
        loader: productsAndCartLoader,
        element:<PrivateRoute>
            <DashboardLayout></DashboardLayout>
        </PrivateRoute>,
        children:[
            {
                path:'/dashboard',
                loader: productsAndCartLoader,
                element:<MyOrders></MyOrders>
            }
        ]
    }
])

export default router;