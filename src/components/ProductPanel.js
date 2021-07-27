import React, { useRef, useEffect } from 'react';
import p3t1 from '../images/p3t1.png';
import p3t2 from '../images/p3t2.png';
import p3t3 from '../images/p3t3.png';
import p3t4 from '../images/p3t4.png';

import p3mt1 from '../images/p3m_btn1.png';
import p3mt2 from '../images/p3m_btn2.png';
import p3mt3 from '../images/p3m_btn3.png';

import p3line from '../images/p3line.png';
import p3panel from '../images/p3panel.png';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import FadeInSection from '../hooks/useFadeIn';


const ProductPanel = () => {
    // gsap.registerPlugin(ScrollTrigger);
    const ref = useRef(null);
    const textRef = useRef(null);
    const textRef1 = useRef(null);
    const textRef2 = useRef(null);
    const textRef3 = useRef(null);
    const textRef4 = useRef(null);
    const textRef5 = useRef(null);
    const textRef6 = useRef(null);

    // useEffect(() => {
    //     // const element = ref.current;
    //     let t1 = gsap.timeline({
    //         scrollTrigger: {
    //             trigger: ".product1-section",
    //             start: () => "top top",
    //             end: () => "100%",
    //             // markers: true,
    //             scrub: 1,
    //             pin: true,
    //             onEnter: () => {
    //             },
    //             onLeave: () => {
    //             }
    //         }
    //     });
    //     t1.fromTo(textRef3.current,
    //         { opacity: 0, x: -30 },
    //         { opacity: 1, x: 0}).progress(0.1);
        
    //     t1.fromTo(textRef2.current, 
    //         { opacity: 0, y: 60 }, 
    //         { opacity: 1, y: 0 })
    //     .fromTo(textRef1.current, 
    //         { opacity: 0, y: 30 }, 
    //         { opacity: 1, y: 0 }).progress(0.25);

    //     t1.fromTo(textRef4.current, 
    //         { opacity: 0, y: -60 }, 
    //         { opacity: 1, y: 0 })
    //     .fromTo(textRef5.current, 
    //         { opacity: 0, y: -30 }, 
    //         { opacity: 1, y: 0 }).progress(0.3);   
                
    //     t1.fromTo(textRef6.current, 
    //         { opacity: 0 },
    //         { opacity: 1 }).progress(0.5);
    // }, []);

    return (
        <section name="productPanel" ref={ref} className="product1-section flex items-center justify-center w-full lg:h-screen md:h-full lg:bg-p3 md:bg-p3m lg:bg-center lg:bg-cover md:bg-no-repeat relative mbg">
            <div className="grid grid-row-2 w-full h-full md:hidden">
                <div ref={textRef} className="col-span-1 panelLeft">
                    <div className="flex items-center justify-center h-full">
                        <div className="grid grid-cols-1">
                            <FadeInSection>
                                <img ref={textRef1} src={p3t1} alt="" className="col-span-1 p-8" />
                                <img ref={textRef2} src={p3t2} alt="" className="col-span-1 p-4"/>
                                <img ref={textRef3} src={p3line} alt="" className="col-span-1 p-4"/>
                            </FadeInSection>
                            <FadeInSection delay="delay1s">
                                <img ref={textRef4} src={p3t3} alt="" className="col-span-1 p-4"/>
                                <img ref={textRef5} src={p3t4} alt="" className="col-span-1 p-4"/>
                                <img ref={textRef6} src={p3panel} alt="" className="col-span-1 p-4 mt-8"/>
                            </FadeInSection>
                        </div>
                    </div>
                </div>
                <div className="col-span-1 panelRight">
                    <div className="flex items-center justify-center lg:h-screen md:h-full">
                    </div>
                </div>
            </div>
            <div className="absolute w-full mbgGradient b lg:hidden"></div>
            <div className="p3mSection lg:hidden">
                <FadeInSection className="flex flex-col a">
                    <div className="fadeIn1sec"><img src={p3mt1} alt="" /></div>
                    <div className="fadeIn2sec"><img src={p3mt2} alt="" /></div>
                    <div className="fadeIn3sec"><img src={p3mt3} alt="" /></div>
                </FadeInSection>
            </div>
        </section>
    )
}

export default ProductPanel;