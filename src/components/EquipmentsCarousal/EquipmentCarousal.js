import React from 'react'
import './EquipmentCarousal.scss';
import Slider from "react-slick";

function SampleNextArrow(props) {
    const { className, style, onClick } = props;

    return (
        <div
            className={className + " next"}
            style={{ ...style, display: "block" }}
            onClick={onClick}
        />
    );
}

function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className + " prev"}
            style={{ ...style, display: "block", }}
            onClick={onClick}
        />
    );
}

export default function EquipmentCarousal() {

    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        initialSlide: 0,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    initialSlide: 2,
                    dots: false
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 2,
                    dots: false
                }
            }
        ]
    };

    return (
        <div>
            <div className='container my-5 px-sm-5'>
                <Slider {...settings}>



                    <div className="each-equipment">
                        <div className="equipment-wrap">
                            <img src="images/equipment.png" style={{
                                width: "100%",
                                height: "100%",
                                objectFit: "cover"
                            }} alt="" />
                            <div className='dept_content'>
                                <h5 className='text-uppercase text-white font-weight-bold' > Image Content</h5>
                                <div className='my-3'>
                                    <div className='dept_sub_content'>Image Content Image Content Image Content Image Content Image Content</div>
                                </div>

                            </div>

                        </div>

                    </div>
                    <div className="each-equipment">
                        <div className="equipment-wrap">
                            <img src="images/equipment.png" style={{
                                width: "100%",
                                height: "100%",
                                objectFit: "cover"
                            }} alt="" />
                            <div className='dept_content'>
                                <h5 className='text-uppercase text-white font-weight-bold' > Image Content</h5>
                                <div className='my-3'>
                                    <div className='dept_sub_content'>Image Content Image Content Image Content Image Content Image Content</div>
                                </div>

                            </div>

                        </div>

                    </div>
                    <div className="each-equipment">
                        <div className="equipment-wrap">
                            <img src="images/equipment.png" style={{
                                width: "100%",
                                height: "100%",
                                objectFit: "cover"
                            }} alt="" />
                            <div className='dept_content'>
                                <h5 className='text-uppercase text-white font-weight-bold' > Image Content</h5>
                                <div className='my-3'>
                                    <div className='dept_sub_content'>Image Content Image Content Image Content Image Content Image Content</div>
                                </div>

                            </div>

                        </div>

                    </div>
                    <div className="each-equipment">
                        <div className="equipment-wrap">
                            <img src="images/equipment.png" style={{
                                width: "100%",
                                height: "100%",
                                objectFit: "cover"
                            }} alt="" />
                            <div className='dept_content'>
                                <h5 className='text-uppercase text-white font-weight-bold' > Image Content</h5>
                                <div className='my-3'>
                                    <div className='dept_sub_content'>Image Content Image Content Image Content Image Content Image Content</div>
                                </div>

                            </div>

                        </div>

                    </div>
                    <div className="each-equipment">
                        <div className="equipment-wrap">
                            <img src="images/equipment.png" style={{
                                width: "100%",
                                height: "100%",
                                objectFit: "cover"
                            }} alt="" />
                            <div className='dept_content'>
                                <h5 className='text-uppercase text-white font-weight-bold' > Image Content</h5>
                                <div className='my-3'>
                                    <div className='dept_sub_content'>Image Content Image Content Image Content Image Content Image Content</div>
                                </div>

                            </div>

                        </div>

                    </div>
                    <div className="each-equipment">
                        <div className="equipment-wrap">
                            <img src="images/equipment.png" style={{
                                width: "100%",
                                height: "100%",
                                objectFit: "cover"
                            }} alt="" />
                            <div className='dept_content'>
                                <h5 className='text-uppercase text-white font-weight-bold' > Image Content</h5>
                                <div className='my-3'>
                                    <div className='dept_sub_content'>Image Content Image Content Image Content Image Content Image Content</div>
                                </div>

                            </div>

                        </div>

                    </div>



                </Slider>
            </div>
        </div>
    )
}
