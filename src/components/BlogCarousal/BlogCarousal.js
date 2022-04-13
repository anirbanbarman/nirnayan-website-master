import React, { Component } from "react";
import Slider from "react-slick";
import './BlogCarousal.scss';

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

export default class BlogCarousal extends Component {
    render() {
        console.log(this.props.hide)
        var settings = {
            dots: false,
            infinite: false,
            speed: 500,
            slidesToShow: 4,
            slidesToScroll: 2,
            initialSlide: 0,
            nextArrow: <SampleNextArrow />,
            prevArrow: <SamplePrevArrow />,
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 3,

                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2,
                        initialSlide: 2
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
            ]
        };
        return (
            <div className="container mt-5 px-4">
                <div className="text-center">
                    {!this.props.hide &&
                        <>    <h1 >Blogs</h1>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga </p>
                        </>}

                </div>
                <Slider {...settings}>
                    <div >

                        <div className="each-test">

                            <div className="test-wrap">
                                <img src="images/blog2.jpg" style={{
                                    width: "100%",
                                    height: "100%",
                                    objectFit: "cover"
                                }} alt="" />
                            </div>

                            <h5 className="mt-4" style={{ color: "#00a05e" }}>Basic Health Packages</h5>
                            <div className="m-0">Lorem Ipsum Lorem Ipsum Lorem
                                Ipsum Lorem Ipsum Lorem Ipsum Lorem
                            </div>
                        </div>
                    </div>



                    <div >

                        <div className="each-test">

                            <div className="test-wrap">
                                <img src="images/blog1.jpg" style={{
                                    width: "100%",
                                    height: "100%",
                                    objectFit: "cover"
                                }} alt="" />
                            </div>

                            <h5 className="mt-4" style={{ color: "#00a05e" }}>Basic Health Packages</h5>
                            <div className="m-0">Lorem Ipsum Lorem Ipsum Lorem
                                Ipsum Lorem Ipsum Lorem Ipsum Lorem
                            </div>
                        </div>
                    </div>


                    <div >

                        <div className="each-test">

                            <div className="test-wrap">
                                <img src="images/blog3.jpg" style={{
                                    width: "100%",
                                    height: "100%",
                                    objectFit: "cover"
                                }} alt="" />
                            </div>

                            <h5 className="mt-4" style={{ color: "#00a05e" }}>Basic Health Packages</h5>
                            <div className="m-0">Lorem Ipsum Lorem Ipsum Lorem
                                Ipsum Lorem Ipsum Lorem Ipsum Lorem
                            </div>
                        </div>
                    </div>

                    <div >

                        <div className="each-test">

                            <div className="test-wrap">
                                <img src="images/blog4.png" style={{
                                    width: "100%",
                                    height: "100%",
                                    objectFit: "cover"
                                }} alt="" />
                            </div>

                            <h5 className="mt-4" style={{ color: "#00a05e" }}>Basic Health Packages</h5>
                            <div className="m-0">Lorem Ipsum Lorem Ipsum Lorem
                                Ipsum Lorem Ipsum Lorem Ipsum Lorem
                            </div>
                        </div>
                    </div>
                    <div >

                        <div className="each-test">

                            <div className="test-wrap">
                                <img src="images/blog1.jpg" style={{
                                    width: "100%",
                                    height: "100%",
                                    objectFit: "cover"
                                }} alt="" />
                            </div>

                            <h5 className="mt-4" style={{ color: "#00a05e" }}>Basic Health Packages</h5>
                            <div className="m-0">Lorem Ipsum Lorem Ipsum Lorem
                                Ipsum Lorem Ipsum Lorem Ipsum Lorem
                            </div>
                        </div>
                    </div>
                    <div >

                        <div className="each-test">

                            <div className="test-wrap">
                                <img src="images/blog3.jpg" style={{
                                    width: "100%",
                                    height: "100%",
                                    objectFit: "cover"
                                }} alt="" />
                            </div>

                            <h5 className="mt-4" style={{ color: "#00a05e" }}>Basic Health Packages</h5>
                            <div className="m-0">Lorem Ipsum Lorem Ipsum Lorem
                                Ipsum Lorem Ipsum Lorem Ipsum Lorem
                            </div>
                        </div>
                    </div>
                    <div >

                        <div className="each-test">

                            <div className="test-wrap">
                                <img src="images/blog4.png" style={{
                                    width: "100%",
                                    height: "100%",
                                    objectFit: "cover"
                                }} alt="" />
                            </div>

                            <h5 className="mt-4" style={{ color: "#00a05e" }}>Basic Health Packages</h5>
                            <div className="m-0">Lorem Ipsum Lorem Ipsum Lorem
                                Ipsum Lorem Ipsum Lorem Ipsum Lorem
                            </div>
                        </div>
                    </div>
                    <div >

                        <div className="each-test">

                            <div className="test-wrap">
                                <img src="images/blog1.jpg" style={{
                                    width: "100%",
                                    height: "100%",
                                    objectFit: "cover"
                                }} alt="" />
                            </div>

                            <h5 className="mt-4" style={{ color: "#00a05e" }}>Basic Health Packages</h5>
                            <div className="m-0">Lorem Ipsum Lorem Ipsum Lorem
                                Ipsum Lorem Ipsum Lorem Ipsum Lorem
                            </div>
                        </div>
                    </div>





                </Slider>
            </div>
        );
    }
}