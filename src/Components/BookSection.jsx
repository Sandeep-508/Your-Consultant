import { BookSecBackImg } from "../Assets/Images/WEBp"
import { BookSecTextFirst, BookSecTextSecond } from '../Assets/constants'
import Btns from "./Btns"

const BookSection = () => {
    return (
        <section>
            <div className="bg-bookSecBg  pt-[71px] wideProp">
                <div className="max-container pb-sm">
                    <div className="-mx-3 flex flex-wrap flex-row justify-between">
                        <div className=" xl:w-7/12 lg:w-6/12 w-full px-3 max-lg:flex max-lg:items-center max-lg:justify-center">
                            <p className=" font-normal xl:text-lg text-3xl">REQUEST YOUR <br className="brGetSec" /> <span className=" text-text-red">NON-BINDING</span>  STRATEGY <br className="brGetSec" />METTING NOW!</p>
                        </div>
                        <div className=" xl:w-5/12 lg:w-6/12 w-full px-3 flex items-center justify-start lg:pt-0 pt-6">
                            <div className=" flex items-start justify-start gap-3">
                                <div className=" w-[2px] h-[121px] bg-footer-bg mt-[5px]"></div>
                                <p className=" font-poppins font-normal text-base">Click on the button below, choose an <br className="brGetSec" /> appointment and answer the questions truthfully. <br className="brGetSec" /> One of our strategy consultants will then contact <br className="brGetSec" /> you and conduct your free consultation. We can <br /> advise you on the following topics: </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-cover bg-center bg-no-repeat pt-lmd lg:pb-xl pb-lmd max-xsm:py-sm flex flex-col justify-center items-center wideProp" style={{ backgroundImage: `url(${BookSecBackImg})` }}>
                <div className="-mx-3 flex flex-wrap items-center justify-center max-w-[750px] max-md:gap-3" data-aos="flip-left">
                    {BookSecTextFirst.map((boxes, index) =>
                        <div className=" w-[250px] h-[200px] flex items-center justify-center px-6 font-poppins bg-letGoBg hover:bg-footer-bg text-white font-normal text-base ease-in-out duration-300">
                            {boxes.value}
                        </div>
                    )}
                </div>
                <div className="-mx-3 flex flex-wrap items-center justify-center max-w-[1000px] mt-[34px] pb-sm max-lg:gap-3" data-aos="flip-right">
                    {BookSecTextSecond.map((boxes, index) =>
                        <div className=" w-[250px] h-[200px] flex items-center justify-center px-6 font-poppins bg-letGoBg hover:bg-footer-bg text-white font-normal text-base ease-in-out duration-300">
                            {boxes.value}
                        </div>
                    )}
                </div>
                <Btns />
            </div>
        </section >
    )
}

export default BookSection
