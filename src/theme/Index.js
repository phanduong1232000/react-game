import React from 'react'
import Abouthome from '../component/index/aboutHOME/Abouthome'
import AboutSQF from '../component/index/aboutSQF/AboutSQF'
import Footer from '../component/index/footer/Footer'
import Header from '../component/index/header/Header'
import Monneynft from '../component/index/moneyNFT/Monneynft'
import Partner from '../component/index/partner/Partner'
import Sharetoken from '../component/index/shareTOKEN/Sharetoken'
import Timeline from '../component/index/timeline/Timeline'

export default function Index() {
  return (
    <div>
        <Header />
        <Abouthome />
        <AboutSQF />
        <Monneynft />
        <Sharetoken />
        <Timeline />
        <Partner />
        <Footer />
    </div>
  )
}
