import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Shop.css';
import Cart from '../Cart/Cart';

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);

    useEffect(() => {
        fetch('products.json')
        .then(res => res.json())
        .then(data => setProducts(data))
    }, []);


    const handleAddToCart = (product) =>{
        console.log('clicked');
        const newCart = [...cart, product];
        setCart(newCart);
    }
    

    return (
        <div className='shop-container'>
            <div className='grid grid-cols-3 gap-4 mt-16 product-container'>
                {
                    products.map(product => <Product    
                    key = {product.id}
                    product = {product}
                    handleAddToCart = {handleAddToCart}
                    ></Product>)
                }
            </div>
            <div className='cart-information-container mt-16'>
                <Cart cart = {cart}></Cart>
            </div>
        </div>
    );
};

export default Shop;