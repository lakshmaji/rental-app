import React, { FC, lazy, Suspense } from 'react';
import QuickSearch from '../components/home/QuickSearch';
import Navbar from '../components/navbar/Navbar';
import mainvectorsvg from '../assets/header/Vector.svg';
import Footer from '../components/footer/Footer';

const Explore = lazy(async () => await import('../components/home/Explore'));
const SectionAbout = lazy(async () => await import('../components/home/SectionAbout'));

const Home: FC = (): JSX.Element => {
  return (
    <>
      <header>
        <div className="container">
          <Navbar />
        </div>
        <div className="hero-section">
          <h1 className="title">
            Rethink your <br /> living & renting
          </h1>
          <h2 className="subtitle">Make your stay painless with us</h2>
          <QuickSearch />
          <div className="scroll-down-indicator">
            <i className="fa-solid fa-chevron-down"></i>
          </div>
        </div>
        <img src={mainvectorsvg} className="mask" alt="mask" />
      </header>
      <Suspense fallback={<div>loading...</div>}>
        <Explore />
      </Suspense>
      <Suspense fallback={<div>loading...</div>}>
        <SectionAbout />
      </Suspense>
      {/* TODO: move to layout */}
      <Footer />
    </>
  );
};

export default Home;
