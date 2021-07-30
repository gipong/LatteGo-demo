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
import p3p1 from '../images/p3p1.png';
import p3p2 from '../images/p3p2.png';

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

    let style1 = {};
    let style2 = {};
    let style3 = {};
    let style4 = {};
    if (window.innerWidth < 768) {
        style1 = {height: (window.innerWidth/768)*848*2, transform: 'translateY(50%)'};
        style2 = {transform: `translateY(-${(window.innerWidth/768)*848}px)`};
        style3 = {height: (window.innerWidth/768)*573*2};
        style4 = {height: window.innerHeight*0.3};
    }

    return (
        <section name="productPanel3" ref={ref} className="product3-section flex items-center justify-center w-full lg:h-screen md:h-full lg:bg-p5 md:bg-p5m lg:bg-center lg:bg-cover relative md:bg-no-repeat md:bg-contain mbgGradient" >
            <div className="grid grid-cols-2 w-full h-full md:hidden">
                <div ref={textRef} className="col-span-1 panelLeft">
                    <div className="flex items-center justify-center lg:h-screen md:h-full">
                        <div className="grid grid-cols-1">
                            <FadeInSection>
                                <img ref={textRef1} src={p3p1} alt="" className="col-span-1 p-4"  style={style1}/>
                                {/* <img ref={textRef3} src={p5line} alt="" className="col-span-1 p-2" />
                                <img ref={textRef4} src={p5t3} alt="" className="col-span-1 p-2" style={{height: window.innerHeight*0.07}}/>
                                <img ref={textRef5} src={p5t2} alt="" className="col-span-1 p-2" style={{height: window.innerHeight*0.1}}/> */}
                            </FadeInSection>
                            <FadeInSection delay="delay1s">
                                <img ref={textRefPanel1} src={p3p2} alt="" className="col-span-1 p-4" style={style1}/>
                                {/* <img ref={textRefPanel2} src={p5panel2} alt="" className="col-span-1" style={{height: window.innerHeight*0.25}}/> */}
                            </FadeInSection>
                           
                       
                        </div>
                    </div>
                </div>
                <div className="col-span-1 panelRight">
                    
                </div>
            </div>
            <div className="absolute w-full mbgGradient lg:hidden md:hidden"></div>
            <div className="lg:hidden" style={{zIndex: 50}}>
                <div className="p53 mbgGradient w-full adeIn3sec absolute" style={style3}><img src={p5mt3} alt="" /></div>
            </div>
           
            <div className="p5mSection mbgGradient w-full lg:hidden" style={style1}>
                <div className="flex flex-col items-center">
                    <FadeInSection>
                        <div className="p51 fadeIn1sec" style={style2}>
                            <img src={p5mt1} alt="" />
                            <img src={p5mt2} alt="" />
                        </div>
                    </FadeInSection>
                </div>
            </div>
            
        </section>
    )
}

export default ProductPanel3;