import React, { useState, useContext } from 'react';
import { Link, Outlet, useLoaderData } from 'react-router-dom';
import Header from '../Pages/Shared/Header/Header';
import Cart from '../Pages/Cart/Cart';
import ReviewItem from '../Pages/Orders/ReviewItems/ReviewItems';
import { AuthContext } from '../contexts/AuthProvider';

const DashboardLayout = () => {
    const { initialCart } = useLoaderData();  // { products: products, initialCart: initialCart }
    const [cart, setCart] = useState(initialCart);
    const { user } = useContext(AuthContext);

    const handleRemoveItem = (id) => {
        const remaining = cart.filter(product => product.id !== id);
        setCart(remaining);
        removeFromDb(id);
    }

    // const clearCart = () => {
    //     setCart([]);
    //     deleteShoppingCart();
    // }
    return (
        <div>
            <Header></Header>
            <h3 className='text-3xl text-left mt-16 mb-10'>My Orders</h3>
            <div className="drawer drawer-mobile">
                <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content ">

                    <Outlet></Outlet>

                </div>
                <div className="drawer-side">

                    <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>

                    <div className='orders-container'>
                        {
                            cart.map(product => <ReviewItem
                                key={product.id}
                                product={product}
                                handleRemoveItem={handleRemoveItem}
                            ></ReviewItem>)
                        }
                        {
                            cart.length === 0 && <h2>No Items for Review. Please <Link to="/shop">Shop more</Link></h2>
                        }
                    </div>
                </div>
                <div>
                    <h3 className='text-3xl font-semibold'>Admin of the site:</h3>
                    <h5 className='text-xl'>{user?.email}</h5>
                </div>
            </div>
        </div>
    );
};

export default DashboardLayout;