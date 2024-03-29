import React, { useRef, useEffect } from 'react';
import p6t1 from '../images/p6t1.png';
import p6t2 from '../images/p6t2.png';
import p6t3 from '../images/p6t3.png';
import p6line from '../images/p6line.png';
import p6m_btn1 from '../images/p6m_btn1.png';

import p4p1 from '../images/p4p1.png';
import p4p2 from '../images/p4p2.png';

import p6left1 from '../images/p6left1.png';
import p6left2 from '../images/p6left2.png';
import p6left3 from '../images/p6left3.png';
import p6left4 from '../images/p6left4.png';
import p6left5 from '../images/p6left5.png';
import p6left6 from '../images/p6left6.png';

import p6right1 from '../images/p6right1.png';
import p6right2 from '../images/p6right2.png';
import p6right3 from '../images/p6right3.png';
import p6right4 from '../images/p6right4.png';
import p6right5 from '../images/p6right5.png';
import p6right6 from '../images/p6right6.png';

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import FadeInSection from '../hooks/useFadeIn';


const ProductPanel4 = () => {
    // gsap.registerPlugin(ScrollTrigger);
    const ref = useRef(null);
    const textRef = useRef(null);
    const textRef1 = useRef(null);
    // const textRef2 = useRef(null);
    const textRef3 = useRef(null);
    const textRef4 = useRef(null);
    const textRef5 = useRef(null);
    // const textRef6 = useRef(null);

    const cL1 = useRef(null);
    const cL2 = useRef(null);
    const cL3 = useRef(null);
    const cL4 = useRef(null);
    const cL5 = useRef(null);
    const cL6 = useRef(null);


    const cR1 = useRef(null);
    const cR2 = useRef(null);
    const cR3 = useRef(null);
    const cR4 = useRef(null);
    const cR5 = useRef(null);
    const cR6 = useRef(null);

    const labelList = [cL1, cL2, cL3, cL4, cL5, cL6, cR1, cR2, cR3, cR4, cR5, cR6];

    useEffect(() => {
        // const element = ref.current;
        // let t1 = gsap.timeline({
        //     scrollTrigger: {
        //         trigger: ".product4-section",
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
        //     { opacity: 1, x: 0});
        
        // t1.fromTo(textRef1.current, 
        //     { opacity: 0, y: 30 }, 
        //     { opacity: 1, y: 0 });

        // t1.fromTo(textRef4.current, 
        //     { opacity: 0, y: -60 }, 
        //     { opacity: 1, y: 0 })
        // .fromTo(textRef5.current, 
        //     { opacity: 0, y: -30 }, 
        //     { opacity: 1, y: 0 });   
                
        // for (let i = 0; i < labelList.length; i++) {
        //     t1.fromTo(labelList[i].current, 
        //         { opacity: 0, y: "+=30"}, 
        //         { opacity: 1, y: "+=0" }).progress(0.5 + Math.random(i) * 0.5);
        // };
    }, []);

    let style1 = {};
    let style2 = {};
    let style3 = {};
    let style4 = {};
    if (window.innerWidth < 768) {
        style1 = {height: window.innerHeight*0.3};
        style2 = {height: window.innerHeight*0.2};
        style3 = {height: window.innerHeight*0.15};
        style4 = {height: window.innerHeight*0.3};
    }

    return (
        <section name="productPanel" ref={ref} className="product4-section flex items-center justify-center w-full lg:h-screen md:h-full lg:bg-p6 lg:bg-center lg:bg-cover md:bg-p6m md:bg-no-repeat md:bg-contain relative mbg">
            <div className="grid grid-row-2 grid-cols-2 w-full h-full md:hidden">
                <div ref={textRef} className="col-span-1">
                    <div className="flex flex-row items-start justify-center p6h">
                        <div className="flex flex-row justify-center p6-coffeeLeftPanel">
                            {/* <img id="cL1" ref={cL1} src={p6left1} alt="" className="col-span-1 ml-16 p-8" />
                            <img id="cL2" ref={cL2} src={p6left2} alt="" className="col-span-1 p-8"/>
                            <img id="cL3" ref={cL3} src={p6left3} alt="" className="col-span-1 p-8 mr-24"/>
                            <img id="cL4" ref={cL4} src={p6left4} alt="" className="col-span-1 ml-16 p-8"/>
                            <img id="cL5" ref={cL5} src={p6left5} alt="" className="col-span-1 p-8"/>
                            <img id="cL6" ref={cL6} src={p6left6} alt="" className="col-span-1 p-8"/> */}
                        </div>
                    </div>
                </div>
                <div className="col-span-1 panelRight">
                    <div className="flex flex-row items-start justify-center p6h">
                        <div className="flex flex-row justify-center p6-coffeeRightPanel">
                            {/* <img id="cR1" ref={cR1} src={p6right1} alt="" className="col-span-1 p-8" />
                            <img id="cR2" ref={cR2} src={p6right2} alt="" className="col-span-1 p-8"/>
                            <img id="cR3" ref={cR3} src={p6right3} alt="" className="col-span-1 p-8"/>
                            <img id="cR4" ref={cR4} src={p6right4} alt="" className="col-span-1 ml-16 p-8"/>
                            <img id="cR5" ref={cR5} src={p6right5} alt="" className="col-span-1 p-8"/>
                            <img id="cR6" ref={cR6} src={p6right6} alt="" className="col-span-1 p-8 mr-16"/> */}
                        </div>
                    </div>
                </div>
                <div className="col-span-1 panelLeft">
                    <div className="flex items-center justify-center">
                        <div className="grid grid-cols-1 p6-textPanel pt-8">
                            
                            <FadeInSection>
                            <img ref={textRef1} src={p4p1} alt="" className="col-span-1 p-4"  style={style1}/>
                            {/* <img ref={textRef3} src={p6line} alt="" className="col-span-1 p-4"/> */}
                            </FadeInSection>
                            <FadeInSection delay="delay1s">
                            <img ref={textRef4} src={p4p2} alt="" className="col-span-1 p-4" style={style2}/>
                            {/* <img ref={textRef5} src={p6t2} alt="" className="col-span-1 p-4"/> */}
                            </FadeInSection>

                           
                        </div>
                    </div>
                </div>
                <div className="col-span-1 panelRight">
                    <div className="flex items-center justify-center">
                    </div>
                </div>
            </div>
            <div className="absolute w-full b lg:hidden"></div>
            <div className="p6mSection w-full lg:hidden">
                <div className="flex flex-col w-full items-center">
                    <div className="fadeIn1sec p61">
                        <FadeInSection><img src={p6m_btn1} alt="" /></FadeInSection>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ProductPanel4;