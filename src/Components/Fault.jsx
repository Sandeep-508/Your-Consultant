import { useState } from "react";
import { faultPosImg, faultSecBackImg, secondSecIntro } from "../Assets/Images/WEBp"
import { faultFirstRow, faultSecondRow } from '../Assets/constants'
import Btns from "./Btns";


const Fault = () => {
    return (
        <section className="relative pb-[122px] padding-t">
            <div className=" max-container relative">
                <div className=" absolute md:w-[409px] md:h-[297px] max-md:w-[200px] max-md:h-[200px] xl:end-[-33%] end-[-20%] max-wide:top-[0]">
                    <img src={faultPosImg} alt="decorative image for fault section" className=" w-full h-full" />
                </div>
                <div className="max-container">
                    <div className="max-w-[806px] xsm:ml-auto max-xsm:mx-auto xl:me-[119px] lg:pt-0 pt-10">
                        <div className=" -mx-3 flex flex-wrap flex-row xsm:justify-between justify-center">
                            <div className=" md:w-7/12  px-3" data-aos="fade-up">
                                <p className=" font-sans lg:text-xl max-lg:text-lg max-md:text-3xl">IT'S NOT <br />
                                    &nbsp;&nbsp;&nbsp;&nbsp;<span className=" text-text-red">YOUR</span> FAULT!</p>
                            </div>
                            <div className=" lg:w-5/12 md:w-5/12 xsm:w-6/12 max-xsm:w-12/12 flex justify-center items-start gap-3 xsm:pt-0 pt-4" data-aos="fade-down">
                                <div className="mt-[5px] line"></div>
                                <p className=" ">It's not your fault for not knowing <br /> how to let go of the partner who no <br /> longer made you feel special.</p>
                            </div>
                        </div>
                    </div>
                    <p className=" font-sans font-normal xsm:text-2xl text-base text-black text-center md:pt-[58px] pt-6 md:pb-[34px] pb-5">How would you know when you are busy with completely different things at the moment:
                    </p>
                </div>
                <div className=" absolute xxl:end-[0] xl:end-[24px] max-xl:end-[48px] xl:w-[93px] max-xl:w-[48px] xl:h-[328px] max-xl:h-[200px] bottom-[-260%] max-lg:hidden">
                    <img src={secondSecIntro} alt="section introducer" />
                </div>
            </div>
            <div className=" grid justify-center bg-center bg-no-repeat bg-cover w-full wideProp" style={{ backgroundImage: `url(${faultSecBackImg})` }}>
                <div className="faultContainer max-lg:py-5">
                    <div className=" max-lg:flex  max-lg:flex-wrap flex lg:justify-end justify-center items-center max-md:gap-3">
                        {faultFirstRow.map((items, index) => <div key={index} className=" w-[250px] h-[162px] bg-fault-box flex items-center justify-center px-[26px] font-poppins text-sm text-white hover:bg-fault-box-hover transition-all backdrop-blur-[4px]" data-aos="flip-left">
                            <p className=" font-poppins text-sm font-normal text-white">{items.value}</p>
                        </div>)}
                    </div>
                    <div className=" flex lg:justify-start max-lg:flex-wrap max-lg:items-center justify-center lg:mt-[29px] mt-4 max-md:gap-3">
                        {faultSecondRow.map((items, index) => <div key={index} className=" w-[250px] h-[162px] bg-fault-box flex items-center justify-center px-[26px] font-poppins text-sm text-white hover:bg-fault-box-hover transition-all backdrop-blur-[4px]" data-aos="flip-right">
                            <p className=" font-poppins text-sm font-normal text-white">{items.value}</p>
                        </div>)}
                    </div>
                </div>
            </div>
            <p className=" font-poppins font-normal text-2xl text-black text-center pt-12 pb-5 px-3">You are not alone! Numerous women before you stood exactly at this point, where you are now.</p>
            <div className=" flex items-center justify-center">
                <Btns />
            </div>
            <div className=" absolute w-[48px] h-[200px] lg:hidden end-6 bottom-0">
                <img src={secondSecIntro} alt="section introducer" />
            </div>
        </section>
    )
}

export default Fault
