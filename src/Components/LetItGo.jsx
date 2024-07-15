import { LetItGoBackImg } from "../Assets/Images/WEBp"

const LetItGo = () => {
    return (
        <section className="bg-cover bg-center bg-no-repeat py-lmd wideProp" style={{ backgroundImage: `url(${LetItGoBackImg})` }}>
            <div className="flex items-center justify-center px-3">
                <div className="letGoBox backdrop-blur-[5px]" data-aos="zoom-in">
                    <p className=" font-sans font-normal md:text-lg text-3xl text-center text-white lg:text-nowrap">ARE YOU OVER YOUR EX?</p>
                    <p className=" font-poppins font-normal xsm:text-sm max-xsm:text-xs text-white text-center pt-2 pb-8">Most women don't even realize how their past experiences affect their lives today. Assisting you to overcome this situation is what we do.</p>
                    <button className="findOutBtn hover:bg-whiteGradient hover:text-blue-clr hover:shadow-lg">Let’s find it out</button>
                </div>
            </div>
        </section>
    )
}

export default LetItGo
