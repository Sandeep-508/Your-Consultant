import { useState } from "react";
import { arrowBtnPng, boyColImg, BtnPng, fifthSectionIntro, lawyerSecPosImg, sixthSecIntroducer } from "../Assets/Images/WEBp"

const About = () => {
    const [btnText, setBtnText] = useState("Learn more about the agency")
    window.addEventListener("resize", () => {
        if (window.innerWidth < 576) {
            setBtnText("Learn More")
        } else {
            setBtnText("Learn more about the agency")
        }
    });

    return (
        <section className="pb-xxl">
            <div className="SecIntro min-h-[74px] max-container pt-2 lg:pb-[52px] pb-6">
                <img src={fifthSectionIntro} alt="section introducer" width={151} />
            </div>
            <div className="max-container relative">
                <div className=" absolute end-0 lg:bottom-[-265px] bottom-[-180px] lg:w-[93px] w-[60px] lg:h-[265px] h-[150px]">
                    <img src={sixthSecIntroducer} alt="section introducer" className=" w-full h-full" />
                </div>
                <div className="-mx-3 flex flex-wrap flex-row relative">
                    <div className=" absolute right-[-15%] bottom-0 w-[738px] h-[211px]">
                        <img src={lawyerSecPosImg} alt="decorator image" className=" w-full h-full" />
                    </div>
                    <div className=" md:w-6/12 w-full px-3" data-aos="flip-left">
                        <div className=" flex items-center justify-center w-full max-md:h-[600px] max-xsm:h-auto">
                            <img src={boyColImg} alt="boy image" className=" w-full h-full" />
                        </div>
                    </div>
                    <div className=" md:w-6/12 w-full px-3 lg:pt-0 pt-4" data-aos="flip-right">
                        <p className=" font-sans font-normal lg:text-lg md:text-nm xsm:text-lg  text-nm text-black ">LAWYER <span className="text-text-red">&</span> DIVORCE COACH</p>
                        <p className="lg:text-3xl md:text-lmd font-sans font-normal xsm:text-3xl text-lmd text-black"><span className="text-text-red">M</span>ARC <span className="text-text-red">J</span>OCHAIM <span className="text-text-red">H</span>UBRICH</p>
                        <p className=" font-sans text-2xl font-medium pt-[30px] pb-3">About the mindset agency coach</p>
                        <p className=" font-poppins lg:text-2xl text-sm font-medium opacity-70">Marc J. Hubrich is the founder of the mindset agency specializing in consulting services.</p>
                        <button>
                            <div className='BtnProp hover:bg-whiteGradient hover:text-blue-clr px-8 py-4 mt-[35px]'>
                                {btnText}
                                <img src={arrowBtnPng} alt="button decorative png" width={39} height={47} />
                            </div>
                        </button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About
