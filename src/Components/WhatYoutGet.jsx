import { getSecTextFirst, getSecTextSecond } from "../Assets/constants"
import { flowerRightImg, GettingFlower, leftFlowerImg, thirdSectionIntroducer } from "../Assets/Images/WEBp"

const WhatYoutGet = () => {
    return (
        <section className=" max-wide:relative">
            <div className="max-container wide:relative pb-[124px]">
                <div className=" absolute right-[-300px] w-[300px] h-[301px] top-[20%]">
                    <img src={flowerRightImg} alt="decorative flower image" className=" w-full h-full" />
                </div>
                <div className="absolute w-[300px] h-[301px] left-[-300px] bottom-0">
                    <img src={leftFlowerImg} alt="decorative flower image" className=" w-full h-full" />
                </div>
                <div className=" absolute w-[136px] h-[588px] bottom-6 z-10">
                    <img src={thirdSectionIntroducer} alt="section introducer" className=" w-full h-full" />
                </div>
                <div>
                    <div className=" flex items-center lg:justify-start justify-center flex-wrap">
                        <p className=" font-sans lg:text-xl max-lg:text-3xl max-md:text-nm"> <span className="font-sans lg:text-lg max-lg:text-3xl max-md:text-nm">WHAT YOU <br /> </span> WILL <span className=" text-text-red">GET</span></p>
                        <div className=" lg:w-[224px] lg:h-[216px] max-lg:w-[150px] max-lg:h-[150px]">
                            <img src={GettingFlower} alt="flower in the center of the texts" />
                        </div>
                        <div className="flex items-start justify-start gap-3 max-lg:max-w-[427px]">
                            <div className="line mt-[5px]"></div>
                            <p className=" font-poppins font-normal xsm:text-sm text-xs text-black">I will show you which steps are necessary for you to <br className="brGetSec" /> finally successfully let go of your EX. And I will <br className="brGetSec" /> support you to look confidently into your new future.</p>
                        </div>
                    </div>
                    <p className=" font-sans font-normal text-2xl text-center pt-12 pb-7">In a 1:1 live coaching session, we will clarify the following questions in particular:</p>
                    <div className=" flex max-lg:flex-wrap items-center justify-center">
                        {getSecTextFirst.map((items, index) => <div key={index} className=" font-poppins xsm:w-[380px] md:h-[230px] max-xsm:w-[300px] h-auto flex items-center justify-center md:py-0 py-8 px-[38px] hover:bg-getSecBg hover:text-footer-bg opacity-70" data-aos="flip-up">
                            {items.value}
                        </div>)}
                    </div>
                    <div className=" flex max-lg:flex-wrap items-center justify-center">
                        {getSecTextSecond.map((items, index) => <div key={index} className=" xsm:w-[380px] font-poppins md:h-[230px] max-xsm:w-[300px] h-auto flex items-center justify-center md:py-0 py-8  px-[38px] hover:bg-getSecBg hover:text-footer-bg opacity-70" data-aos="flip-down">
                            {items.value}
                        </div>)}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default WhatYoutGet
