import React from 'react'
import './Footer.scss'

function Footer() {
    return (
        <div>

            <div className='footer-wrapper' style={{
                backgroundImage: "url('images/_footer.png')",
                width: "100%",
                "height": "500px",
                "backgroundSize": "100% 500px",
                position: "relative"
            }}>
                <div style={{ "position": "absolute", "bottom": "0", width: "100%" }}>

                    <div style={{width:"99%"}}>

                        <div className="row px-4">
                            <div className="col-md-6 d-none d-md-block p-3">
                                <div>
                                    <h2 style={{ color: "#f3ff33" }}>Links</h2>
                                    <div className='w-75 text-white'  >
                                        <p  >Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa, tenetur.</p>
                                        <p>Lorem ipsum dolor, sit amet pisicing elit. Ipsa, tenetur.</p>
                                        <p>Lorem ipsum dolor, t. Ipsa, tenetur.</p>

                                    </div>

                                </div>

                            </div>
                            <div className="col-md-6 p-4">
                                <div>
                                    <div className='d-flex justify-content-around align-items-baseline'>
                                        <div><h2 style={{ color: "#f3ff33" }}>Follow us</h2></div>
                                        <div>
                                            <ul style={{
                                                "listStyle": "none", "display": "flex", "justifyContent": "space-evenly"

                                            }}>
                                                <li className='px-2'><img src="images/icons/facebook-icon.png" alt="facebook icon" width={30} /></li>
                                                <li className='px-2'><img src="images/icons/instagram-icon.png" alt="instagram icon" width={30} /></li>
                                                <li className='px-2'><img src="images/icons/linkedin-icon.png" alt="linkedin icon" width={30} /></li>
                                                <li className='px-2'><img src="images/icons/twitter-icon.png" alt="twitter icon" width={30} /></li>

                                            </ul>
                                        </div>
                                    </div>

                                    <div className='w-100 px-sm-5 text-white'>
                                        <p className='f-s'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptate, itaque! Fugiat, soluta, et itaque sint quia esse nulla obcaecati quod cum expedita vero modi explicabo optio. Cupiditate mollitia iure, inventore libero maiores possimus repudiandae iusto quaerat provident ea, ut nemo.</p>
                                    </div>


                                </div>

                            </div>
                        </div>
                    </div>
                </div>



            </div>
            <div style={{ height: 3 }}></div>
            <div style={{ backgroundColor: "#06a855", height: 80 }}></div>
        </div>
    )
}

export default Footer