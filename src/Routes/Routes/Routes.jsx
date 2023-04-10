import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import Home from "../../Pages/Home/Home";
import Signin from "../../Pages/Signin/Signin";
import CreateAccount from "../../Pages/CreateAccount/CreateAccount";
import About from "../../Pages/About/About";
import Shop from "../../Pages/Shop/Shop";
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
                element:<Shop></Shop>
            },
        ]
    }
])

export default router;