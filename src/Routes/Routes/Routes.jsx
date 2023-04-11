import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import Home from "../../Pages/Home/Home";
import Signin from "../../Pages/Signin/Signin";
import CreateAccount from "../../Pages/CreateAccount/CreateAccount";
import About from "../../Pages/About/About";
import Shop from "../../Pages/Shop/Shop";
import Cart from "../../Pages/Cart/Cart";
import Orders from "../../Pages/Orders/Orders";
import Inventory from "../../Pages/Inventory/Inventory";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import { productsAndCartLoader } from "../../Loaders/ProductsAndCartLoader";
import Shipping from "../../Pages/Shipping/Shipping";
import DashboardLayout from "../../Layout/DashboardLayout";


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
                path:'/orders',
                loader: productsAndCartLoader,
                element:<Orders></Orders>
            },
            {
                path:'/inventory',
                element:<PrivateRoute><Inventory></Inventory></PrivateRoute>
            },
            {
                path:'/shipping',
                element:<PrivateRoute><Shipping></Shipping></PrivateRoute>
            }
        ]
    },
    {
        path:'/dashboard',
        element:<PrivateRoute>
            <DashboardLayout></DashboardLayout>
        </PrivateRoute>,
        children:[
            {
                path:'/dashboard',
                element:<Orders></Orders>
            }
        ]
    }
])

export default router;