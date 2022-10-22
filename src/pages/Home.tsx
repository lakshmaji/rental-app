import React, { FC } from 'react'
import QuickSearch from '../components/home/QuickSearch'
import Navbar from '../components/navbar/Navbar'
import mainvectorsvg from "../assets/header/Vector.svg";
import Explore from '../components/home/Explore';
import Footer from '../components/footer/Footer';
import SectionAbout from '../components/home/SectionAbout';

interface Props {

}

const Home: FC<Props> = () => {
  return (
    <>
        <header>
            <div className="container">
                <Navbar />

            </div>
            <div className='hero-section'>
              <h1 className='title'>
                Rethink your <br /> living & renting
              </h1>
              <h2 className='subtitle'>Make your stay painless with us</h2>
              <QuickSearch />
              <div className='scroll-down-indicator'>
                <i className="fa-solid fa-chevron-down"></i>
              </div>
            </div>
            <img src={mainvectorsvg} className="mask" alt="mask" />


        </header>
        <Explore />
        <SectionAbout />
        {/* TODO: move to layout */}
        <Footer />

    </>
  )
}

export default Home