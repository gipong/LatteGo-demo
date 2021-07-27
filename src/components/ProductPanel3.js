import React, { useRef, useEffect } from 'react';
import p5t1 from '../images/p5t1.png';
import p5t2 from '../images/p5t2.png';
import p5t3 from '../images/p5t3.png';
import p5mt1 from '../images/p5m_btn1.png';
import p5mt2 from '../images/p5m_btn2.png';
import p5mt3 from '../images/p5m_btn3.png';
import p5line from '../images/p5line.png';
import p5panel1 from '../images/p5panel1.png';
import p5panel2 from '../images/p5panel2.png';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import FadeInSection from '../hooks/useFadeIn';

const ProductPanel3 = () => {
    // gsap.registerPlugin(ScrollTrigger);
    const ref = useRef(null);
    const textRef = useRef(null);
    const textRef1 = useRef(null);
    const textRef5 = useRef(null);
    const textRef3 = useRef(null);
    const textRef4 = useRef(null);
    const textRefPanel1 = useRef(null);
    const textRefPanel2 = useRef(null);

    useEffect(() => {
        // const element = ref.current;
        // let t1 = gsap.timeline({
        //     scrollTrigger: {
        //         trigger: ".product3-section",
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
                
        // t1.fromTo(textRefPanel1.current, 
        //     { opacity: 0 },
        //     { opacity: 1 }).progress(0.5);

        // t1.fromTo(textRefPanel2.current, 
        //     { opacity: 0 },
        //     { opacity: 1 }).progress(0.7);
    
    }, []);

    return (
        <section name="productPanel3" ref={ref} className="product3-section flex items-center justify-center w-full lg:h-screen md:h-full lg:bg-p5 md:bg-p5m lg:bg-center lg:bg-cover relative md:bg-no-repeat md:bg-contain mbgGradient" >
            <div className="grid grid-cols-2 w-full h-full md:hidden">
                <div ref={textRef} className="col-span-1 panelLeft">
                    <div className="flex items-center justify-center lg:h-screen md:h-full">
                        <div className="grid grid-cols-1">
                            <FadeInSection>
                                <img ref={textRef1} src={p5t1} alt="" className="col-span-1 p-4" />
                                <img ref={textRef3} src={p5line} alt="" className="col-span-1 p-4"/>
                                <img ref={textRef4} src={p5t3} alt="" className="col-span-1 p-4"/>
                                <img ref={textRef5} src={p5t2} alt="" className="col-span-1 p-4"/>
                            </FadeInSection>
                            <FadeInSection delay="delay1s">
                                <img ref={textRefPanel1} src={p5panel1} alt="" className="col-span-1 p-4"/>
                                <img ref={textRefPanel2} src={p5panel2} alt="" className="col-span-1 p-4"/>
                            </FadeInSection>
                           
                       
                        </div>
                    </div>
                </div>
                <div className="col-span-1 panelRight">
                    
                </div>
            </div>
            <div className="absolute w-full mbgGradient b1 lg:hidden"></div>
            <div className="p5mSection lg:hidden">
                <div className="flex flex-col items-center">
                    <FadeInSection>
                        <div className="p51 fadeIn1sec">
                            <img src={p5mt1} alt="" />
                            <img src={p5mt2} alt="" />
                        </div>
                    </FadeInSection>
                    <FadeInSection delay="delay1s">
                        <div className="p53 fadeIn3sec"><img src={p5mt3} alt="" /></div>
                    </FadeInSection>
                </div>
            </div>
        </section>
    )
}

export default ProductPanel3;