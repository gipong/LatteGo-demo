import React, { useRef, useEffect } from 'react';
import logo_panel from '../images/logo_panel.png';
import floating_circle from '../images/floating_circle.png';
import p1btm1 from '../images/p1btm1.png';
import p1btm2 from '../images/p1btm2.png';
import p1btm3 from '../images/p1btm3.png';
import p1text1 from '../images/p1text1.png';
import p1btn1 from '../images/p1btn1.png';
import p1btn2 from '../images/p1btn2.png';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const Home = () => {
    gsap.registerPlugin(ScrollTrigger);
    const ref = useRef(null);
    const textRef = useRef(null);
    const circleRef = useRef(null);
    const barRef = useRef(null);

    useEffect(() => {
        const element = ref.current;
        let t1 = gsap.timeline({
            scrollTrigger: {
                trigger: ".home-section",
                start: () => "top top",
                end: () => "150%",
                // markers: true,
                scrub: 1,
                pin: true,
                onEnter: () => {
                    gsap.fromTo(element.querySelector("#logo_panel"),
                    { opacity: 0, y: -20 },
                    { opacity: 1, y: 0, duration: 3 });
                },
                onLeave: () => {
                }
            }
        });
        t1.fromTo(circleRef.current,
            { opacity: 0, y: -30 },
            { opacity: 1, y: 0}).progress(0.5);
        
        t1.fromTo(barRef.current, 
            { opacity: 0, y: 50 }, 
            { opacity: 1, y: 0 }).progress(0.7);
    }, []);

    useEffect(() => {
        window.addEventListener("scroll", () => {
            console.log(window.pageYOffset);
        });
        
    }, []);

    return (
        <section name="home" ref={ref} className="home-section flex items-center justify-center w-full h-screen bg-p1 bg-center bg-cover relative">
            <img id="logo_panel" src={logo_panel} alt="" className="absolute -top-10 left-0 transform scale-75"/>
            <div className="grid grid-row-2 w-full h-full">
                <div ref={textRef} className="col-span-1 p1panelShow">
                    <div className="flex items-center justify-center textPanel">
                        <div className="grid grid-cols-2">
                            <img src={p1text1} alt="" className="col-span-2 p-8" />
                            <img src={p1btn1} alt="" className="col-span-1 p-4"/>
                            <img src={p1btn2} alt="" className="col-span-1 p-4"/>
                        </div>
                    </div>
                </div>
                <div ref={circleRef} className="col-span-1 p1panelShow">
                    <div className="flex items-center justify-center h-screen">
                        <img src={floating_circle} alt="" className="m-auto origin-center transition duration-300 ease-in-out animate-bounce relative floating-panel"/>
                    </div>
                </div>
                <nav ref={barRef} className="col-span-2">
                    <div className="w-full flex flex-row items-center justify-center bg-gray-400 bg-opacity-25">
                        <div className="p-8 px-16"><img src={p1btm1} alt="" className="m-auto bg-center"/></div>
                        <div className="p-8 px-16"><img src={p1btm2} alt="" className="m-auto" /></div>
                        <div className="p-8 px-16"><img src={p1btm3} alt="" className="m-auto" /></div>
                    </div>
                </nav>
            </div>
            
        </section>
    )
}

export default Home;