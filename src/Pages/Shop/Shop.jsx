import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Shop.css';

const Shop = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('products.json')
        .then(res => res.json())
        .then(data => setProducts(data))
    }, []);


    const handleAddToCart = (product) =>{
        console.log('clicked');
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
            <div className='cart-information-container'>
                <h2>Order Summary</h2>
            </div>
        </div>
    );
};

export default Shop;