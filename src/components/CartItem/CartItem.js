import { MDBBreadcrumb, MDBBreadcrumbItem, MDBIcon } from 'mdb-react-ui-kit'
import React from 'react'
import './CartItem.scss'
import { Link } from 'react-router-dom';

function CartItem() {
    return (
        <div className='m-2 m-sm-5 p-sm-2'>
            <div className='d-flex align-items-baseline'>
                <MDBIcon fas icon="arrow-left" size='1x' />
                <MDBBreadcrumb style={{ marginLeft: 10 }}>
                    <MDBBreadcrumbItem>
                        <Link to='/'>Home</Link>
                    </MDBBreadcrumbItem>
                    <MDBBreadcrumbItem active>Cart</MDBBreadcrumbItem>
                </MDBBreadcrumb>
            </div>

            <div className='row my-4'>
                <div className='col-md-9'>
                    <div>
                        <span><span style={{ fontWeight: "bold" }}>Test Seleted</span> <MDBIcon fas icon="angle-double-down" style={{ color: '#009e9d', marginLeft: 5 }} /></span>

                        <div className='cart-item my-4'>
                            <div className='row  cart-harder'>
                                <div className='col-4 text-uppercase'>Package/Test name</div>
                                <div className='col-2 text-uppercase'>Price</div>
                                <div className='col-2 text-uppercase'>discount</div>
                                <div className='col-2 text-uppercase'>net price</div>
                                <div className='col-2 text-uppercase'>action</div>

                            </div>

                            <div className='cart-item-list my-4'>

                                <div className='row  cart-list my-2'>
                                    <div className='col-4 text-uppercase font-weight-bold'>Complete Blodd Count (CBC)</div>
                                    <div className='col-2 text-uppercase font-weight-bold d-flex'>₹ <span style={{ color: '#0f7fa3', marginLeft: 5 }}>250.00</span></div>
                                    <div className='col-2 text-uppercase font-weight-bold px-md-5'>-</div>
                                    <div className='col-2 text-uppercase font-weight-bold d-flex'>₹ <span style={{ marginLeft: 5 }}>250.00</span></div>

                                    <div className='col-2 text-uppercase px-md-4'>  <img src='images/icons/delete.png' style={{ width: 15 }} alt='delete-icon' /></div>

                                </div>
                                <div className='row  cart-list my-2'>
                                    <div className='col-4 text-uppercase font-weight-bold'>Complete Blodd Count (CBC)</div>
                                    <div className='col-2 text-uppercase font-weight-bold d-flex'>₹ <span style={{ color: '#0f7fa3', marginLeft: 5 }}>250.00</span></div>
                                    <div className='col-2 text-uppercase font-weight-bold px-md-5'>-</div>
                                    <div className='col-2 text-uppercase font-weight-bold d-flex'>₹ <span style={{ marginLeft: 5 }}>250.00</span></div>

                                    <div className='col-2 text-uppercase px-md-4'>  <img src='images/icons/delete.png' style={{ width: 15 }} alt='delete-icon' /></div>

                                </div>

                                <div className='row  cart-list my-2'>
                                    <div className='col-4 text-uppercase font-weight-bold'>Complete Blodd Count (CBC)</div>
                                    <div className='col-2 text-uppercase font-weight-bold d-flex'>₹ <span style={{ color: '#0f7fa3', marginLeft: 5 }}>250.00</span></div>
                                    <div className='col-2 text-uppercase font-weight-bold px-md-5'>-</div>
                                    <div className='col-2 text-uppercase font-weight-bold d-flex'>₹ <span style={{ marginLeft: 5 }}>250.00</span></div>

                                    <div className='col-2 text-uppercase px-md-4'>  <img src='images/icons/delete.png' style={{ width: 15 }} alt='delete-icon' /></div>

                                </div>

                                <div className='row  cart-list my-2'>
                                    <div className='col-4 text-uppercase font-weight-bold'>Complete Blodd Count (CBC)</div>
                                    <div className='col-2 text-uppercase font-weight-bold d-flex'>₹ <span style={{ color: '#0f7fa3', marginLeft: 5 }}>250.00</span></div>
                                    <div className='col-2 text-uppercase font-weight-bold px-md-5'>-</div>
                                    <div className='col-2 text-uppercase font-weight-bold d-flex'>₹ <span style={{ marginLeft: 5 }}>250.00</span></div>

                                    <div className='col-2 text-uppercase px-md-4'>  <img src='images/icons/delete.png' style={{ width: 15 }} alt='delete-icon' /></div>

                                </div>





                            </div>
                            <div className='row   my-2'>
                                <div className='col-4 text-uppercase font-weight-bold'>Total</div>
                                <div className='col-2 text-uppercase font-weight-bold'></div>
                                <div className='col-2 text-uppercase font-weight-bold px-5'></div>
                                <div className='col-2 text-uppercase font-weight-bold d-flex'>₹ <span style={{ marginLeft: 5 }}>1000.00</span></div>
                                <div className='col-2 text-uppercase '>  </div>

                            </div>

                            <div className='my-3 text-end'>
                                <button className='add_button_test'><MDBIcon fas icon="plus" /> ADD TEST</button>
                            </div>


                        </div>
                    </div>



                </div>






                <div className='col-md-3'>
                    <span><span style={{ fontWeight: "bold" }}>
                        Payment Summery</span> <MDBIcon fas icon="angle-double-down" style={{ color: '#009e9d', marginLeft: 5 }} /></span>
                        <div className='px-lg-3 my-4'>
                            <div className='checkout '>
                               <div className='p-sm-3 p-2'>
                                   <h6 style={{ color: '#009e9d'}}>PAYMENT</h6>
                                   <div className='my-5 cart-font'>
                                       <div className='row font-weight-bold'>
                                           <div className='col-6'>Sub Total</div>
                                           <div className='col-6 d-flex justify-content-end'>₹ <span style={{ marginLeft: 5 }}>1000.00</span></div>
                                       </div>
                                       <div className='row font-weight-bold my-4' style={{color:"#b3b1b1"}}>
                                           <div className='col-6'>Sub Discount</div>
                                           <div className='col-6 d-flex justify-content-end'>₹ <span style={{ marginLeft: 5 }}>0.00</span></div>
                                       </div>
                                       <div className='my-1' style={{backgroundColor:"#b3b1b1",height:'2px',width:'100%'}}></div>
                                       <div className='row font-weight-bold'>
                                           <div className='col-6'> Total</div>
                                           <div className='col-6 d-flex justify-content-end'>₹ <span style={{ marginLeft: 5 }}>1000.00</span></div>
                                       </div>
                                   </div>

                                   <button className='cart-pay mt-5'>Procced to pay</button>

                               </div>
                              


                            </div>

                        </div>


                </div>
            </div>


        </div>
    )
}

export default CartItem