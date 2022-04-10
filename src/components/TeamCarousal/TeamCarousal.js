import React from 'react';
import './TeamCarousal.scss'
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


function TeamCarousal() {

    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
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
                    <div>
                        <div className="each-team">
                            <div className="team-wrap">
                                <div className="team-head">
                                    <img src="images/doc.jpg" alt="" />
                                </div>
                            </div>
                            <div className="team-txt text-center">
                                <h4>DR. ASHISH SAHA</h4>
                            </div>
                            <h5>MD Lorem Ipsum
                                Lorem Ipsum</h5>




                        </div>
                        <img src="images/SHADOW.png" style={{ width: 230, position: '', marginTop: 45 }} alt="" />
                    </div>

                    <div>
                        <div className="each-team">
                            <div className="team-wrap">
                                <div className="team-head">
                                    <img src="images/doc.jpg" alt="" />
                                </div>
                            </div>
                            <div className="team-txt text-center">
                                <h4>DR. ASHISH SAHA</h4>
                            </div>
                            <h5>MD Lorem Ipsum
                                Lorem Ipsum</h5>




                        </div>
                        <img src="images/SHADOW.png" style={{ width: 230, position: '', marginTop: 45 }} alt="" />
                    </div>

                    <div>
                        <div className="each-team">
                            <div className="team-wrap">
                                <div className="team-head">
                                    <img src="images/doc.jpg" alt="" />
                                </div>
                            </div>
                            <div className="team-txt text-center">
                                <h4>DR. ASHISH SAHA</h4>
                            </div>
                            <h5>MD Lorem Ipsum
                                Lorem Ipsum</h5>




                        </div>
                        <img src="images/SHADOW.png" style={{ width: 230, position: '', marginTop: 45 }} alt="" />
                    </div>

                    <div>
                        <div className="each-team">
                            <div className="team-wrap">
                                <div className="team-head">
                                    <img src="images/doc.jpg" alt="" />
                                </div>
                            </div>
                            <div className="team-txt text-center">
                                <h4>DR. ASHISH SAHA</h4>
                            </div>
                            <h5>MD Lorem Ipsum
                                Lorem Ipsum</h5>




                        </div>
                        <img src="images/SHADOW.png" style={{ width: 230, position: '', marginTop: 45 }} alt="" />
                    </div>

                    <div>
                        <div className="each-team">
                            <div className="team-wrap">
                                <div className="team-head">
                                    <img src="images/doc.jpg" alt="" />
                                </div>
                            </div>
                            <div className="team-txt text-center">
                                <h4>DR. ASHISH SAHA</h4>
                            </div>
                            <h5>MD Lorem Ipsum
                                Lorem Ipsum</h5>




                        </div>
                        <img src="images/SHADOW.png" style={{ width: 230, position: '', marginTop: 45 }} alt="" />
                    </div>

                    <div>
                        <div className="each-team">
                            <div className="team-wrap">
                                <div className="team-head">
                                    <img src="images/doc.jpg" alt="" />
                                </div>
                            </div>
                            <div className="team-txt text-center">
                                <h4>DR. ASHISH SAHA</h4>
                            </div>
                            <h5>MD Lorem Ipsum
                                Lorem Ipsum</h5>




                        </div>
                        <img src="images/SHADOW.png" style={{ width: 230, position: '', marginTop: 45 }} alt="" />
                    </div>



                </Slider>
            </div>

        </div>
    )
}

export default TeamCarousal