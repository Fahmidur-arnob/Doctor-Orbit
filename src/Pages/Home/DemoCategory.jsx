import React from 'react';

const DemoCategory = () => {
    return (
        <>
            <h1 className='text-3xl mt-24 mb-16 font-bold text-center'>Our Categories</h1>

            <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 lg:w-full gap-5 mb-24">
                <div className="card w-96 bg-neutral text-neutral-content">
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Technology</h2>
                    </div>
                </div>
                <div className="card w-96 bg-neutral text-neutral-content">
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Food Items</h2>
                    </div>
                </div>
                <div className="card w-96 bg-neutral text-neutral-content">
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Accessories</h2>
                    </div>
                </div>
                <div className="card w-96 bg-neutral text-neutral-content">
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Clothing</h2>
                    </div>
                </div>
                <div className="card w-96 bg-neutral text-neutral-content">
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Shoes</h2>
                    </div>
                </div>
                <div className="card w-96 bg-neutral text-neutral-content">
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Bags</h2>
                    </div>
                </div>
                <div className="card w-96 bg-neutral text-neutral-content">
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Caps</h2>
                    </div>
                </div>
                <div className="card w-96 bg-neutral text-neutral-content">
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Water Bottles</h2>
                    </div>
                </div>

                <div className="card w-96 bg-neutral text-neutral-content">
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Ear Phones</h2>
                    </div>
                </div>
            </div>
        </>
    );
};

export default DemoCategory;