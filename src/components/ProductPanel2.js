import React, { useRef, useEffect } from 'react';
import p4t1 from '../images/p4t1.png';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import videoMp4 from '../videos/section2.mp4';

const ProductPanel2 = () => {
    gsap.registerPlugin(ScrollTrigger);
    const ref = useRef(null);
    const textRef = useRef(null);
    const videoRef = useRef(null);

    useEffect(() => {
        // const element = ref.current;
        let t1 = gsap.timeline({
            scrollTrigger: {
                trigger: ".product2-section",
                start: () => "top top",
                end: () => "120%",
                // markers: true,
                scrub: 1,
                pin: true,
                onEnter: () => {
                },
                onLeave: () => {
                }
            }
        });
        // t1.fromTo(textRef.current,
        //     { opacity: 0, x: 30 },
        //     { opacity: 1, x: 0}).progress(0.2);
    
    }, []);

    return (
        <section name="productPanel2" ref={ref} className="product2-section flex items-center justify-center w-full h-screen mbg bg-center bg-cover">
            <video ref={videoRef} autoPlay muted loop className="backgroundVideo">
                <source src={videoMp4} type="video/mp4" />
            </video>
            <div className="grid grid-cols-2 w-full h-full">
                <div ref={textRef} className="col-span-1 panelLeft">
                    {/* <div className="flex items-center justify-center panelLeft-text">
                        <div></div>
                    </div> */}
                </div>
                <div className="col-span-1 panelRight">
                    <div className="flex items-center justify-center h-screen panelRight-text">
                        <div className="grid grid-cols-1">
                            <img ref={textRef} src={p4t1} alt="" className="col-span-1 p-8" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ProductPanel2;