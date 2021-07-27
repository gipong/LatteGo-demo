import React, { useRef, useState, useEffect } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Home_m from './components/Home_m';
import VideoPanel from './components/VideoPanel';
import ProductPanel from './components/ProductPanel';
import ProductPanel2 from './components/ProductPanel2';
import ProductPanel3 from './components/ProductPanel3';
import ProductPanel4 from './components/ProductPanel4';
import ProductPanel5 from './components/ProductPanel5';
import ProductPanel6 from './components/ProductPanel6';
import ProductPanel7 from './components/ProductPanel7';
import ProductPanel8 from './components/ProductPanel8';
import ProductPanel9 from './components/ProductPanel9';
import ProductPanel10 from './components/ProductPanel10';
import ProductPanel11 from './components/ProductPanel11';
import ShopPanel from './components/ShopPanel';
import SpecPanel from './components/SpecPanel';
import PhilipsLogo from "./images/philips-logo.png";

function App() {
  const ref = useRef(null);

  const videoRef = useRef(null);
  
  const [preloader, setPreload] = useState(true);
  useEffect(() => {
    if (!preloader && ref) {
      if (typeof window === "undefined" || !window.document) {
        return;
      }
    }
  }, [preloader]);
  
  const [timer, setTimer] = React.useState(3);
  const clear = () => {
      window.clearInterval(ref.current);
      setPreload(false);
  };

  useEffect(() => {
      ref.current = window.setInterval(() => {
        setTimer((time) => time - 1);
      }, 1000);
      return () => clear();
  }, []);
  
  useEffect(() => {
      if (timer === 0) {
        clear();
      }
  }, [timer]);


  
  if (typeof window === "undefined" || !window.document) {
      return null;
  }

  return (
    <>
      {preloader ? (
        <div id="preloader-panel" className="flex flex-col items-center justify-center h-screen w-full bg-gray-700 text-white">
            <img src={PhilipsLogo} className="preloader-logo p-8"></img>
            <h1 className="font-bold">LatteGo EP5477</h1>
        </div>
      ) : window.innerWidth > 0 ? (
        <>
          <Navbar/>
          <main className="main-section lg:h-screen md:h-full">
            <Home />
            <VideoPanel />
            <ProductPanel/>
            <ProductPanel2/>
            <ProductPanel3/>
            <ProductPanel4/>
            <ProductPanel5/>
            <ProductPanel6/>
            {/* <ProductPanel7/> */}
            <ProductPanel8/>
            <ProductPanel9/>
            <ProductPanel10/>
            <ProductPanel11/>
            <ShopPanel/>
            <SpecPanel/>
          </main>
        </>
      ) : (
        <>
          <main className="mbg">
            <Home_m />
          </main>
        </>
      )}
    </>
  );
}

export default App;
