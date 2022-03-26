import React from 'react'
import './OrganWiseTest.scss'

function OrganWiseTest() {
    return (
        <div className='container my-4'>

            <div className="text-center">
                <h1 >Organ Wise Test</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga </p>
            </div>


            <div className='row justify-content-center organ-height' >
                <div className=' col-lg-1 align-self-center test-icons' >
                    <div className='my-2'>
                        <div style={{ width: 80, height: 80, textAlign: "center", backgroundColor: "white", borderRadius: 50, boxShadow: "4px 4px 7px 0px #bfb5b5" }}>
                            <img className='my-2' src='images/icons/male.png' width={25} height={65} />

                        </div>
                        <div><p className='text-center'>Male</p></div>
                    </div>

                    <div className='my-2'>
                        <div style={{ width: 80, height: 80, textAlign: "center", backgroundColor: "white", borderRadius: 50, boxShadow: "4px 4px 7px 0px #bfb5b5" }}>
                            <img className='my-2' src='images/icons/female.png' width={25} height={65} />

                        </div>
                        <div><p className='text-center'>Female</p></div>
                    </div>

                </div>
                <div className='col-lg-3 d-none d-lg-block'>
                    <div
                        style={{
                            "backgroundColor": "rgb(148, 204, 251)", "width": "300px", "height": "100%", "borderRadius": "15px", textAlign: "center"

                        }}
                    >
                        <img src="images/human.png" alt="human" width={'120px'} height={"auto"} className="my-5" />


                    </div>
                </div>
                <div className=' col-lg-6 align-self-center'>

                    <div
                        className='organ-test'
                        style={{
                           
                            backgroundColor: "white",
                            borderRadius: 15,
                            boxShadow: "rgb(191 181 181) 3px 2px 7px 2px"
                        }}
                    >

                        <div className="container">
                            <div className="row py-3">
                                <div className=' col-8'>
                                    <h3 style={{ color: "#009373", marginBottom: 0 }}>Heart</h3>
                                    <hr className='w-50 m-0 text-black' />
                                    <p style={{ lineHeight: 1.2, fontSize: 14 }}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem explicabo ipsum nisi quisquam earum veritatis expedita beatae voluptatem nulla molestiae!</p>
                                </div>
                                <div className='col-4'>
                                    <img src="images/icons/heart.png" width={60} height={120} alt="heart" />
                                </div>
                                <div className="row my-2">
                                    <div className='col-sm-3 col-6 p-1'>
                                        <button style={{
                                            "backgroundColor": "#3cb878", "color": "white", "padding": "1px 14px", "border": "none", "borderRadius": "20px"

                                        }}>Overview</button>
                                    </div>
                                    <div className='col-sm-3 col-6 p-1'>
                                        <button style={{
                                            "backgroundColor": "#3cb878", "color": "white", "padding": "1px 14px", "border": "none", "borderRadius": "20px"

                                        }}>Syntom</button>
                                    </div>
                                    <div className='col-sm-3 col-6 p-1'> <button style={{
                                        "backgroundColor": "#3cb878", "color": "white", "padding": "1px 14px", "border": "none", "borderRadius": "20px"

                                    }}>Disease</button></div>
                                    <div className='col-sm-3 col-6 p-1'> <button style={{
                                        "backgroundColor": "#3cb878", "color": "white", "padding": "1px 14px", "border": "none", "borderRadius": "20px"

                                    }}>Diagnostic</button></div>
                                </div>
                                <div className='row'>
                                <p style={{ lineHeight: 1.2, fontSize: 14 }}>Lorem ipsum dolor sit, amet consectetur adipisic quisquam earum veritatis expedita beatae voluptatem nulla molestiae!</p>
                                </div>

                                <div className="row mx-2">
                                    <div className="col-4">
                                        <div style={{"height":"140px","boxShadow":"rgb(191 181 181) 3px 2px 7px 2px","borderRadius":"10px"}}></div>
                                    </div>
                                    <div className="col-4">
                                    <div style={{"height":"140px","boxShadow":"rgb(191 181 181) 3px 2px 7px 2px","borderRadius":"10px"}}></div>

                                    </div>
                                    <div className="col-4">
                                    <div style={{"height":"140px","boxShadow":"rgb(191 181 181) 3px 2px 7px 2px","borderRadius":"10px"}}></div>

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

export default OrganWiseTest