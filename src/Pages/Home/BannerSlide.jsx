import React from 'react';


const BannerSlide = ({ slide }) => {

    const { image, id, prev, next } = slide;

    return (
        <div id={`slide${id}`} className="carousel-item relative w-full">


            <div>
                <img src={image} alt="" className="rounded-xl" />
            </div>


            <div className="absolute flex justify-end transform -translate-y-1/2 left-5 top-1/4">

            </div>

            <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                <a href={`#slide${prev}`} className="btn btn-circle mr-1">❮</a>
                <a href={`#slide${next}`} className="btn btn-circle">❯</a>
            </div>

        </div>
    );
};

export default BannerSlide;