import { FooterImg } from "../Assets/constants"
import { footerBgImg } from "../Assets/Images/WEBp"

const Footer = () => {
    const date = new Date();
    let year = date.getFullYear()
    return (
        <section className=" py-footerPy bg-center bg-cover bg-no-repeat wideProp" style={{ backgroundImage: `url(${footerBgImg})` }}>
            <div className=" flex max-xsm:flex-col-reverse xsm:items-end items-center justify-center max-xsm:gap-4 h-[155px] max-container relative">
                <div className=" xsm:absolute end-3 max-xsm:top-0 flex xsm:flex-col gap-3">
                    {FooterImg.map((images, href) => <div className=" w-[30px] h-[30px]">
                        <a href="#"><img src={images.value} alt="social media" className=" w-full h-full" /></a>
                    </div>)}
                </div>
                <p className=" font-poppins font-normal text-base text-white text-center">(c){year} MARC JOACHIM HUBRICH <br />
                    All Rights Reserved</p>
            </div>
        </section>
    )
}

export default Footer
