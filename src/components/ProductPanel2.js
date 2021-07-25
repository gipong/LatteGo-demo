import React, { useRef, useState, useEffect } from 'react';
import p4t1 from '../images/p4t1.png';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import videoMp4 from '../videos/video-01.mp4';
import videoMp42 from '../videos/video-02.mp4';

const ProductPanel2 = () => {
    // gsap.registerPlugin(ScrollTrigger);
    const ref = useRef(null);
    const textRef = useRef(null);
    const videoRef = useRef(null);
    const videoRef2 = useRef(null);

    const [isShowed, setShow] = useState(false);

    useEffect(() => {
        // const element = ref.current;
        // let t1 = gsap.timeline({
        //     scrollTrigger: {
        //         trigger: ".product2-section",
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
        // t1.fromTo(textRef.current,
        //     { opacity: 0, x: 30 },
        //     { opacity: 1, x: 0}).progress(0.2);
    
    }, []);

    const changeShowStatus = () => {
        setShow(!isShowed);
    }

    return (
        <section name="productPanel2" ref={ref} className="product2-section flex items-center justify-center w-full h-screen mbg bg-center bg-cover relative">
            {!isShowed && <video ref={videoRef} autoPlay muted loop className="backgroundVideo">
                    <source src={videoMp4} type="video/mp4" />
                </video>
            }
            {isShowed && <video ref={videoRef2} autoPlay muted loop className="backgroundVideo">
                    <source src={videoMp42} type="video/mp4" />
                </video>
            }
            <div className="grid grid-cols-2 w-full h-full">
                <div ref={textRef} className="col-span-1 panelLeft">
                    {/* <div className="flex items-center justify-center panelLeft-text">
                        <div></div>
                    </div> */}
                </div>
                <div className="col-span-1 panelRight">
                    <div className="flex items-center justify-center h-screen panelRight-text">
                        <div className="grid grid-cols-1">
                            {/* <img ref={textRef} src={p4t1} alt="" className="col-span-1 p-8" /> */}
                        </div>
                    </div>
                </div>
            </div>
            <div className="absolute carouselbar flex flex-row">
                <div className={`carousel ${isShowed ? "" : "carouselActive"}`} onClick={changeShowStatus}></div>
                <div className={`carousel ${isShowed ? "carouselActive" : ""}`} onClick={changeShowStatus}></div>
            </div>
        </section>
    )
}

export default ProductPanel2;