import React, { useRef, useEffect } from 'react';
import p8t1 from '../images/p8t1.png';
import p8t2 from '../images/p8t2.png';
import p8panel from '../images/p8panel.png';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const ProductPanel6 = () => {
    gsap.registerPlugin(ScrollTrigger);
    const ref = useRef(null);
    const textRef6 = useRef(null);
    const textRef7 = useRef(null);
    const textBg = useRef(null);

    useEffect(() => {
        // const element = ref.current;
        let t1 = gsap.timeline({
            scrollTrigger: {
                trigger: ".product6-section",
                start: () => "top top",
                end: () => "200%",
                // markers: true,
                scrub: 1,
                pin: true,
                onEnter: () => {
                },
                onLeave: () => {
                }
            }
        });

        t1.fromTo(textBg.current, 
            { opacity: 0, x: "-50vw", y: "-29.5vh"},
            { opacity: 1, x: "-40vw", y: "-29.5vh"}).progress(0.1);

        t1.fromTo(textRef6.current, 
            { opacity: 0, x: -20 },
            { opacity: 1, x: 0 }).progress(0.2);

        t1.fromTo(textRef7.current, 
            { opacity: 0, y: 50 },
            { opacity: 1, y: 0 }).progress(0.5);
                
    }, []);

    return (
        <section name="productPanel6" ref={ref} className="product6-section flex items-center justify-center w-full h-screen bg-p8 bg-center bg-cover relative">
            <img src={p8panel} ref={textBg} alt="" className="absolute p8panel"/>
            <div className="grid grid-row-2 w-full h-full">
                <div className="col-span-1 panelLeft">
                    <div className="flex flex-col justify-center items-start panelLeft-text">
                        <div className="grid grid-cols-1">
                            <img ref={textRef6} src={p8t1} alt="" className="col-span-1 p-4"/>
                        </div>
                        <div className="grid grid-cols-1">
                            <img ref={textRef7} src={p8t2} alt="" className="col-span-1 pt-48 mt-96"/>
                        </div>
                    </div>
                </div>
                <div className="col-span-1 panelRight">
                    <div className="flex items-center justify-center h-screen">
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ProductPanel6;