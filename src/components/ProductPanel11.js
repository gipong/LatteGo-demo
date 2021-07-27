import React, { useRef, useEffect } from 'react';
import p13t1 from '../images/p13t1.png';
import p131 from '../images/p13m1.png';
import p13t2 from '../images/p13t2.png';
import p13line from '../images/p13line.png';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import FadeInSection from '../hooks/useFadeIn';


const ProductPanel11 = () => {
    // gsap.registerPlugin(ScrollTrigger);
    const ref = useRef(null);
    const textRef = useRef(null);
    const textRef1 = useRef(null);
    const textRef3 = useRef(null);
    const textRef4 = useRef(null);

    useEffect(() => {
        // const element = ref.current;
        // let t1 = gsap.timeline({
        //     scrollTrigger: {
        //         trigger: ".product11-section",
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
        //     { opacity: 1, y: 0 }).progress(0.3);   
    
    }, []);

    return (
        <section name="productPanel11" ref={ref} className="product11-section flex items-center justify-center w-full lg:h-screen md:h-full lg:bg-p13 lg:bg-center lg:bg-cover relative md:bg-p13m">
            <div className="grid grid-cols-2 w-full h-full md:hidden">
                <div ref={textRef} className="col-span-1 panelLeft">
                    <div className="flex items-center justify-center lg:h-screen md:h-full">
                        <div className="grid grid-cols-1">
                        <FadeInSection>
                        <img ref={textRef1} src={p13t1} alt="" className="col-span-1 p-4" />
                            <img ref={textRef3} src={p13line} alt="" className="col-span-1 p-4"/>
                        </FadeInSection>
                           
                            <FadeInSection>
                            <img ref={textRef4} src={p13t2} alt="" className="col-span-1 p-4"/>

                            </FadeInSection>

                        </div>
                    </div>
                </div>
                <div className="col-span-1 panelRight">
                    
                </div>
            </div>
            <div className="absolute w-full mbgGradient b3 lg:hidden"></div>
            <div className="p12mSection h-full lg:hidden">
                <div className="flex flex-col">
                    <div className="p121 fadeIn1sec">
                    <FadeInSection><img src={p131} alt="" /></FadeInSection>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ProductPanel11;