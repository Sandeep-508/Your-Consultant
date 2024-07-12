import { TargetGrpText } from "../Assets/constants"
import { forthSecIntro, forthSecVector, sliderBg, TargetGrpBgImg } from "../Assets/Images/WEBp"
import Btns from "./Btns"
import Fade from "./SlickSlider"

const TargetSec = () => {
    return (
        <section>
            <div className=" bg-bookSecBg wideProp">
                <div className="max-container flex lg:justify-end justify-center py-12">
                    <div className="max-w-[881px] flex -mx-3 flex-wrap flex-row w-full">
                        <div className=" md:w-6/12 w-full px-3 max-lg:flex max-lg:items-center max-lg:justify-center">
                            <p className=" font-normal lg:text-lg xsm:text-nm text-3xl"><span className=" text-text-red">TARGET</span> GROUP</p>
                        </div>
                        <div className=" md:w-6/12 w-full px-3 flex items-center md:justify-end justify-center lg:pt-0 pt-6">
                            <div className=" flex items-start justify-start gap-3">
                                <div className=" line mt-[5px]"></div>
                                <p className=" font-poppins font-normal text-base">The coaching is aimed at married women <br className="xsm:block hidden" /> who have already separated or are <br className="xsm:block hidden" /> thinking of separating.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-cover bg-center bg-no-repeat md:py-lmd py-md relative z-10 wideProp" style={{ backgroundImage: `url(${TargetGrpBgImg})` }}>
                <div className="max-container relative max-lg:flex max-lg:items-center max-lg:flex-col" data-aos="zoom-in">
                    <div className=" flex lg:flex-col flex-row max-md:flex-wrap gap-8 max-lg:items-center max-lg:justify-center">
                        {TargetGrpText.map((boxes, index) => <div className=" TargetBoxProp backdrop-blur-[4px] ease-in-out duration-300 border border-white-150">{boxes.value}</div>)}
                    </div>
                    <div className=" lg:absolute relative lg:-bottom-[138px] -bottom-8 z-10 lg:right-[40px]" data-aos="zoom-out">
                        <p className="TargetBoxProp lg:h-[272px] backdrop-blur-[4px]">To understand how to let go of your partner, you need a detailed step-by-step action plan, which you will receive from me in a 1:1 coaching session.</p>
                    </div>
                </div>
            </div>
            <div className="pt-2 lg:pb-xl xsm:pb-lmd pb-md">
                <div className="max-container">
                    <div className="md:min-h-[265px] min-h-[200px] relative z-[1]">
                        <div className="absolute right-0 md:w-[204px] md:h-[265px] w-[150px] h-[225px]">
                            <img src={forthSecIntro} alt="section introducer" />
                        </div>
                        <div className=" absolute md:w-[615px] md:h-[612px] w-[424px] h-[530px] top-[-122%] wide:top-[-128%] rotate-[13deg] wide:rotate-[17deg] left-[-18%] z-[1]">
                            <img src={forthSecVector} alt="section decoratore image" className=" w-full h-full" />
                        </div>
                    </div>
                    <div className=" -mx-3 flex flex-wrap flex-row pt-6 max-lg:items-center max-lg:justify-center">
                        <div className=" lg:w-6/12 md:w-8/12 w-full px-3 flex flex-col lg:items-start items-center justify-center" data-aos="zoom-in-right">
                            <p className=" font-sans text-lmd font-normal text-black lg:text-start text-center">THE FOUR PHASES OF <br /><span className=" font-light font-sans text-lg">SEPARATION
                                <span className="text-text-red font-light font-sans text-lg"> MINDSET</span></span></p>
                            <p className=" font-poppins font-normal text-base text-black pt-5 pb-8 lg:text-start text-center max-w-[484px]">There are 4 typical separation phases. The 4 phases are not always clearly separated from each other and can overlap.</p>
                            <Btns />
                        </div>
                        <div className=" lg:w-6/12 md:w-7/12 w-full px-3 lg:pt-0 pt-6" data-aos="zoom-in-left">
                            <div className=" relative" style={{ backgroundImage: `${sliderBg}` }}>
                                <div className="relative z-10 h-[448px]">
                                    <Fade />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section >
    )
}

export default TargetSec
