import { useState } from "react";
import { BtnPng } from "../Assets/Images/WEBp"


const Btns = () => {
    const [btnText, setBtnText] = useState("Book a non-binding initial consultation now")
    window.addEventListener("resize", () => {
        if (window.innerWidth < 576) {
            setBtnText("Book Now")
        } else {
            setBtnText("Book a non-binding initial consultation now")
        }
    });

    return (
        <button className="bg-white rounded-[63px] hover:scale-105 transition-all text-start">
            <div className='BtnProp textLg'>
                <img src={BtnPng} alt="button decorative png" width={51} height={47} />
                {btnText}
            </div>
        </button>
    )
}

export default Btns