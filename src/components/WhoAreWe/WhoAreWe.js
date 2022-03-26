import React from 'react'

function WhoAreWe() {
    return (
        <div className='container'>

            <div className="row" style={{ height: 350 }}>
                <div className="col-md-7  px-sm-5 pt-5">
                    <h4 style={{ color: "#44b098" }}>How we are ?</h4>
                    <div className='w-50' style={{ height: 3, backgroundColor: "black" }}></div>
                    <div className='w-sm-75'>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa assumenda deserunt accusantium, repellat fugiat praesentium reiciendis ut consequatur eum non ratione dolores architecto enim veritatis mollitia a ipsam eaque in! Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio ipsam nulla culpa fugiat quidem possimus neque alias. Perspiciatis adipisci est nostrum omnis quibusdam nobis vel ipsum, culpa ex cupiditate. Explicabo.</p>

                    </div>

                </div>
                <div className="col-md-5 align-self-center d-flex justify-content-center">
                    <div style={{
                        backgroundColor: "#daf5b2",
                        width: "320px",
                        borderRadius: 15,
                        height: 330,
                        boxShadow: "4px 4px 7px 0px #bfb5b5"
                    }}>
                        <div className='py-3'>
                            <h5 style={{ color: "#44b098", textAlign: "center", lineHeight: 1, margin: 0 }}>Accreditation</h5>
                            <img src='images/icons/line.png' width={"98%"} alt="line" />

                            <div className="row p-2">
                                <div className="col-3 mx-2">
                                    <div style={{ width: 70, height: 70, backgroundColor: "white", borderRadius: 50 }}>
                                        <img style={{
                                            width: 50,
                                            height: 50,
                                            transform: "translate(10px, 12px)"
                                        }} src="images/icons/nabl-log.png" />
                                    </div>
                                </div>
                                <div className="col-8" style={{ fontSize: 12, lineHeight: 1.2 }}>Lorem ipsum dolor sit  repudiandae mollitia impedit quibusdam sunt porro accusamus facilis nemo?</div>

                            </div>
                            <div className="row p-2">

                                <div className="col-7 mx-2" style={{ fontSize: 12, lineHeight: 1.2 }}>Lorem ipsum dolor sit  repudiandae mollitia impedit quibusdam sunt porro accusamus facilis nemo?</div>
                                <div className="col-3 ">
                                    <div style={{ width: 70, height: 70, backgroundColor: "white", borderRadius: 50 }}>
                                        <img style={{
                                            width: 50,
                                            height: 50,
                                            transform: "translate(10px, 12px)"
                                        }} src="images/icons/iso-logo.png" />
                                    </div>
                                </div>
                            </div>
                            <div className="row p-2">
                                <div className="col-3 mx-2">
                                    <div style={{ width: 70, height: 70, backgroundColor: "white", borderRadius: 50 }}>
                                        <img style={{
                                            width: 50,
                                            height: 50,
                                            transform: "translate(10px, 12px)"
                                        }} src="images/icons/nabl-log.png" />
                                    </div>
                                </div>
                                <div className="col-8" style={{ fontSize: 12, lineHeight: 1.2 }}>Lorem ipsum dolor sit  repudiandae mollitia impedit quibusdam sunt porro accusamus facilis nemo?</div>

                            </div>
                        </div>


                    </div>
                </div>
            </div>

            <div className='d-none d-md-block' style={{ textAlign: "center" }}><button style={{
                "backgroundColor": "rgb(212, 249, 207)", "padding": "3px 12px", "borderColor": "#049961", "boxShadow": "none", "borderRadius": "15px"


            }}>About us</button></div>




        </div>
    )
}

export default WhoAreWe