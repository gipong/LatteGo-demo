import React, { useRef, useEffect } from 'react';
import p10t1 from '../images/p10t1.png';
import p10t2 from '../images/p10t2.png';
import p10t3 from '../images/p10t3.png';
import p10line from '../images/p10line.png';
import p9m1 from '../images/p9m1.png';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import FadeInSection from '../hooks/useFadeIn';


const ProductPanel8 = () => {
    // gsap.registerPlugin(ScrollTrigger);
    const ref = useRef(null);
    const textRef = useRef(null);
    const textRef1 = useRef(null);
    const textRef5 = useRef(null);
    const textRef3 = useRef(null);
    const textRef4 = useRef(null);

    // useEffect(() => {
    //     // const element = ref.current;
    //     let t1 = gsap.timeline({
    //         scrollTrigger: {
    //             trigger: ".product8-section",
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
    //         { opacity: 0, x: 30 },
    //         { opacity: 1, x: 0}).progress(0.1);
        
        
    //     t1.fromTo(textRef1.current, 
    //         { opacity: 0, y: 30 }, 
    //         { opacity: 1, y: 0 }).progress(0.25);

    //     t1.fromTo(textRef4.current, 
    //         { opacity: 0, y: -60 }, 
    //         { opacity: 1, y: 0 })
    //     .fromTo(textRef5.current, 
    //         { opacity: 0, y: -30 }, 
    //         { opacity: 1, y: 0 }).progress(0.3);   
    
    // }, []);

    let style1 = {};
    let style2 = {};
    let style3 = {};
    let style4 = {};
    if (window.innerWidth < 768) {
        style1 = {height: (window.innerWidth/768)*515*2, transform: 'translateY(50%)'};
        style2 = {transform: `translateY(-${(window.innerWidth/768)*510}px)`};
        style3 = {height: (window.innerWidth/768)*515*2};
        style4 = {height: (window.innerWidth/768)*515*0.8, marginTop: '10px'};
    }

    return (
        <section name="productPanel8" ref={ref} style={style3} className="product8-section flex items-center justify-center w-full lg:h-screen md:h-full lg:bg-p10 md:bg-p9m lg:bg-center lg:bg-cover md:bg-no-repeat lg:mbg relative">
            <div className="grid grid-cols-2 w-full h-full md:hidden">
                <div ref={textRef} className="col-span-1 panelLeft">
                    {/* <div className="flex items-center justify-center panelLeft-text">
                        <div></div>
                    </div> */}
                </div>
                <div className="col-span-1 panelRight">
                    <div className="flex items-center justify-center lg:h-screen md:h-full panelRight-text mbg">
                        <div className="grid grid-cols-1">
                            <FadeInSection>
                            <img ref={textRef1} src={p10t1} alt="" className="col-span-1 p-4" />
                            <img ref={textRef3} src={p10line} alt="" className="col-span-1 p-4"/>
                            </FadeInSection>
                            <FadeInSection>
                            <img ref={textRef4} src={p10t2} alt="" className="col-span-1 p-4"/>
                            <img ref={textRef5} src={p10t3} alt="" className="col-span-1 p-4"/>
                            </FadeInSection>

                           
                           
                        </div>
                    </div>
                </div>
            </div>
            <div className="absolute w-full mbg b1 lg:hidden md:hidden"></div>
            <div className="p99mSection mbg w-full lg:hidden" style={style1}>
                <FadeInSection className="flex flex-col a">
                    <img src={p9m1} style={style4} alt="" />
                </FadeInSection>
            </div>
        </section>
    )
}

export default ProductPanel8;