import React from 'react';
import './Product.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

const Product = ({product, handleAddToCart}) => {
    const { name, img, seller, price, ratings } = product;

    return (
        <div className="product card mb-4 bg-base-100 shadow-xl">
            <figure>
                <img className='image-full' src={img} alt="Image Not Provided" />
            </figure>
            <div className="card-body product-information">
                <h5>Name: {name}</h5>
                <h4>Price: ${price}</h4>
                <h4>Seller: {seller}</h4>
                <h4><small>Ratings:{ratings}</small></h4>
            </div>
            <button onClick={() => handleAddToCart(product)} className='btn-cart'>
                <span className='btn-text'>Add to Cart</span>
                <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
            </button>
        </div>
    );
};

export default Product;