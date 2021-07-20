import React, { useRef, useEffect, useState } from 'react';
import p1m from '../images/p1m.png';
import p1mbtn1 from '../images/p1m_btn1.png';
import p1mbtn2 from '../images/p1m_btn2.png';

import p3m from '../images/p3m.png';
import p4m from '../images/p4m.png';
import p5m from '../images/p5m.png';
import p6m from '../images/p6m.png';
import p7m from '../images/p7m.png';
import p8m from '../images/p8m.png';
import p9m from '../images/p9m.png';
import p10m from '../images/p10m.png';
import p11m from '../images/p11m.png';
import p12m from '../images/p12m.png';

import shopPanel_m from '../images/shopPanel_m.png';
import shopPanel_option1 from '../images/shopPanel_option1.png';
import shopPanel_momo from '../images/shopPanel_momo.png';
import shopPanel_title from '../images/shopPanel_title.png';
import shopPanel_m_n from '../images/shopPanel_m_n.png';
import shopPanel_m_m from '../images/shopPanel_m_m.png';
import shopPanel_m_s from '../images/shopPanel_m_s.png';
import shopPanel_m_e from '../images/shopPanel_m_e.png';
import shopPanel_title2 from '../images/shopPanel_title2.png';
import shopPanel_group1 from '../images/shopPanel_m_group1.png';
import shopPanel_group2 from '../images/shopPanel_m_group2.png';



import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import useHover from '../hooks/useHover';

const Home_m = () => {
    gsap.registerPlugin(ScrollTrigger);
    const ref = useRef(null);
    const textRef = useRef(null);
    const circleRef = useRef(null);
    const barRef = useRef(null);

    const [p1btn1Ref, isp1btn1Hoverd] = useHover();
    const [p1btn2Ref, isp1btn2Hoverd] = useHover();

    const [getArea, setArea] = useState("n");
    const [isShowed, setShow] = useState(false);

    useEffect(() => {
        const element = ref.current;
        // let t1 = gsap.timeline({
        //     scrollTrigger: {
        //         trigger: ".home-section",
        //         start: () => "top top",
        //         end: () => "300%",
        //         // markers: true,
        //         scrub: 1,
        //         pin: true,
        //         onEnter: () => {
        //             gsap.fromTo(element.querySelector("#logo_panel"),
        //             { opacity: 0, y: -20 },
        //             { opacity: 1, y: 0, duration: 3 });
        //         },
        //         onLeave: () => {
        //         }
        //     }
        // });
        // t1.fromTo(circleRef.current,
        //     { opacity: 0, y: -30 },
        //     { opacity: 1, y: 0}).progress(0.2);
        
    }, []);

    const areaContent = (selected) => {
        switch(selected) {
            case 'n':
                return <img src={shopPanel_m_n} alt="" />
                break;
            case 'm':
                return <img src={shopPanel_m_m} alt="" />
                break;
            case 's':
                return <img src={shopPanel_m_s} alt="" />
                break;
            case 'e':
                return <img src={shopPanel_m_e} alt="" />
                break;
            default:
                return <img src={shopPanel_m_n} alt="" />
        }
    }

    const changeShowStatus = () => {
        setShow(!isShowed);
    }

    return (
        <section name="home" ref={ref} className="home-section flex flex-col items-center justify-center w-full bg-contain relative bg-no-repeat">
            <div className="homePanelm pb-10">
                <img src={p1m} alt="" />
                <div className="homePanelmText flex flex-col absolute">
                    <img src={p1mbtn1} className="pb-5" alt="" />
                    <img src={p1mbtn2} alt="" />
                </div>
            </div>
            <div className="videoWrapper_m">
                <iframe title="video" src="https://www.youtube.com/embed/rCsFvbPwV40?autoplay=0&modestbranding=1&controls=0&rel=0&playsinline=1&enablejsapi=1&origin=https%3A%2F%2Fwww.saeco.philips.com.tw&widgetid=1" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
            </div>
            <div>
                <img src={p3m} alt="" />
            </div>
            <div>
                <img src={p4m} alt="" />
            </div>
            <div>
                <img src={p5m} alt="" />
            </div>
            <div>
                <img src={p6m} alt="" />
            </div>
            <div>
                <img src={p7m} alt="" />
            </div>
            <div>
                <img src={p8m} alt="" />
            </div>
            <div>
                <img src={p9m} alt="" />
            </div>
            <div>
                <img src={p10m} alt="" />
            </div>
            <div>
                <img src={p11m} alt="" />
            </div>
            <div>
                <img src={p12m} alt="" />
            </div>
            <div className="shopPanel_m flex flex-col">
                <img src={shopPanel_m} alt="" />
                <select className="shopOption" onChange={(e) => {
                    const selected = e.target.value;
                    setArea(selected);
                }}>
                    <option value="n">百貨銷售店點-北區</option>
                    <option value="m">百貨銷售店點-中區</option>
                    <option value="s">百貨銷售店點-南區</option>
                    <option value="e">百貨銷售店點-東區</option>
                </select>
                <img src={shopPanel_momo} alt="" />
                <br />
                <img src={shopPanel_title} alt="" />
                {areaContent(getArea)}

                <br />
                <img src={shopPanel_title2} alt="" />
                <div className="flex flex-col align-center">
                    <img src={shopPanel_group1} alt="" />
                    {isShowed && <img src={shopPanel_group2} alt="" />}
                    <div className="shopBtn" onClick={changeShowStatus}>
                        {isShowed ? "隱藏部分技術規格" : "顯示全部技術規格"}
                    </div>
                </div>
                
            </div>
        </section>
    )
}

export default Home_m;