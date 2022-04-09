import React from "react";
import { useHistory } from "react-router-dom";

import Slider from "react-slick";
import './CardCarousal.scss';

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



export default function CardCarousal(props) {


    let history = useHistory();

    function handleClick() {
        history.push(`/${props.link}`);
    }


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
                    slidesToScroll: 1,
                    dots: false
                }
            }
        ]
    };
    return (
        <div className="container mt-5 px-4">
            {props.title && <div className="text-center">
                <h1 >{props.title}</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga </p>
            </div>}  

            <Slider {...settings}>
                <div onClick={handleClick}>
                    <div className="card-width" style={{
                        height: '280px',
                        margin: '15px',
                        backgroundColor: "white",

                        borderRadius: '20px',
                        boxShadow: '3px 4px 11px 0px #613f4a',
                        position: "relative"

                    }}>
                        <div style={{ height: '50px', backgroundColor: "#008896", borderTopLeftRadius: '20px', borderTopRightRadius: "20px" }}>
                            <h6 className="w-50 text-white p-2">Basic Health Package</h6>
                        </div>

                        <div className="p-2">
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis aperiam laudantium consectetur possimus!</p>
                        </div>

                        <div style={{ position: "absolute", width: "100%", bottom: 0, height: "50px" }}>
                            <div className="d-flex justify-content-between mx-3">
                                <div className="text-black"><h2>₹100</h2></div>
                                <div><img src="images/icons/basket-round.png" width={40} alt="" /></div>
                            </div>

                        </div>


                    </div>
                </div>
                <div onClick={handleClick}>
                    <div className="card-width" style={{
                        height: '280px',
                        margin: '15px',
                        backgroundColor: "white",


                        borderRadius: '20px',
                        boxShadow: '3px 4px 11px 0px #613f4a',
                        position: "relative"

                    }}>
                        <div style={{ height: '50px', backgroundColor: "#008896", borderTopLeftRadius: '20px', borderTopRightRadius: "20px" }}>
                            <h6 className="w-50 text-white p-2">Basic Health Package</h6>
                        </div>

                        <div className="p-2">
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis aperiam laudantium consectetur possimus!</p>
                        </div>

                        <div style={{ position: "absolute", width: "100%", bottom: 0, height: "50px" }}>
                            <div className="d-flex justify-content-between mx-3">
                                <div className="text-black"><h2>₹100</h2></div>
                                <div><img src="images/icons/basket-round.png" width={40} alt="" /></div>
                            </div>

                        </div>


                    </div>
                </div>

                <div onClick={handleClick}>
                    <div className="card-width" style={{
                        height: '280px',
                        margin: '15px',

                        backgroundColor: "white",
                        borderRadius: '20px',
                        boxShadow: '3px 4px 11px 0px #613f4a',
                        position: "relative"

                    }}>
                        <div style={{ height: '50px', backgroundColor: "#008896", borderTopLeftRadius: '20px', borderTopRightRadius: "20px" }}>
                            <h6 className="w-50 text-white p-2">Basic Health Package</h6>
                        </div>

                        <div className="p-2">
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis aperiam laudantium consectetur possimus!</p>
                        </div>

                        <div style={{ position: "absolute", width: "100%", bottom: 0, height: "50px" }}>
                            <div className="d-flex justify-content-between mx-3">
                                <div className="text-black"><h2>₹100</h2></div>
                                <div><img src="images/icons/basket-round.png" width={40} alt="" /></div>
                            </div>

                        </div>


                    </div>



                </div>
                <div onClick={handleClick}>
                    <div className="card-width" style={{
                        height: '280px',
                        margin: '15px',

                        backgroundColor: "white",
                        borderRadius: '20px',
                        boxShadow: '3px 4px 11px 0px #613f4a',
                        position: "relative"

                    }}>
                        <div style={{ height: '50px', backgroundColor: "#008896", borderTopLeftRadius: '20px', borderTopRightRadius: "20px" }}>
                            <h6 className="w-50 text-white p-2">Basic Health Package</h6>
                        </div>

                        <div className="p-2">
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis aperiam laudantium consectetur possimus!</p>
                        </div>

                        <div style={{ position: "absolute", width: "100%", bottom: 0, height: "50px" }}>
                            <div className="d-flex justify-content-between mx-3">
                                <div className="text-black"><h2>₹100</h2></div>
                                <div><img src="images/icons/basket-round.png" width={40} alt=""/></div>
                            </div>

                        </div>


                    </div>



                </div>
                <div onClick={handleClick}>
                    <div className="card-width" style={{
                        height: '280px',
                        margin: '15px',

                        backgroundColor: "white",
                        borderRadius: '20px',
                        boxShadow: '3px 4px 11px 0px #613f4a',
                        position: "relative"

                    }}>
                        <div style={{ height: '50px', backgroundColor: "#008896", borderTopLeftRadius: '20px', borderTopRightRadius: "20px" }}>
                            <h6 className="w-50 text-white p-2">Basic Health Package</h6>
                        </div>

                        <div className="p-2">
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis aperiam laudantium consectetur possimus!</p>
                        </div>

                        <div style={{ position: "absolute", width: "100%", bottom: 0, height: "50px" }}>
                            <div className="d-flex justify-content-between mx-3">
                                <div className="text-black"><h2>₹100</h2></div>
                                <div><img src="images/icons/basket-round.png" width={40} alt=""/></div>
                            </div>

                        </div>


                    </div>



                </div>
                <div onClick={handleClick}>
                    <div className="card-width" style={{
                        height: '280px',
                        margin: '15px',

                        backgroundColor: "white",
                        borderRadius: '20px',
                        boxShadow: '3px 4px 11px 0px #613f4a',
                        position: "relative"

                    }}>
                        <div style={{ height: '50px', backgroundColor: "#008896", borderTopLeftRadius: '20px', borderTopRightRadius: "20px" }}>
                            <h6 className="w-50 text-white p-2">Basic Health Package</h6>
                        </div>

                        <div className="p-2">
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis aperiam laudantium consectetur possimus!</p>
                        </div>

                        <div style={{ position: "absolute", width: "100%", bottom: 0, height: "50px" }}>
                            <div className="d-flex justify-content-between mx-3">
                                <div className="text-black"><h2>₹100</h2></div>
                                <div><img src="images/icons/basket-round.png" width={40} alt="" /></div>
                            </div>

                        </div>


                    </div>



                </div>
                <div>
                    <div className="card-width" style={{
                        height: '280px',
                        margin: '15px',
                        backgroundColor: "white",
                        borderRadius: '20px',
                        boxShadow: '3px 4px 11px 0px #613f4a',
                        position: "relative"

                    }}>
                        <div style={{ height: '50px', backgroundColor: "#008896", borderTopLeftRadius: '20px', borderTopRightRadius: "20px" }}>
                            <h6 className="w-50 text-white p-2">Basic Health Package</h6>
                        </div>

                        <div className="p-2">
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis aperiam laudantium consectetur possimus!</p>
                        </div>

                        <div style={{ position: "absolute", width: "100%", bottom: 0, height: "50px" }}>
                            <div className="d-flex justify-content-between mx-3">
                                <div className="text-black"><h2>₹100</h2></div>
                                <div><img src="images/icons/basket-round.png" width={40} alt=""/></div>
                            </div>

                        </div>


                    </div>



                </div>
                <div>
                    <div className="card-width" style={{
                        height: '280px',
                        margin: '15px',
                        backgroundColor: "white",
                        borderRadius: '20px',
                        boxShadow: '3px 4px 11px 0px #613f4a',
                        position: "relative"

                    }}>
                        <div style={{ height: '50px', backgroundColor: "#008896", borderTopLeftRadius: '20px', borderTopRightRadius: "20px" }}>
                            <h6 className="w-50 text-white p-2">Basic Health Package</h6>
                        </div>

                        <div className="p-2">
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis aperiam laudantium consectetur possimus!</p>
                        </div>

                        <div style={{ position: "absolute", width: "100%", bottom: 0, height: "50px" }}>
                            <div className="d-flex justify-content-between mx-3">
                                <div className="text-black"><h2>₹100</h2></div>
                                <div><img src="images/icons/basket-round.png" width={40} alt="" /></div>
                            </div>

                        </div>


                    </div>



                </div>





            </Slider>
        </div>
    );

}