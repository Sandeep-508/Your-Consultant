import React, { Component } from "react";
import Slider from "react-slick";
import { VertSliderImg } from "../Assets/Images/WEBp";

function VerticalSwipeToSlide() {
    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        vertical: true,
        verticalSwiping: true,
        swipeToSlide: true,
        autoplay: true,
        autoplaySpeed: 1000,
        beforeChange: function (currentSlide, nextSlide) {
            console.log("before change", currentSlide, nextSlide);
        },
        afterChange: function (currentSlide) {
            console.log("after change", currentSlide);
        }
    };
    return (
        <div className="verticalSlider">
            <Slider {...settings}>
                <div className="sliderItems">
                    <div className=" flex flex-col items-center justify-center">
                        <div className=" w-full min-h-[270px] shadow-sliderComp lg:pt-[58px] pt-[48px] lg:pb-8 pb-4 lg:px-[75px] px-4 relative">
                            <div className=" absolute  w-[86px] h-[86px] top-[-31px] left-[50%] translate-x-[-50%]">
                                <img src={VertSliderImg} alt="image of a girl" className=" w-full h-full" />
                            </div>
                            <p className=" font-poppins font-normal text-sm text-black opacity-70 text-center">Nec pellentesque aliquet diam eget sed mi ornare vulputate duis. Posuere id habitasse quis ac ac. Pellentesque eget sed ut tincidunt cras. Ipsum nec placerat vitae orci. Accumsan amet commodo montes, aenean velit gravida tristique montes. Porttitor velit cras venenatis, amet curabitur ultricies ac dictum. </p>
                            <p className=" font-poppins font-medium text-sm text-center pt-4 pb-[2px]">Marrie James-CEO</p>
                            <p className="font-poppins font-normal text-sm text-black opacity-70 text-center">Limana Enterprises, CA</p>
                        </div>
                        <div className="flex lg:flex-row flex-col mt-5 gap-5 items-center justify-center">
                            <div className=" min-h-[207px]  shadow-sliderComp pt-[25px] lg:pb-8 pb-3 lg:px-9 px-4 lg:w-1/2 xsm:w-8/12">
                                <p className=" font-poppins font-normal text-sm text-black opacity-70 text-center">Elementum risus cursus vehicula consectetur sapien ut tempor, venenatis turpis. Sed mauris enim.</p>
                                <p className=" font-poppins font-medium text-sm text-center pt-4 pb-[2px]">Ralph Edwards-CEO</p>
                                <p className="font-poppins font-normal text-sm text-black opacity-70 text-center">Limana Enterprises, CA</p>
                            </div>
                            <div className=" min-h-[207px]  shadow-sliderComp pt-[25px] lg:pb-8 pb-3 lg:px-9 px-4 lg:w-1/2 xsm:w-8/12">
                                <p className=" font-poppins font-normal text-sm text-black opacity-70 text-center">Elementum risus cursus vehicula consectetur sapien ut tempor, venenatis turpis. Sed mauris enim.</p>
                                <p className=" font-poppins font-medium text-sm text-center pt-4 pb-[2px]">Darrell Steward-Head</p>
                                <p className="font-poppins font-normal text-sm text-black opacity-70 text-center">Limana Enterprises, CA</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="sliderItems">
                    <div className=" flex flex-col items-center justify-center">
                        <div className=" w-full min-h-[270px] shadow-sliderComp lg:pt-[58px] pt-[48px] lg:pb-8 pb-4 lg:px-[75px] px-4 relative">
                            <div className=" absolute  w-[86px] h-[86px] top-[-31px] left-[50%] translate-x-[-50%]">
                                <img src={VertSliderImg} alt="image of a girl" className=" w-full h-full" />
                            </div>
                            <p className=" font-poppins font-normal text-sm text-black opacity-70 text-center">Nec pellentesque aliquet diam eget sed mi ornare vulputate duis. Posuere id habitasse quis ac ac. Pellentesque eget sed ut tincidunt cras. Ipsum nec placerat vitae orci. Accumsan amet commodo montes, aenean velit gravida tristique montes. Porttitor velit cras venenatis, amet curabitur ultricies ac dictum. </p>
                            <p className=" font-poppins font-medium text-sm text-center pt-4 pb-[2px]">Marrie James-CEO</p>
                            <p className="font-poppins font-normal text-sm text-black opacity-70 text-center">Limana Enterprises, CA</p>
                        </div>
                        <div className="flex lg:flex-row flex-col mt-5 gap-5 items-center justify-center">
                            <div className=" min-h-[207px]  shadow-sliderComp pt-[25px] lg:pb-8 pb-3 lg:px-9 px-4 lg:w-1/2 xsm:w-8/12">
                                <p className=" font-poppins font-normal text-sm text-black opacity-70 text-center">Elementum risus cursus vehicula consectetur sapien ut tempor, venenatis turpis. Sed mauris enim.</p>
                                <p className=" font-poppins font-medium text-sm text-center pt-4 pb-[2px]">Ralph Edwards-CEO</p>
                                <p className="font-poppins font-normal text-sm text-black opacity-70 text-center">Limana Enterprises, CA</p>
                            </div>
                            <div className=" min-h-[207px]  shadow-sliderComp pt-[25px] lg:pb-8 pb-3 lg:px-9 px-4 lg:w-1/2 xsm:w-8/12">
                                <p className=" font-poppins font-normal text-sm text-black opacity-70 text-center">Elementum risus cursus vehicula consectetur sapien ut tempor, venenatis turpis. Sed mauris enim.</p>
                                <p className=" font-poppins font-medium text-sm text-center pt-4 pb-[2px]">Darrell Steward-Head</p>
                                <p className="font-poppins font-normal text-sm text-black opacity-70 text-center">Limana Enterprises, CA</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="sliderItems">
                    <div className=" flex flex-col items-center justify-center">
                        <div className=" w-full min-h-[270px] shadow-sliderComp lg:pt-[58px] pt-[48px] lg:pb-8 pb-4 lg:px-[75px] px-4 relative">
                            <div className=" absolute  w-[86px] h-[86px] top-[-31px] left-[50%] translate-x-[-50%]">
                                <img src={VertSliderImg} alt="image of a girl" className=" w-full h-full" />
                            </div>
                            <p className=" font-poppins font-normal text-sm text-black opacity-70 text-center">Nec pellentesque aliquet diam eget sed mi ornare vulputate duis. Posuere id habitasse quis ac ac. Pellentesque eget sed ut tincidunt cras. Ipsum nec placerat vitae orci. Accumsan amet commodo montes, aenean velit gravida tristique montes. Porttitor velit cras venenatis, amet curabitur ultricies ac dictum. </p>
                            <p className=" font-poppins font-medium text-sm text-center pt-4 pb-[2px]">Marrie James-CEO</p>
                            <p className="font-poppins font-normal text-sm text-black opacity-70 text-center">Limana Enterprises, CA</p>
                        </div>
                        <div className="flex lg:flex-row flex-col mt-5 gap-5 items-center justify-center">
                            <div className=" min-h-[207px]  shadow-sliderComp pt-[25px] lg:pb-8 pb-3 lg:px-9 px-4 lg:w-1/2 xsm:w-8/12">
                                <p className=" font-poppins font-normal text-sm text-black opacity-70 text-center">Elementum risus cursus vehicula consectetur sapien ut tempor, venenatis turpis. Sed mauris enim.</p>
                                <p className=" font-poppins font-medium text-sm text-center pt-4 pb-[2px]">Ralph Edwards-CEO</p>
                                <p className="font-poppins font-normal text-sm text-black opacity-70 text-center">Limana Enterprises, CA</p>
                            </div>
                            <div className=" min-h-[207px]  shadow-sliderComp pt-[25px] lg:pb-8 pb-3 lg:px-9 px-4 lg:w-1/2 xsm:w-8/12">
                                <p className=" font-poppins font-normal text-sm text-black opacity-70 text-center">Elementum risus cursus vehicula consectetur sapien ut tempor, venenatis turpis. Sed mauris enim.</p>
                                <p className=" font-poppins font-medium text-sm text-center pt-4 pb-[2px]">Darrell Steward-Head</p>
                                <p className="font-poppins font-normal text-sm text-black opacity-70 text-center">Limana Enterprises, CA</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="sliderItems">
                    <div className=" flex flex-col items-center justify-center">
                        <div className=" w-full min-h-[270px] shadow-sliderComp lg:pt-[58px] pt-[48px] lg:pb-8 pb-4 lg:px-[75px] px-4 relative">
                            <div className=" absolute  w-[86px] h-[86px] top-[-31px] left-[50%] translate-x-[-50%]">
                                <img src={VertSliderImg} alt="image of a girl" className=" w-full h-full" />
                            </div>
                            <p className=" font-poppins font-normal text-sm text-black opacity-70 text-center">Nec pellentesque aliquet diam eget sed mi ornare vulputate duis. Posuere id habitasse quis ac ac. Pellentesque eget sed ut tincidunt cras. Ipsum nec placerat vitae orci. Accumsan amet commodo montes, aenean velit gravida tristique montes. Porttitor velit cras venenatis, amet curabitur ultricies ac dictum. </p>
                            <p className=" font-poppins font-medium text-sm text-center pt-4 pb-[2px]">Marrie James-CEO</p>
                            <p className="font-poppins font-normal text-sm text-black opacity-70 text-center">Limana Enterprises, CA</p>
                        </div>
                        <div className="flex lg:flex-row flex-col mt-5 gap-5 items-center justify-center">
                            <div className=" min-h-[207px]  shadow-sliderComp pt-[25px] lg:pb-8 pb-3 lg:px-9 px-4 lg:w-1/2 xsm:w-8/12">
                                <p className=" font-poppins font-normal text-sm text-black opacity-70 text-center">Elementum risus cursus vehicula consectetur sapien ut tempor, venenatis turpis. Sed mauris enim.</p>
                                <p className=" font-poppins font-medium text-sm text-center pt-4 pb-[2px]">Ralph Edwards-CEO</p>
                                <p className="font-poppins font-normal text-sm text-black opacity-70 text-center">Limana Enterprises, CA</p>
                            </div>
                            <div className=" min-h-[207px]  shadow-sliderComp pt-[25px] lg:pb-8 pb-3 lg:px-9 px-4 lg:w-1/2 xsm:w-8/12">
                                <p className=" font-poppins font-normal text-sm text-black opacity-70 text-center">Elementum risus cursus vehicula consectetur sapien ut tempor, venenatis turpis. Sed mauris enim.</p>
                                <p className=" font-poppins font-medium text-sm text-center pt-4 pb-[2px]">Darrell Steward-Head</p>
                                <p className="font-poppins font-normal text-sm text-black opacity-70 text-center">Limana Enterprises, CA</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="sliderItems">
                    <div className=" flex flex-col items-center justify-center">
                        <div className=" w-full min-h-[270px] shadow-sliderComp lg:pt-[58px] pt-[48px] lg:pb-8 pb-4 lg:px-[75px] px-4 relative">
                            <div className=" absolute  w-[86px] h-[86px] top-[-31px] left-[50%] translate-x-[-50%]">
                                <img src={VertSliderImg} alt="image of a girl" className=" w-full h-full" />
                            </div>
                            <p className=" font-poppins font-normal text-sm text-black opacity-70 text-center">Nec pellentesque aliquet diam eget sed mi ornare vulputate duis. Posuere id habitasse quis ac ac. Pellentesque eget sed ut tincidunt cras. Ipsum nec placerat vitae orci. Accumsan amet commodo montes, aenean velit gravida tristique montes. Porttitor velit cras venenatis, amet curabitur ultricies ac dictum. </p>
                            <p className=" font-poppins font-medium text-sm text-center pt-4 pb-[2px]">Marrie James-CEO</p>
                            <p className="font-poppins font-normal text-sm text-black opacity-70 text-center">Limana Enterprises, CA</p>
                        </div>
                        <div className="flex lg:flex-row flex-col mt-5 gap-5 items-center justify-center">
                            <div className=" min-h-[207px]  shadow-sliderComp pt-[25px] lg:pb-8 pb-3 lg:px-9 px-4 lg:w-1/2 xsm:w-8/12">
                                <p className=" font-poppins font-normal text-sm text-black opacity-70 text-center">Elementum risus cursus vehicula consectetur sapien ut tempor, venenatis turpis. Sed mauris enim.</p>
                                <p className=" font-poppins font-medium text-sm text-center pt-4 pb-[2px]">Ralph Edwards-CEO</p>
                                <p className="font-poppins font-normal text-sm text-black opacity-70 text-center">Limana Enterprises, CA</p>
                            </div>
                            <div className=" min-h-[207px]  shadow-sliderComp pt-[25px] lg:pb-8 pb-3 lg:px-9 px-4 lg:w-1/2 xsm:w-8/12">
                                <p className=" font-poppins font-normal text-sm text-black opacity-70 text-center">Elementum risus cursus vehicula consectetur sapien ut tempor, venenatis turpis. Sed mauris enim.</p>
                                <p className=" font-poppins font-medium text-sm text-center pt-4 pb-[2px]">Darrell Steward-Head</p>
                                <p className="font-poppins font-normal text-sm text-black opacity-70 text-center">Limana Enterprises, CA</p>
                            </div>
                        </div>
                    </div>
                </div>
            </Slider>
        </div>
    );
}

export default VerticalSwipeToSlide;
