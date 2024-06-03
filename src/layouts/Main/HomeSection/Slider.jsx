import React from 'react';
import { Carousel, Image } from 'antd';
import img from '/src/assets/img/doraemon-movie-43-nobitas-earth-symphony-3-1_1716273153699.jpg';
import img2 from '/src/assets/img/garfield-3_1716798528834.jpg';
import img3 from '/src/assets/img/furiosa-2048_1716547337203.jpg';

const CarouselContainer = () => {
    return (
        <div className="relative w-screen h-[370px]">
            <div className={'absolute right-[12%] w-3/4'}>
                <Carousel arrows={true} autoplay autoplaySpeed={3000} fade={true}>
                    {/* Slide 1 */}
                    <div className="h-[360px] overflow-hidden">
                        <Image
                            preview={false}
                            src={img}
                            alt="Image 1"
                            className="w-full h-full object-cover"
                        />
                    </div>
                    <div className="h-[360px] overflow-hidden">
                        <Image
                            preview={false}
                            src={img2}
                            alt="Image 2"
                            className="w-full h-full object-cover"
                        />
                    </div>
                    <div className="h-[360px] overflow-hidden">
                        <Image
                            preview={false}
                            src={img3}
                            alt="Image 3"
                            className="w-full h-full object-cover"
                        />
                    </div>
                </Carousel>
            </div>
        </div>
    );
};

const Slider = () => {
    return (
        <>
            <CarouselContainer/>
        </>
    );
};

export default Slider;
