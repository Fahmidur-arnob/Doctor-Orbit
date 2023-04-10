import React from 'react';
import './Product.css';

const Product = (props) => {
    const { name, img, seller, price, ratings } = props.product;

    return (
        <div className="product card mb-4 bg-base-100 shadow-xl">
            <figure>
                <img className='image-full' src={img} alt="Image Not Provided" />
            </figure>
            <div className="card-body">
                <h5>{name}</h5>
                <h4>{price}</h4>
                <h4>{seller}</h4>
                <h4>{ratings}</h4>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary">Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default Product;