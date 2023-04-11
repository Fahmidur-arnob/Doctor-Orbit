import React, { useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { deleteShoppingCart, removeFromDb } from '../../../Utilities/DemoDb/DemoDB';
import Cart from '../../Cart/Cart';
import ReviewItem from '../../Orders/ReviewItems/ReviewItems';

const Orders = () => {
    const { initialCart } = useLoaderData();  // { products: products, initialCart: initialCart }
    const [cart, setCart] = useState(initialCart)

    const clearCart = () => {
        setCart([]);
        deleteShoppingCart();
    }

    return (
        <div className='shop-container'>
            <div className='cart-container'>
                <Cart clearCart={clearCart} cart={cart}>
                    <Link to='/shipping'>
                        <button>Proceed Shipping</button>
                    </Link>
                </Cart>
            </div>
        </div>
    );
};

export default Orders;