import React, { useEffect, useState } from 'react';
import { Link, Events } from 'react-scroll';
import floatingCircleImg from '../images/floatingCircle.png';

const Navbar = () => {

    const handleSetActive = (to) => {
        console.log(to);
    }

    const [isShowed, setShow] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", (e) => {
            console.log(e);
            console.log(window.pageYOffset, window.innerHeight, window.pageYOffset/window.innerHeight);
            // if (window.innerHeight * (5) < window.pageYOffset && window.pageYOffset < window.innerHeight * 10.45) {
            //     document.querySelector("#nav1label").className = "flex items-center navbarW active-nav";
            // } else {
            //     document.querySelector("#nav1label").className = "flex items-center navbarW";
            // }
 
            // if (window.innerHeight * (10.45) < window.pageYOffset && window.pageYOffset < window.innerHeight * 15.95) {
            //     document.querySelector("#nav2label").className = "flex items-center navbarW active-nav";
            // } else {
            //     document.querySelector("#nav2label").className = "flex items-center navbarW";
            // }

            // if (window.innerHeight * (15.95) <= window.pageYOffset && window.pageYOffset < window.innerHeight * 33.45) {
            //     document.querySelector("#nav3label").className = "flex items-center navbarW active-nav";
            // } else {
            //     document.querySelector("#nav3label").className = "flex items-center navbarW";
            // }
        });
        
    }, []);

    // Events.scrollEvent.register('scroll', function(to, element) {
    //     console.log('begin', to, element);
    // });

      
    // Events.scrollEvent.register('end', function(to, element) {
    //     console.log('end', to, element);
    // });

    const changeShowStatus = () => {
        // setShow(!isShowed);
    }

    return ( 
        <>
        <div id="floatingCircle" className="fixed floatingCircle" onClick={changeShowStatus}> 
            <img src={floatingCircleImg} alt="" />
        </div>
        {isShowed && <div id="floatingPopup" className="fixed floatingPopup">
            <div className="popupTitle">
                Title
            </div>
            <div className="popupText">
                Coming soon !
            </div>
            <div className="popupCloseBtn" onClick={changeShowStatus}>
                Close
            </div>
        </div>}
        <nav id="navbar" className="z-10 h-screen flex right-full flex-col fixed text-white justify-center items-end pr-4 hidden">
            <Link id="homeNavbar" activeClass="active-nav" to='home' 
                spy={true} smooth={true} offset={0} duration={500} 
                className="flex navbarW justify-items-end">
                <span>HOME</span>
                <svg className="w-6 h-6 transform rotate-90" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" /></svg>
            </Link>
            <Link activeClass="active-nav" to='videoPanel' 
                spy={true} smooth={true} offset={0} duration={500} 
                className="flex items-center navbarW" onClick={() => {
                    window.location.href = "#svideo";
                }}>
                <span>形象影片</span>
                <svg className="w-6 h-6 transform rotate-90" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" /></svg>
            </Link>
            <Link id="nav1label" activeClass="active-nav" to='productPanel' 
                spy={true} smooth={true} offset={0} duration={500}
                className="flex items-center navbarW">
                <span>LatteGo大升級</span>
                <svg className="w-6 h-6 transform rotate-90" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" /></svg>
            </Link>
            <Link id="nav2label" activeClass="active-nav" to='productPanel3' 
                spy={true} smooth={true} offset={0} duration={500} 
                className="flex items-center navbarW">
                <span>其他升級重點</span>
                <svg className="w-6 h-6 transform rotate-90" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" /></svg>
            </Link>
            <Link id="nav3label" activeClass="active-nav" to='productPanel5' 
                spy={true} smooth={true} offset={0} duration={500} 
                className="flex items-center navbarW">
                <span>經典特色</span>
                <svg className="w-6 h-6 transform rotate-90" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" /></svg>
            </Link>
            <Link id="shop" activeClass="active-nav" to='shopPanel' 
                spy={true} smooth={true} offset={0} duration={500} 
                className="flex items-center navbarW">
                <span>販售店面</span>
                <svg className="w-6 h-6 transform rotate-90" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" /></svg>
            </Link>
            <Link activeClass="active-nav" to='specPanel' 
                spy={true} smooth={true} offset={0} duration={500}             
                className="flex items-center navbarW">
                <span>技術規格</span>
                <svg className="w-6 h-6 transform rotate-90" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" /></svg>
            </Link>
        </nav>
        </>
        
    )
}

export default Navbar;