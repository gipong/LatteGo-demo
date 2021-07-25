import React, { Component } from 'react';
import p14t1 from '../images/p14t1.png';
import p14btn2 from '../images/p14btn2.png';
import p14option1 from '../images/p14option1.png';
import p14option2 from '../images/p14option2.png';
import p14option3 from '../images/p14option3.png';
import p14optionIcon from '../images/p14optionIcon.png';
import p14option1img from '../images/p14option1img.png';
import p14option2img from '../images/p14option2img.png';
import p14option3img from '../images/p14option3img.png';
import p14option4 from '../images/p14option4.png';
import p14option5 from '../images/p14option5.png';

const optionList = [
    p14option1, p14option2, p14option3
];

const optionImgList = [
    p14option1img, p14option2img, p14option3img
];

class ShopPanel extends Component {

    constructor(props) {
        super(props);
        this.handleOptionImgs = this.handleOptionImgs.bind(this);
        this.handleOptionShown = this.handleOptionShown.bind(this);
        
        this.state = {
            id: 0,
            shown: false
        }
    }    

    handleOptionImgs(id) {
        console.log(id);
        this.setState({id: id, shown: !this.state.shown})
    }

    handleOptionShown(status) {
        this.setState({shown: status})
    }

    render() {
        return (
            <section id="shopPanel" name="shopPanel" className="shopPanel-section flex items-center justify-center w-full h-screen bg-center bg-cover relative">
                <div className="grid grid-cols-3 w-full h-full">
                    <div className="col-span-1 shopPanelLeft">
                        <div className="flex flex-col items-start h-screen">
                            <div className="grid grid-cols-1">
                                <img src={p14t1} alt="" className="col-span-1 p-4 lg:py-20 grid" />
                            </div>
                            <div className="grid grid-cols-1">
                                <button className="hover:bg-yellow-500 hover:border-yellow-500 text-white font-bold py-2 px-6 shopBtn">
                                    <a href="https://www.momoshop.com.tw/goods/GoodsDetail.jsp?i_code=8895802&str_category_code=2900500018&ctype=B&Area=DgrpCategory" target="_blank">
                                        <img src={p14btn2} alt="" />
                                    </a>
                                </button>

                            </div>
                            <div className="grid mr-8">
                                <button className=" hover:bg-yellow-500 text-white font-bold py-2 px-6 shopBtn flex flex-row justify-center items-center relative"
                                    onMouseEnter={() => this.handleOptionShown(true)}>
                                    <img src={optionList[this.state.id]} alt="" className="pl-4 pr-1" />
                                    <img src={p14optionIcon} alt="" className="pr-4 pl-1 shopPanelOptionIcon" />
                                    {this.state.shown && (
                                        <div className="absolute rouned ut-2 shopPanelOptions w-full">
                                            <div className="hover:text-yellow-500 m-2" value="0" onClick={() => this.handleOptionImgs(0)}>
                                                {/* <img src={p14option1} alt="" className="pl-4 pr-1" /> */}
                                                百貨銷售店點-北區
                                            </div>
                                            <div className="hover:text-yellow-500 m-2" value="1" onClick={() => this.handleOptionImgs(1)}>
                                                {/* <img src={p14option2} alt="" className="pl-4 pr-1" /> */}
                                                百貨銷售店點-中區
                                            </div>
                                            <div className="hover:text-yellow-500 m-2" value="2" onClick={() => this.handleOptionImgs(2)}>
                                                {/* <img src={p14option3} alt="" className="pl-4 pr-1" /> */}
                                                百貨銷售店點-南區
                                            </div>
                                            <div className="hover:text-yellow-500 m-2" value="2" >
                                                {/* <img src={p14option3} alt="" className="pl-4 pr-1" /> */}
                                                <a href="https://web.elifemall.com.tw/zh/store.php" target="_blank">3C專賣店及銷售大型量販店</a>
                                            </div>
                                            <div className="hover:text-yellow-500 m-2" value="2" onClick={() => this.handleOptionImgs(2)}>
                                                {/* <img src={p14option3} alt="" className="pl-4 pr-1" /> */}
                                                <a href="https://www.store-philips.tw/v2/official/SalePageCategory/73358" target="_blank">飛利浦直購體驗店</a>
                                            </div>
                                        </div>
                                    )}
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="shopPanelImg">
                        <img src={optionImgList[this.state.id]} alt="" className="pl-4 pr-1" />
                    </div>
                </div>
            </section>
        );
    }
    
}

export default ShopPanel;