
import React, { Component } from "react";
import Slider from "react-slick";
import './AwardsCarousal.scss';

function SampleNextArrow(props) {
    const { className, style, onClick } = props;
  
    return (
        <div
            className="slick-arrow slick-next next"
            style={{ ...style, display: "block"}}
            onClick={onClick}
        />
    );
}

function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className="slick-arrow slick-prev prev"
            style={{ ...style, display: "block", }}
            onClick={onClick}
        />
    );
}

export default class AwardsCarousal extends Component {
    render() {
        var settings = {
            dots: false,
            infinite: false,
            speed: 500,
            slidesToShow: 4,
            slidesToScroll: 2,
            initialSlide: 0,
            nextArrow: <SampleNextArrow  />,
            prevArrow: <SamplePrevArrow />,
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 3,
                        infinite: true,
                        dots: true
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
                    <h1 >Awards & Accolades</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga </p>
                </div>
                <Slider {...settings}>
                    <div >

                        <div className="_each-test">

                            <div className="_test-wrap ">
                                <img src="images/awards2.png" style={{
                                    width: "100%",
                                    height: "100%",
                                    objectFit: "cover",
                                    filter: "blur(2px)",

                                }} alt="" />
                            </div>


                        </div>
                    </div>



                    <div >

                        <div className="_each-test">

                            <div className="_test-wrap ">
                                <img src="images/awards1.png" style={{
                                    width: "100%",
                                    height: "100%",
                                    objectFit: "cover",
                                    objectFit: "cover",
                                    filter: "blur(2px)",
                                }} alt="" />
                            </div>


                        </div>
                    </div>


                    <div >

                        <div className="_each-test">

                            <div className="_test-wrap ">
                                <img src="images/awards2.png" style={{
                                    width: "100%",
                                    height: "100%",
                                    objectFit: "cover",
                                    objectFit: "cover",
                                    filter: "blur(2px)",
                                }} alt="" />
                            </div>


                        </div>
                    </div>

                    <div >

                        <div className="_each-test">

                            <div className="_test-wrap ">
                                <img src="images/awards3.png" style={{
                                    width: "100%",
                                    height: "100%",
                                    objectFit: "cover",
                                    objectFit: "cover",
                                    filter: "blur(2px)",
                                }} alt="" />
                            </div>


                        </div>
                    </div>
                    <div >

                        <div className="_each-test">

                            <div className="_test-wrap ">
                                <img src="images/awards1.png" style={{
                                    width: "100%",
                                    height: "100%",
                                    objectFit: "cover",
                                    objectFit: "cover",
                                    filter: "blur(2px)",
                                }} alt="" />
                            </div>


                        </div>
                    </div>
                    <div >

                        <div className="_each-test">

                            <div className="_test-wrap ">
                                <img src="images/awards2.png" style={{
                                    width: "100%",
                                    height: "100%",
                                    objectFit: "cover",
                                    objectFit: "cover",
                                    filter: "blur(2px)",
                                }} alt="" />
                            </div>


                        </div>
                    </div>
                    <div >

                        <div className="_each-test">

                            <div className="_test-wrap ">
                                <img src="images/awards1.png" style={{
                                    width: "100%",
                                    height: "100%",
                                    objectFit: "cover",
                                    objectFit: "cover",
                                    filter: "blur(2px)",
                                }} alt="" />
                            </div>


                        </div>
                    </div>
                    <div >

                        <div className="_each-test">

                            <div className="_test-wrap ">
                                <img src="images/awards3.png" style={{
                                    width: "100%",
                                    height: "100%",
                                    objectFit: "cover",
                                    objectFit: "cover",
                                    filter: "blur(2px)",
                                }} alt="" />
                            </div>


                        </div>
                    </div>





                </Slider>
            </div>
        );
    }
}