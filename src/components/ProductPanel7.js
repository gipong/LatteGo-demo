import React, { useRef, useEffect } from 'react';
import p8t1 from '../images/p8t1.png';
import p9t1 from '../images/p9t1.png';
import p8panel from '../images/p8panel.png';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import videoMp4 from '../videos/feature-2.33f3d082.mp4';

const ProductPanel7 = () => {
    // gsap.registerPlugin(ScrollTrigger);
    const ref = useRef(null);
    const textRef6 = useRef(null);
    const textRef7 = useRef(null);
    const textBg = useRef(null);
    const videoRef = useRef(null);

    useEffect(() => {
        // const element = ref.current;
        // let t1 = gsap.timeline({
        //     scrollTrigger: {
        //         trigger: ".product7-section",
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

        // t1.fromTo(textBg.current, 
        //     { opacity: 0, x: "-50vw", y: "-29.5vh"},
        //     { opacity: 1, x: "0px", y: "-29.5vh"}).progress(0.1);

        // t1.fromTo(textRef6.current, 
        //     { opacity: 0, x: -20 },
        //     { opacity: 1, x: 0 }).progress(0.2);

        // t1.fromTo(videoRef.current, { opacity: 0 }, { opacity: 1}).progress(0.6);

        // t1.fromTo(textRef7.current, 
        //     { opacity: 0, y: 50 },
        //     { opacity: 1, y: 0 }).progress(0.5);
                
    }, []);

    return (
        <section name="productPanel7" ref={ref} className="product7-section flex items-center justify-center w-full lg:h-screen md:h-full bg-center bg-cover relative">
            <video ref={videoRef} autoPlay muted loop className="backgroundVideo">
                <source src={videoMp4} type="video/mp4" />
            </video>
            <img src={p8panel} ref={textBg} alt="" className="absolute panelLeft-text p8panel"/>
            <img ref={textRef7} src={p9t1} alt="" className="col-span-1 pt-48 mt-72"/>
        </section>
    )
}

export default ProductPanel7;