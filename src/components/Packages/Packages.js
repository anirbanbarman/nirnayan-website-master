import { MDBAccordion, MDBAccordionItem } from 'mdb-react-ui-kit'
import React from 'react'
import "./Packages.scss"

function Packages() {
    return (
        <div>
            <div className='container-fluid' style={{ height: "400px", position: "relative" }}>
                <div className='row'>
                    <div className='col-md-6' style={{
                        marginTop: '60px',
                        paddingLeft: '30px'
                    }}>
                        <div>
                            <div className='d-flex w-100 align-items-center'>
                                <div className='pkg-text-size' style={{ color: "#005a96" }}><h2  className='pkg-text-size'>Executive Package </h2> <h2 className='pkg-text-size' >Platinum Male</h2></div>
                                <h1 style={{ marginLeft: 50, display: "flex" }}><span style={{ color: "gray", textDecoration: "line-through", textDecorationColor: "red" }}>₹1299/- </span> <span style={{ color: "black", marginLeft: 20 }}>₹699/- </span></h1>
                            </div>
                            <div className='d-lg-flex'>
                                <div className='pkg-description'>
                                    <i>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text</i>
                                </div>

                                <div className='d-flex justify-content-center align-items-center my-4'>
                                    <div className='px-2 m-2' style={{ backgroundColor: "#00b8b0", padding: 3, color: "white", borderRadius: 20, minWidth: 105, textAlign: "center" }}>Book Test</div>
                                    <div className='px-2 m-2' style={{ backgroundColor: "white", borderRadius: 20, border: "2px solid #00b8b0", padding: 3, minWidth: 105, textAlign: "center" }}>Add to Cart</div>
                                </div>
                            </div>

                        </div>
                        <div style={{ height: "3px", backgroundColor: "#d7d7d7", marginTop: 30 }}></div>

                        <div className='row my-2 justify-content-center'>
                            <div className='col-sm-5'>
                                <div className='d-flex p-2 justify-content-around justify-content-md-center'>
                                    <img src='images/icons/test-param.png' style={{
                                        width: 50,
                                        height: 50
                                    }
                                    } alt=""/>
                                    <div className='mx-3'><div style={{ fontWeight: 600, color: "black", lineHeight: 1 }} >Test Parameter</div>
                                        <div style={{ fontWeight: 600, color: "#008896", textAlign: "end", fontSize: 18, lineHeight: 1 }} >24</div>
                                    </div>

                                </div>
                            </div>
                            <div className='col-sm-5'>

                                <div className='d-flex justify-content-around p-2 justify-content-md-center'>
                                    <img src='images/icons/reporting.png' style={{
                                        width: 50,
                                        height: 50
                                    }
                                    } alt=""/>
                                    <div className='mx-3'><div style={{ fontWeight: 600, color: "black", lineHeight: 1 }} >Test Parameter</div>
                                        <div style={{ fontWeight: 600, color: "#008896", textAlign: "end", fontSize: 18, lineHeight: 1 }} >Same Day</div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-md-6 d-none d-md-block' style={{ paddingRight: 0 }}>
                        <img src='images/packages.png' style={{
                            "height": "412px", "width": "100%", "marginTop": "0"
                        }
                        }alt="" />
                    </div>
                </div>


            </div>



            <div className='container' style={{ marginTop: 120, marginBottom: 30 }}>
                <div className='row'>
                    <div className='col-md-6'>

                        <div className='d-flex'>
                            <img src='images/icons/prescription.png' style={{
                                width: 40,
                                height: 50
                            }
                            } alt=""/>
                            <div className='mx-3 my-2'><div style={{ fontWeight: 600, color: "black", lineHeight: 1 }} >Preparation</div>
                                <div style={{ color: "gray", fontSize: 15, lineHeight: 1, marginTop: 10 }} ><em>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis non turpis elit. Mauris tempor purus non sem volutpat tincidunt. Proin ac dapibus enim, placerat consectetur libero. Morbi molestie, leo ut luctus commodo, velit tortor interdum magna, eget ultrices libero neque ac dolor. Sed ultricies, magna et dictum placerat, turpis est pretium augue, at condimentum diam risus nec metus. Aenean ullamcorper neque dolor, a tempus nibh dictum vitae. Fusce vel pulvinar urna. Quisque a tincidunt dui, nec iaculis sapien.</em> </div>
                            </div>

                        </div>

                        <div className='mt-5'>
                            <div style={{ fontWeight: 600, color: "black", fontSize: 18 }} >Parameters</div>
                            <div style={{ height: 3, backgroundColor: "green", width: 90 }}></div>

                        </div>
                        <div className='mt-5'>

                            <MDBAccordion >
                                <MDBAccordionItem collapseId={"collapseOne"} headerTitle='Liver'>
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s .
                                </MDBAccordionItem>
                                <MDBAccordionItem collapseId={"collapseTwo"} headerTitle='Heart'>
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s .
                                </MDBAccordionItem>
                                <MDBAccordionItem collapseId={"collapsThree"} headerTitle='Lungs'>
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s .
                                </MDBAccordionItem>



                            </MDBAccordion>

                        </div>




                    </div>

                    <div className='col-md-6'>
                        <div style={{ padding:20, border: "2px solid #d7d7d7", width: "100%", borderRadius: 15, margin: 10 }}>

                            <h6 style={{color:'gray',textAlign:"center", textDecoration:'underline',lineHeight:2}}>Suggested / Related Packege</h6>

                        <div className='d-flex flex-wrap justify-content-around'>
                        <div className="card-width" style={{
                                        height: '280px',
                                        margin: '15px',
                                        backgroundColor: "white",

                                        borderRadius: '20px',
                                        boxShadow: '3px 4px 11px 0px #613f4a',
                                        position: "relative"

                                    }}>
                                        <div style={{ height: '50px', backgroundColor: "#008896", borderTopLeftRadius: '20px', borderTopRightRadius: "20px" }}>
                                            <h6 className="text-white p-2">Basic Health Package</h6>
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
                                <div className="card-width" style={{
                                        height: '280px',
                                        margin: '15px',
                                        backgroundColor: "white",

                                        borderRadius: '20px',
                                        boxShadow: '3px 4px 11px 0px #613f4a',
                                        position: "relative"

                                    }}>
                                        <div style={{ height: '50px', backgroundColor: "#008896", borderTopLeftRadius: '20px', borderTopRightRadius: "20px" }}>
                                            <h6 className="text-white p-2">Basic Health Package</h6>
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
                                <div className="card-width" style={{
                                        height: '280px',
                                        margin: '15px',
                                        backgroundColor: "white",

                                        borderRadius: '20px',
                                        boxShadow: '3px 4px 11px 0px #613f4a',
                                        position: "relative"

                                    }}>
                                        <div style={{ height: '50px', backgroundColor: "#008896", borderTopLeftRadius: '20px', borderTopRightRadius: "20px" }}>
                                            <h6 className="text-white p-2">Basic Health Package</h6>
                                        </div>

                                        <div className="p-2">
                                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis aperiam laudantium consectetur possimus!</p>
                                        </div>

                                        <div style={{ position: "absolute", width: "100%", bottom: 0, height: "50px" }}>
                                            <div className="d-flex justify-content-between mx-3">
                                                <div className="text-black"><h2>₹100</h2></div>
                                                <div><img src="images/icons/basket-round.png" width={40}alt="" /></div>
                                            </div>

                                        </div>


                               
                                </div>
                                <div className="card-width" style={{
                                        height: '280px',
                                        margin: '15px',
                                        backgroundColor: "white",

                                        borderRadius: '20px',
                                        boxShadow: '3px 4px 11px 0px #613f4a',
                                        position: "relative"

                                    }}>
                                        <div style={{ height: '50px', backgroundColor: "#008896", borderTopLeftRadius: '20px', borderTopRightRadius: "20px" }}>
                                            <h6 className="text-white p-2">Basic Health Package</h6>
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
                            

                    



                        </div>
                    </div>

                </div>

            </div>
        </div>
    )
}

export default Packages