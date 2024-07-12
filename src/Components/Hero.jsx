import React, { useState } from 'react'
import { CallLog, cornerHeroImg, HeroPng, SecIntro } from '../Assets/Images/WEBp'
import Btns from './Btns'

const Hero = () => {
    const [navMenu, setNavMenu] = useState(true)
    function handleNavMenu() {
        let body = document.body
        setNavMenu(!navMenu)
        if (navMenu) {
            body.style.overflow = "hidden"
        } else {
            body.style.overflow = "auto"
        }
    }

    function RemoveNavBar() {
        let body = document.body
        setNavMenu(true)
        body.style.overflow = "auto"
    }
    return (
        <header className=' bg-cover xsm:bg-center max-xsm:bg-left bg-no-repeat md:min-h-[810px] max-md:min-h-[680px] relative wideProp' style={{ backgroundImage: `url(${HeroPng})` }}>
            <nav className='max-container max-wide:relative z-10 max-md:justify-end max-md:items-end max-md:flex max-md:pt-4'>
                <div className={` flex md:items-center md:justify-end lg:gap-10 md:gap-6 gap-4 md:pt-6 sm:pt-2 mediaMenuIcon ${navMenu ? "show" : ""}`}>
                    <a href="#" className=' font-sans text-white max-md:text-text-red hover:text-blue-clr' onClick={RemoveNavBar}>Benifits</a>
                    <a href="#" className=' font-sans text-white max-md:text-text-red hover:text-blue-clr' onClick={RemoveNavBar}>Testimonials</a>
                    <button className=' bg-linear-grad lg:px-7 md:px-4 sm:px-2 md:py-4 sm:py-3 text-white font-inter hover:bg-whiteGradient hover:text-blue-clr hover:shadow-lg'>Book consultation now</button>
                </div>
                <div className=' flex flex-col items-center justify-between w-6 h-6 md:hidden z-20 relative' onClick={handleNavMenu}>
                    <span className={` bg-black w-full h-[3px] ${!navMenu ? "rotate-45 absolute top-[11px]" : "rotate-0"}`}></span>
                    <span className={` bg-black w-full h-[3px] ${!navMenu ? "hidden" : "block"}`}></span>
                    <span className={` bg-black w-full h-[3px] ${!navMenu ? "-rotate-45 absolute bottom-[11px]" : "rotate-0"}`}></span>
                </div>
            </nav>
            <div className=' max-container padding-t pb-12 wide:relative'>
                <div className=' absolute lg:w-[615px] lg:h-[612px] max-lg:w-[300px] max-lg:h-[300px] top-0 start-0 wide:start-[-24%] lg:translate-x-[-87px] lg:translate-y-[-88px]'>
                    <img src={cornerHeroImg} alt="decorative hero section image" className=' w-full h-full' />
                </div>
                <div className=' absolute lg:w-[160px] lg:h-[330px] max-lg:w-[100px] max-lg:h-[210px] lg:bottom-[-200px] max-lg:bottom-[-110px] max-xsm:bottom-[-80px]'>
                    <img src={SecIntro} alt="section introducer" className=' w-full h-full' />
                </div>
                <div className='grid lg:grid-cols-2 md:grid-cols-1'>
                    <div>
                        <p className=' font-sans font-normal text-md text-text-red'>Marc joachim hubrich</p>
                        <p className=' font-sans font-normal xsm:text-xl text-3xl'>Now I let you <br />
                            go!</p>
                        <p className=' font-poppins xsm:text-sm max-xsm:text-xs font-normal pt-[7px] pb-[32px]'>For women who do not want to be completely dragged down by <br className=' br-media-prop' /> a SEPARATION. <br className=' br-media-prop' />
                            How to let go of your EX so you can leave him behind
                            without <br className=' br-media-prop' /> having to run to a therapist right away.</p>
                        <div className=' flex items-center justify-start gap-md md:flex-nowrap sm:flex-wrap'>
                            <Btns />
                            <div>
                                <a href="tel:1234"><img src={CallLog} alt="call logs" width={42} height={42} /></a>
                            </div>
                        </div>
                    </div>
                    <div className=' lg:h-lg sm:mt-6 items-end flex lg:justify-start max-lg:justify-end max-xsm:justify-start'>
                        <div className='line me-4'></div>
                        <div className=' flex items-start justify-start flex-wrap h-sm mb-[5px]'>
                            <p className=' font-sans font-light text-sm xsm:text-white max-xsm:text-black max-xsm:opacity-70 max-xsm:me-2'>DIE WICHTIGSTEN <br className='max-xsm:br-media-prop' /> ASPEKTE EINER <br className='max-xsm:br-media-prop' /> TRENNUNG:</p>
                            <div className='  flex flex-col xsm:ms-8 items-start mb-[6px]'>
                                <div className=' flex items-center justify-center gap-2'>
                                    <div className=' w-1 h-1 rounded-full xsm:bg-white bg-black opacity-70'></div>
                                    <p className=' font-poppins font-medium text-sm xsm:text-white max-xsm:text-black max-xsm:opacity-70 capitalize'>physische Trennung</p>
                                </div>
                                <div className=' flex items-center justify-center gap-2'>
                                    <div className=' w-1 h-1 rounded-full xsm:bg-white bg-black opacity-70'></div>
                                    <p className=' font-poppins font-medium text-sm xsm:text-white max-xsm:text-black max-xsm:opacity-70 capitalize'>mentale Trennung
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Hero
