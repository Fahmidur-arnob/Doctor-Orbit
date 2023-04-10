import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Shop.css';
import Cart from '../Cart/Cart';
import { addToDb, getStoredCart, deleteShoppingCart, } from '../../Utilities/DemoDb/DemoDB';
import { useLoaderData } from 'react-router-dom';

const Shop = () => {
    const products = useLoaderData();
    const [cart, setCart] = useState([]);

    const clearCart = () =>{
        setCart([]);
        deleteShoppingCart();
    }


    useEffect(() => {
        const storedCart = getStoredCart();
        const savedCart = [];
        for(const id in storedCart){
            const addedProduct = products.find(product => product.id === id);
            if(addedProduct){
                const quantity = storedCart[id];
                addedProduct.quantity = quantity;
                savedCart.push(addedProduct);
            }
        }
        setCart(savedCart);
    }, [products]);


    const handleAddToCart = (product) =>{
        // console.log('clicked');
        const newCart = [...cart, product];
        setCart(newCart);
        addToDb(product.id);
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
                <Cart clearCart = {clearCart} cart = {cart}></Cart>
            </div>
        </div>
    );
};

export default Shop;