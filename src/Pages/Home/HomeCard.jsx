import React from 'react';
import { Link } from 'react-router-dom';
import imgOne from '../../assets/images/Five.jpg';
import imgTwo from '../../assets/images/Six.jpg';
import imgThree from '../../assets/images/Seven.jpg';
import imgFour from '../../assets/images/Eight.jpg';
import imgFive from '../../assets/images/Nine.jpg';
import imgSix from '../../assets/images/Ten.jpg';

const HomeCard = () => {
    return (
        <>
            <h1 className='text-3xl mt-24 mb-16 font-bold text-center'>amaJON makes life easy and portable just like magic</h1>

            <div className="grid lg:grid-cols-3 md:grid-cols-3 grid-cols-1 lg:w-full mx-auto gap-5 mb-24 rounded-lg dark:bg-gray-800 dark:border-gray-700 ">
                <Link >
                    <img className="rounded-lg w-[92%] mx-auto" src={imgOne} alt="" />
                </Link>
                <Link >
                    <img className="rounded-lg w-[92%] mx-auto" src={imgTwo} alt="" />
                </Link>
                <Link >
                    <img className="rounded-lg w-[92%] mx-auto" src={imgThree} alt="" />
                </Link>
                <Link >
                    <img className="rounded-lg w-[92%] mx-auto" src={imgFour} alt="" />
                </Link>
                <Link >
                    <img className="rounded-lg w-[92%] mx-auto" src={imgFive} alt="" />
                </Link>
                <Link >
                    <img className="rounded-lg w-[92%] mx-auto" src={imgSix} alt="" />
                </Link>
            </div>
        </>
    );
};

export default HomeCard;