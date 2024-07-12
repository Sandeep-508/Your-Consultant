import React from "react";
import Slider from "react-slick";
import { nextArrowSlider, prevArrow, prevBtnSlider, sliderBg } from "../Assets/Images/WEBp";


function Fade() {

    const SamplePrevArrow = (props) => {
        const { className, style, onClick } = props;
        return (
            <div onClick={onClick} className={`arrow ${className}`} >
                <img src={prevBtnSlider} alt="" className=" w-full h-full md:block hidden" />
                <img src={prevArrow} alt="" className=" w-full h-full md:hidden block" />
            </div>
        )
    }

    function SampleNextArrow(props) {
        const { className, style, onClick } = props;
        return (
            <div onClick={onClick} className={`arrow ${className}`} >
                <img src={nextArrowSlider} alt="" className=" w-full h-full" />
            </div>
        )
    }

    const settings = {
        dots: true,
        fade: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        waitForAnimate: false,
        nextArrow: <SampleNextArrow to="next" />,
        prevArrow: <SamplePrevArrow to="prev" />,
    };

    return (
        <div className="slider-container">
            <Slider {...settings}>
                <div className=" bg-cover bg-center bg-no-repeat w-full h-[448px] flex items-center justify-center relative">
                    <div className=" flex items-center justify-center flex-col w-full h-[448px] bg-black" style={{ backgroundImage: `url(${sliderBg})` }}>
                        <p className=" font-poppins font-medium text-2xl text-white text-center">1st phase <br />
                            "The not-wanting-to-be-true"</p>
                        <div className="flex items-center justify-center">
                            <p className=" font-poppins text-sm font-normal text-white text-center pt-[15px] max-w-[364px]">This phase is characterized by denial and ignoring the final separation.</p>
                        </div>
                    </div>
                </div>
                <div className=" bg-cover bg-center bg-no-repeat w-full h-[448px] flex items-center justify-center relative">
                    <div className=" flex items-center justify-center flex-col w-full h-[448px] bg-black" style={{ backgroundImage: `url(${sliderBg})` }}>
                        <p className=" font-poppins font-medium text-2xl text-white text-center">2nd phase <br />
                            "The not-wanting-to-be-true"</p>
                        <div className="flex items-center justify-center">
                            <p className=" font-poppins text-sm font-normal text-white text-center pt-[15px] max-w-[364px]">This phase is characterized by denial and ignoring the final separation.</p>
                        </div>
                    </div>
                </div>
                <div className=" bg-cover bg-center bg-no-repeat w-full h-[448px] flex items-center justify-center relative">
                    <div className=" flex items-center justify-center flex-col w-full h-[448px] bg-black" style={{ backgroundImage: `url(${sliderBg})` }}>
                        <p className=" font-poppins font-medium text-2xl text-white text-center">3rd phase <br />
                            "The not-wanting-to-be-true"</p>
                        <div className="flex items-center justify-center">
                            <p className=" font-poppins text-sm font-normal text-white text-center pt-[15px] max-w-[364px]">This phase is characterized by denial and ignoring the final separation.</p>
                        </div>
                    </div>
                </div>
                <div className=" bg-cover bg-center bg-no-repeat w-full h-[448px] flex items-center justify-center relative">
                    <div className=" flex items-center justify-center flex-col w-full h-[448px] bg-black" style={{ backgroundImage: `url(${sliderBg})` }}>
                        <p className=" font-poppins font-medium text-2xl text-white text-center">4th phase <br />
                            "The not-wanting-to-be-true"</p>
                        <div className="flex items-center justify-center">
                            <p className=" font-poppins text-sm font-normal text-white text-center pt-[15px] max-w-[364px]">This phase is characterized by denial and ignoring the final separation.</p>
                        </div>
                    </div>
                </div>
            </Slider>
        </div>
    );
}

export default Fade;
