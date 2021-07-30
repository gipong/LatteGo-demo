import React, { Component } from 'react';
import p15t1 from '../images/p15t1.png';
import p15s1 from '../images/p15s1.png';
import p15s2 from '../images/p15s2.png';
import shopPanel_m_group1 from '../images/shopPanel_m_group1.png';
import shopPanel_m_group2 from '../images/shopPanel_m_group2.png';


class SpecPanel extends Component {

    constructor(props) {
        super(props);
        this.handleOptionShown = this.handleOptionShown.bind(this);
        
        this.state = {
            shown: false
        }
    }    

    handleOptionShown() {
        this.setState({shown: !this.state.shown})
    }

    render() {
        let p1 = p15s1;
        let p2 = p15s2;
        let p1m = shopPanel_m_group1;
        let p2m = shopPanel_m_group2;
        


        return (
            <section name="specPanel" className={`specPanel-section flex items-start justify-center w-full bg-center bg-cover ${this.state.shown ? "specTempHeight" : "h-screen"}`}>
                <div className={`flex flex-col items-start justify-start ${this.state.shown ? "specTempHeight" : "h-screen"}`}>
                    <div className="flex items-start">
                        <img src={p15t1} alt="" className="col-span-1 py-12 px-7" />
                    </div>
                    <div className="grid grid-cols-1 w-full md:hidden">
                        <img src={p1} alt=""/>
                        {this.state.shown && (
                            <div className="mt-16">
                                <img src={p2} alt="" />
                            </div>
                        )}
                    </div>
                    <div className="grid grid-cols-1 w-full lg:hidden">
                        <img src={p1m} alt=""/>
                        {this.state.shown && (
                            <div className="mt-16">
                                <img src={p2m} alt="" />
                            </div>
                        )}
                    </div>
                    <div className="flex justify-center mb-40 w-full">
                        <button className="hover:bg-yellow-500 text-white font-bold py-2 px-6 shopBtn" onClick={() => this.handleOptionShown()}>
                            {!this.state.shown ? "顯示全部技術規格" : "隱藏部分技術規格"}
                        </button>

                    </div>
                </div>
                
            </section>
        );
    }
    
}

export default SpecPanel;