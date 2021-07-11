import React from 'react';
import { Link } from 'react-scroll';

const Navbar = () => {
    

    return ( 
        <nav id="navbar" className="z-10 h-screen flex right-full flex-col fixed text-white justify-center items-end pr-4">
            <Link activeClass="active-nav" to='home' 
                spy={true} smooth={true} offset={0} duration={500} 
                className="flex navbarW justify-items-end">
                <span>HOME</span>
                <svg className="w-6 h-6 transform rotate-90" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" /></svg>
            </Link>
            <Link activeClass="active-nav" to='videoPanel' 
                spy={true} smooth={true} offset={0} duration={500} 
                className="flex items-center navbarW">
                <span>形象影片</span>
                <svg className="w-6 h-6 transform rotate-90" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" /></svg>
            </Link>
            <Link activeClass="active-nav" to='productPanel' 
                spy={true} smooth={true} offset={0} duration={500} 
                className="flex items-center navbarW">
                <span>LatteGo介紹</span>
                <svg className="w-6 h-6 transform rotate-90" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" /></svg>
            </Link>
            <Link activeClass="active-nav" to='productPanel1' 
                spy={true} smooth={true} offset={0} duration={500} 
                className="flex items-center navbarW">
                <span>重點特色</span>
                <svg className="w-6 h-6 transform rotate-90" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" /></svg>
            </Link>
            <Link activeClass="active-nav" to='productPanel2' 
                spy={true} smooth={true} offset={0} duration={500} 
                className="flex items-center navbarW">
                <span>細部介紹</span>
                <svg className="w-6 h-6 transform rotate-90" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" /></svg>
            </Link>
            <Link activeClass="active-nav" to='productPanel3' 
                spy={true} smooth={true} offset={0} duration={500} 
                className="flex items-center navbarW">
                <span>口碑推薦</span>
                <svg className="w-6 h-6 transform rotate-90" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" /></svg>
            </Link>
            <Link activeClass="active-nav" to='shopPanel' 
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
            {/* <Link activeClass="active-nav" to='/' className="flex items-center navbarW">
                <span>機型比較</span>
                <svg className="w-6 h-6 transform rotate-90" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" /></svg>
            </Link> */}
        </nav>
    )
}

export default Navbar;