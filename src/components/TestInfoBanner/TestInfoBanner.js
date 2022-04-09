
import React from 'react'
import { MDBAccordion, MDBAccordionItem } from 'mdb-react-ui-kit';
import './TestInfoBanner.scss'
import CardCarousal from '../CardCarousal/CardCarousal';

function TestInfoBanner() {
    return (
        <div>
            <div className='container-fluid' style={{ height: "400px", position: "relative" }}>
                <div className='row'>
                    <div className='col-md-6' style={{
                        marginTop: '80px',
                        paddingLeft: '30px'
                    }}>
                        <div>
                            <div className='d-flex w-75'>
                                <h1 style={{ color: "#005a96" }}>Homocystin</h1>
                                <h1 style={{ marginLeft: 90 }}>₹1000/-</h1>
                            </div>
                            <div className='w-md-75 '>
                                <i>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s .</i>
                            </div>

                            <div className='d-flex justify-content-end align-items-center my-4'>
                                <div className='px-3 m-2' style={{ backgroundColor: "#00b8b0", padding: 3, color: "white", borderRadius: 20 }}>Book Test</div>
                                <div className='px-3 m-2' style={{ backgroundColor: "white", borderRadius: 20, border: "2px solid #00b8b0", padding: 3 }}>Add to Cart</div>
                            </div>
                        </div>
                    </div>
                    <div className='col-md-6 d-none d-md-block' style={{ paddingRight: 0 }}>
                        <img src='images/test-info.png' style={{
                            "height": "412px", "width": "100%", "marginTop": "0"
                        }
                        } alt="" />
                    </div>
                </div>


                <div className=" my-3">
                    <div className='row '>
                        <div className='col-md-4'>
                            <div className='row'>
                                <div className='col-5 m-2'>
                                    <div className='d-flex'>
                                        <img src='images/icons/test-code.png' style={{
                                            width: 50,
                                            height: 50
                                        }
                                        } alt="" />
                                        <div className='mx-3'><div style={{ fontWeight: 600, color: "gray", lineHeight: 1 }} >Test Code</div>
                                            <div style={{ fontWeight: 600, color: "black" }} >A006</div>
                                        </div>

                                    </div>

                                </div>
                                <div className='col-6 m-2'>

                                    <div className='d-flex'>
                                        <img src='images/icons/home-coll.png' style={{
                                            width: 50,
                                            height: 50
                                        }
                                        } alt=""/>
                                        <div className='mx-3'><div style={{ fontWeight: 600, color: "gray", lineHeight: 1 }} >Home Collection</div>
                                            <div style={{ fontWeight: 600, color: "black" }} >Available</div>
                                        </div>

                                    </div>
                                </div>
                            </div>

                        </div>
                        <div className='col-md-4'>
                            <div className='row'>
                                <div className='col-5 m-2'>

                                    <div className='d-flex'>
                                        <img src='images/icons/nabl.png' style={{
                                            width: 50,
                                            height: 50

                                        }
                                        } alt="" />
                                        <div className='mx-3'><div style={{ fontWeight: 600, color: "gray", lineHeight: 1 }} >Accreditation</div>
                                            <div style={{ fontWeight: 600, color: "black" }} >NABL</div>
                                        </div>

                                    </div></div>
                                <div className='col-6 m-2'>

                                    <div className='d-flex'>
                                        <img  alt="" src='images/icons/sample-type.png' style={{
                                            width: 50,
                                            height: 50
                                          
                                        }
                                        } />
                                        <div className='mx-3'><div style={{ fontWeight: 600, color: "gray", lineHeight: 1 }} >Sample Type</div>
                                            <div style={{ fontWeight: 600, color: "black" }} >Serum</div>
                                        </div>

                                    </div></div>
                            </div>

                        </div>


                    </div>

                </div>

                <div className='container mt-5' style={{ height: 3, backgroundColor: "gray" }}></div>


                <div className='row mt-5'>
                    <div className='col-md-6'>
                        <div className='w-md-50 m-2'>
                            <MDBAccordion initialActive={"collapsFour"}>
                                <MDBAccordionItem collapseId={"collapseOne"} headerTitle='Parameters'>
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s .
                                </MDBAccordionItem>
                                <MDBAccordionItem collapseId={"collapseTwo"} headerTitle='Content Type'>
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s .
                                </MDBAccordionItem>
                                <MDBAccordionItem collapseId={"collapsThree"} headerTitle='Sample type'>
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s .
                                </MDBAccordionItem>
                                <MDBAccordionItem collapseId={"collapsFour"} headerTitle='Test Code'>
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s .
                                </MDBAccordionItem>


                            </MDBAccordion>
                        </div>
                    </div>
                    <div className='col-md-6'>  <img src='images/report.png' style={{
                        width: '95%', filter: "blur(2px)",

                    }
                    } alt="" /></div>
                </div>


                <div className='mt-5 container'>
                    <h4>Related test</h4>
                    <div style={{ height: 3, backgroundColor: "green", width: 130 }}></div>
                    <CardCarousal link="test-info" />
                </div>



            </div>


        </div>
    )
}

export default TestInfoBanner