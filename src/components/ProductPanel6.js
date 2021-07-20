import React, { useRef, useEffect } from 'react';
import p8t1 from '../images/p8t1.png';
import p8t2 from '../images/p8t2.png';
import p9t1 from '../images/p9t1.png';
import p8panel from '../images/p8panel.png';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import videoMp4 from '../videos/video.e05ebed6.mp4';
import videoMp42 from '../videos/feature-2.33f3d082.mp4';


const ProductPanel6 = () => {
    gsap.registerPlugin(ScrollTrigger);
    const ref = useRef(null);
    const textRef6 = useRef(null);
    const textRef7 = useRef(null);
    const textRef8 = useRef(null);
    const textBg = useRef(null);
    const videoRef = useRef(null);
    const videoRef2 = useRef(null);

    useEffect(() => {
        // const element = ref.current;
        let t1 = gsap.timeline({
            scrollTrigger: {
                trigger: ".product6-section",
                start: () => "top top",
                end: () => "400%",
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
            { opacity: 1, x: "0px", y: "-29.5vh"}).progress(0.05);

        t1.fromTo(textRef6.current, 
            { opacity: 0, x: -20 },
            { opacity: 1, x: 0 }).progress(0.1);

        t1.fromTo(textRef7.current, 
            { opacity: 0},
            { opacity: 1}).progress(0.25);

        t1.fromTo(videoRef.current, { opacity: 0 }, { opacity: 1}).progress(0.3);

        t1.fromTo(textRef7.current, 
            { opacity: 1},
            { opacity: 0}).progress(0.3);

        t1.fromTo(videoRef2.current, { opacity: 0 }, { opacity: 1}).progress(0.6);

        t1.fromTo(textRef8.current, 
            { opacity: 0, y: 50 },
            { opacity: 1, y: 0 }).progress(0.5);

        // t1.fromTo(textRef9.current, { opacity: 0 }, { opacity: 1 }).progress(0.75)
        // t1.fromTo(ref.current, 
        //     {className: "product6-section flex items-center justify-center w-full h-screen bg-p8 bg-center bg-cover relative"},
        //     {className: "product6-section flex items-center justify-center w-full h-screen bg-p9 bg-center bg-cover relative"}
        //     ).progress(0.8);
                
    }, []);

    return (
        <section name="productPanel6" ref={ref} className="product6-section flex items-center justify-center w-full h-screen bg-center bg-cover relative mbg">
            <video ref={videoRef} autoPlay muted loop className="backgroundVideo">
                <source src={videoMp4} type="video/mp4" />
            </video>
            <video ref={videoRef2} autoPlay muted loop className="backgroundVideo">
                <source src={videoMp42} type="video/mp4" />
            </video>

            <img src={p8panel} ref={textBg} alt="" className="absolute p8panel"/>
            <img ref={textRef7} src={p8t2} alt="" className="col-span-1 pt-48 mt-96 p6panelImg"/>
            <img ref={textRef8} src={p9t1} alt="" className="col-span-1 pt-48 mt-72"/>
            {/* <img ref={textRef9} src={p9t1} alt="" className="col-span-1 pt-48 mt-72"/> */}
        </section>
    )
}

export default ProductPanel6;