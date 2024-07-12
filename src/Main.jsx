import React from 'react'
import Fault from './Components/Fault'
import WhatYoutGet from './Components/WhatYoutGet'
import TargetSec from './Components/TargetSec'
import LetItGo from './Components/LetItGo'
import About from './Components/About'
import Reviews from './Components/Reviews'
import BookSection from './Components/BookSection'

const Main = () => {
    return (
        <main className='overflow-hidden'>
            <Fault />
            <WhatYoutGet />
            <TargetSec />
            <LetItGo />
            <About />
            <Reviews />
            <BookSection />
        </main>
    )
}

export default Main
