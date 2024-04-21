import { useState, useRef, useEffect } from 'react';
import './App.css';
import Header from './Components/Header';
import Welcome from './Components/Welcome';
import ImageCarousel from './Components/ImageCarousel';
import packageInfo from './data/carouselData.json';
import OurBlend from './Components/OurBlend';
import AboutUs from './Components/AboutUs';
import Footer from './Components/Footer';
import Menu from './Components/Menu';

function App() {

  const [menu, setMenu] = useState(false);

  const homeRef = useRef();
  const menuRef = useRef();
  const blendRef = useRef();
  const aboutRef = useRef();
  const contactRef = useRef();

  const [screenSize, setScreenSize] = useState(window.innerWidth < 1100);
  
  const updateView = () => {
    setScreenSize(window.innerWidth < 1100);
  }

  useEffect(() => {
    window.addEventListener('resize', updateView);
    return () => window.removeEventListener('resize', updateView);
  });

  var data

  if (screenSize) {
    data = packageInfo.slides
  } else {
    data = packageInfo.largeSlides
  }

  return (
    <div className='bg-stone-200'>
      <Header menu={menu} setMenu={setMenu}menuRef={menuRef} about={aboutRef} blend={blendRef} contact={contactRef} home={homeRef} />
      <Menu setMenu={setMenu} menu={menu} menuRef={menuRef} about={aboutRef} blend={blendRef} contact={contactRef} home={homeRef} />
      <div className='relative'>
        <Welcome home={homeRef} />
        <div className={`${screenSize ? 'mt-4 mb-8' : 'mt-16 mb-12'} border-t-4 border-gray-900 w-5/6 m-auto`}></div>
        <ImageCarousel data={data} menu={menuRef} />
        <div className={`${screenSize ? 'mt-14 mb-8' : 'mt-16 mb-12'} border-t-4 border-gray-900 w-5/6 m-auto`}></div>
        <OurBlend blend={blendRef} />
        <div className={`${screenSize ? 'mt-14 mb-12' : 'mt-16 mb-12'} border-t-4 border-gray-900 w-5/6 m-auto`}></div>
        <AboutUs about={aboutRef} />
        <Footer contact={contactRef} />
        <div className={`${menu ? 'opacity-50' : 'opacity-0'} duration-500 bg-gray-900 absolute w-full h-full z-10 top-0 pointer-events-none`}></div>
      </div>
    </div>
  );
}

export default App;
