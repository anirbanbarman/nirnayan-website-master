import React from 'react'
import Slider from "react-slick";
import styles from "./BannerSlide.module.scss"

const BannerSlider = () => {

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,

    };
    return (
        <div className="banner-container my-sm-3 my-1  px-sm-4" style={{width:"99%"}}>

            <Slider {...settings}>
                <div className='position-relative'>

                    {/* <div style={{
                        position: "absolute",
                        top: "28%",
                        left: "20%",
                        transform: "translateY(-50%)",

                        width: "300px"
                    }}>
                        <h1 style={{ fontWeight: 700, color: "#005a96" }}>Lorem Ipsum</h1>
                        <div style={{ height: 3, backgroundColor: "green" }}></div>
                        <p>Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum</p>
                    </div> */}
                    <img src='images/banner-bg.jpg' className={styles.banner} alt="" />

                </div>

                <div className='position-relative'>

                    {/* <div style={{
                        position: "absolute",
                        top: "28%",
                        left: "20%",
                        transform: "translateY(-50%)",

                        width: "300px"
                    }}>
                        <h1 style={{ fontWeight: 700, color: "#005a96" }}>Lorem Ipsum</h1>
                        <div style={{ height: 3, backgroundColor: "green" }}></div>
                        <p>Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum</p>
                    </div> */}
                    <img src='images/banner-bg.jpg' className={styles.banner} alt=""/>

                </div>


            </Slider>
        </div>
    );

}

export default BannerSlider