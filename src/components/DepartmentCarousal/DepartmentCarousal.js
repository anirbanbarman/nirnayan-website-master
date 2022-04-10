import React from 'react';
import './DepartmentCarousal.scss';
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

function DepartmentCarousal() {
    console.log("department")
    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 7,
        slidesToScroll: 1,
        initialSlide: 0,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 2,
                    infinite: true,
                    dots: false
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 2,
                    initialSlide: 2,
                    dots: false
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    dots: false
                }
            }
        ]
    };



    return (
        <>
            <div className='container my-5 px-sm-5'>
                <Slider {...settings}>

                    <div className='department-item' >
                        <div className="dept_round-item text-center">
                        </div>
                        <div className='dept-text text-center dept_active'>Biochemistry</div>
                    </div>
                    <div className='department-item' >
                        <div className="dept_round-item text-center">
                        </div>
                        <div className='dept-text text-center'>Biochemistry</div>
                    </div>
                    <div className='department-item' >
                        <div className="dept_round-item text-center">
                        </div>
                        <div className='dept-text text-center'>Biochemistry</div>
                    </div>
                    <div className='department-item' >
                        <div className="dept_round-item text-center">
                        </div>
                        <div className='dept-text text-center'>Biochemistry</div>
                    </div>
                    <div className='department-item' >
                        <div className="dept_round-item text-center">
                        </div>
                        <div className='dept-text text-center'>Biochemistry</div>
                    </div>


                    <div className='department-item' >
                        <div className="dept_round-item text-center">
                        </div>
                        <div className='dept-text text-center'>Hematology</div>
                    </div>

                    <div className='department-item' >
                        <div className="dept_round-item text-center">
                        </div>
                        <div className='dept-text text-center'>Cytology</div>
                    </div>

                    <div className='department-item' >
                        <div className="dept_round-item text-center">
                        </div>
                        <div className='dept-text text-center'>MolecularBiology</div>
                    </div>
                    <div className='department-item' >
                        <div className="dept_round-item text-center">
                        </div>
                        <div className='dept-text text-center'>Histopathology</div>
                    </div>
                    <div className='department-item' >
                        <div className="dept_round-item text-center">
                        </div>
                        <div className='dept-text text-center'>Haetnatology</div>
                    </div>
                    <div className='department-item' >
                        <div className="dept_round-item text-center">
                        </div>
                        <div className='dept-text text-center'>Histopathology</div>
                    </div>








                </Slider>



            </div>
            <div className='green_bar'></div>
        </>
    )
}

export default DepartmentCarousal