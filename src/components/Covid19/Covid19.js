import React from 'react'
import './Covid19.scss';

function Covid19() {
    return (
        <div className='container my-5 position-relative'>
             <div className="text-center">
                <h1 >Covid-19</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga </p>
            </div>
            <div style={{
                height: 360,
                

            }}>
                <div className='row covid-bg'
                    style={{
                        backgroundImage: 'url("images/covid-right.png")',
                        margin: 0
                     }}>
                    <div className="col-sm-6 d-none d-md-block" >
                        <div className='position-relative'>
                            < img className='' src="images/covid-left.png" alt="covid left" style={
                            
                                {borderTopLeftRadius:15,borderBottomLeftRadius:15, "width": "100%", "height": "360px", "objectFit": "cover", "objectPosition": "0px 100%" }
                            } />
                            <div className='position-absolute mx-4 px-3 w-75'

                                style={{
                                    top: "7rem",

                                }}>
                                <div className='w-75 text-white'>
                                    <h4 >Lorem ipsum dolor sit amet.</h4>
                                </div>
                                <div style={{ height: 2, width: 200, backgroundColor: "#fbb255" }}></div>
                                <p className='w-75 text-white' style={{ lineHeight: 1.2 }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, voluptatibus dolores. Id tempora incidunt assumenda nesciunt molestiae architecto, illum quam?</p>
                            </div>

                        </div>

                    </div>
                    <div className="col-sm-6 align-self-center">
                        <div className="row">
                            <div className="col-4">
                                <div style={{

                                    "height": "130px", "backgroundColor": "white", "border": "2px solid #008e58", "borderRadius": "10px"
                                }}>

                                </div>

                            </div>
                            <div className="col-4">
                                <div style={{

                                    "height": "130px", "backgroundColor": "white", "border": "2px solid #008e58", "borderRadius": "10px"
                                }}>

                                </div>
                            </div>
                            <div className="col-4">
                                <div style={{

                                    "height": "130px", "backgroundColor": "white", "border": "2px solid #008e58", "borderRadius": "10px"
                                }}>

                                </div>
                            </div>
                        </div>

                    </div>

                </div>

            </div>

        </div>
    )
}

export default Covid19