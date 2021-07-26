import React, { useRef, useEffect } from 'react';
import p11t1 from '../images/p11t1.png';
import p11t2 from '../images/p11t2.png';
import p11t3 from '../images/p11t3.png';
import p9m2 from '../images/p9m2.png';
import p11line from '../images/p11line.png';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import FadeInSection from '../hooks/useFadeIn';


const ProductPanel9 = () => {
    // gsap.registerPlugin(ScrollTrigger);
    const ref = useRef(null);
    const textRef = useRef(null);
    const textRef1 = useRef(null);
    const textRef5 = useRef(null);
    const textRef3 = useRef(null);
    const textRef4 = useRef(null);

    useEffect(() => {
        // const element = ref.current;
        // let t1 = gsap.timeline({
        //     scrollTrigger: {
        //         trigger: ".product9-section",
        //         start: () => "top top",
        //         end: () => "100%",
        //         // markers: true,
        //         scrub: 1,
        //         pin: true,
        //         onEnter: () => {
        //         },
        //         onLeave: () => {
        //         }
        //     }
        // });
        // t1.fromTo(textRef3.current,
        //     { opacity: 0, x: -30 },
        //     { opacity: 1, x: 0}).progress(0.1);
        
        
        // t1.fromTo(textRef1.current, 
        //     { opacity: 0, y: 30 }, 
        //     { opacity: 1, y: 0 }).progress(0.25);

        // t1.fromTo(textRef4.current, 
        //     { opacity: 0, y: -60 }, 
        //     { opacity: 1, y: 0 })
        // .fromTo(textRef5.current, 
        //     { opacity: 0, y: -30 }, 
        //     { opacity: 1, y: 0 }).progress(0.3);   
    
    }, []);

    return (
        <section name="productPanel9" ref={ref} className="product9-section flex items-center justify-center w-full h-screen lg:bg-p11 lg:bg-center lg:bg-cover md:bg-p10m md:bg-no-repeat mbg relative">
            <div className="grid grid-cols-2 w-full h-full md:hidden">
                <div ref={textRef} className="col-span-1 panelLeft">
                    <div className="flex items-center justify-center h-screen mbg">
                        <div className="grid grid-cols-1">
                            <FadeInSection>
                            <img ref={textRef1} src={p11t1} alt="" className="col-span-1 p-4" />
                            <img ref={textRef3} src={p11line} alt="" className="col-span-1 p-4"/>
                            </FadeInSection>
                            <FadeInSection delay="delay1s">
                            <img ref={textRef4} src={p11t3} alt="" className="col-span-1 p-4"/>
                            <img ref={textRef5} src={p11t2} alt="" className="col-span-1 p-4"/>
                            </FadeInSection>
                        </div>
                    </div>
                </div>
                <div className="col-span-1 panelRight">
                    
                </div>
            </div>
            <div className="absolute w-full mbg b1 lg:hidden"></div>
            <div className="p9mSection h-full lg:hidden">
                <div className="flex flex-col">
                    <div className="p912 fadeIn1sec">
                    <FadeInSection><img src={p9m2} alt="" /></FadeInSection>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ProductPanel9;