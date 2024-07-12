import { quotationImage, seventhSecIntro } from "../Assets/Images/WEBp"
import VerticalSwipeToSlide from "./VerticalSlider"

const Reviews = () => {
    return (
        <section className=" flex flex-col items-center justify-center">
            <div className="max-container relative pb-[146px]">
                <div className=" absolute bottom-[18px] xxl:start-[-212px] xl:start-[-180px] lg:-start-6 start-0 lg:w-[212px] lg:h-[330px] w-[110px] h-[160px]">
                    <img src={seventhSecIntro} alt="section introducer" className=" w-full h-full" />
                </div>
                <p className=" font-sans text-lg font-normal text-center">WHAT OUR <span className="text-text-red">CLIENTS</span> SAY</p>
                <div className="max-w-[820px] slideContent relative" data-aos="flip-up">
                    <div className=" absolute lg:end-[-111px] end-0 lg:top-[80px] max-md:top-6 md:w-[98px] w-[50px] md:h-[69px] h-[30px]">
                        <img src={quotationImage} alt="decorative image" className=" w-full h-full" />
                    </div>
                    <VerticalSwipeToSlide />
                </div>
            </div>
        </section>
    )
}

export default Reviews
