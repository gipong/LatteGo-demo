import React, { useRef, useEffect } from 'react';
import logo_panel from '../images/logo_panel.png';
import floating_circle from '../images/floating_circle.png';
import p1btm1 from '../images/p1btm1.png';
import p1btm2 from '../images/p1btm2.png';
import p1btm3 from '../images/p1btm3.png';
import p1text1 from '../images/p1text1.png';
import p1btn1 from '../images/p1btn1.png';
import p1btn1Hover from '../images/p1btn1_hover.png';
import p1btn2 from '../images/p1btn2.png';
import p1btn2Hover from '../images/p1btn2_hover.png';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import useHover from '../hooks/useHover';

const Home = () => {
    gsap.registerPlugin(ScrollTrigger);
    const ref = useRef(null);
    const textRef = useRef(null);
    const circleRef = useRef(null);
    const barRef = useRef(null);

    const [p1btn1Ref, isp1btn1Hoverd] = useHover();
    const [p1btn2Ref, isp1btn2Hoverd] = useHover();

    useEffect(() => {
        const element = ref.current;
        let t1 = gsap.timeline({
            scrollTrigger: {
                trigger: ".home-section",
                start: () => "top top",
                end: () => "300%",
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
            { opacity: 1, y: 0}).progress(0.2);
        
        t1.fromTo(barRef.current, 
            { opacity: 0, y: 30 }, 
            { opacity: 1, y: 0 }).progress(0.25);
    }, []);

    return (
        <section name="home" ref={ref} className="home-section flex items-center justify-center w-full h-screen bg-p1 bg-center bg-cover relative">
            <img id="logo_panel" src={logo_panel} alt="" className="absolute -top-10 left-0 transform scale-75"/>
            <div className="grid grid-row-2 w-full h-full">
                <div ref={textRef} className="col-span-1 p1panelShow">
                    <div className="flex items-center justify-center textPanel">
                        <div className="grid grid-cols-2">
                            <img src={p1text1} alt="" className="col-span-2 p-8" />
                            <a ref={p1btn1Ref} href="#shopPanel"><img src={isp1btn1Hoverd ? p1btn1Hover : p1btn1} alt="" className="col-span-1 p-4"/></a>
                            <a ref={p1btn2Ref} href="https://www.momoshop.com.tw/goods/GoodsDetail.jsp?i_code=8895802&str_category_code=2900500018&ctype=B&Area=DgrpCategory" target="_blank">
                                <img src={isp1btn2Hoverd ? p1btn2Hover : p1btn2} alt="" className="col-span-1 p-4"/>
                            </a>
                        </div>
                    </div>
                </div>
                <div ref={circleRef} className="col-span-1 p1panelShow">
                    <div className="flex items-center justify-center h-screen">
                        <img src={floating_circle} alt="" className="circleImg m-auto origin-center transition duration-300 ease-in-out relative floating-panel"/>
                    </div>
                </div>
                <nav ref={barRef} className="col-span-2">
                    <div className="homeBar w-full flex flex-row items-center justify-center bg-gray-400 bg-opacity-25">
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