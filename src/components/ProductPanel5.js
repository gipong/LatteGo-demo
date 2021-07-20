import React, { useRef, useEffect } from 'react';
import p7t1 from '../images/p7t1.png';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const ProductPanel5 = () => {
    gsap.registerPlugin(ScrollTrigger);
    const ref = useRef(null);
    const textRef6 = useRef(null);

    useEffect(() => {
        // const element = ref.current;
        let t1 = gsap.timeline({
            scrollTrigger: {
                trigger: ".product5-section",
                start: () => "top top",
                end: () => "150%",
                // markers: true,
                scrub: 1,
                pin: true,
                onEnter: () => {
                },
                onLeave: () => {
                }
            }
        });
                
        t1.fromTo(textRef6.current, 
            { opacity: 0 },
            { opacity: 1 }).progress(0.5);
    }, []);

    return (
        <section name="productPanel5" ref={ref} className="product5-section flex items-center justify-center w-full h-screen bg-p7 bg-center bg-cover relative">
            <div className="grid grid-row-2 w-full h-full">
                <div className="col-span-1 panelLeft">
                    <div className="flex items-center justify-center h-full">
                        <div className="flex items-center justify-center ">
                            <img ref={textRef6} src={p7t1} alt="" className="col-span-1 p-4"/>
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

export default ProductPanel5;