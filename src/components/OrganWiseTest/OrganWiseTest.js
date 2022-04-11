import React,{useState} from 'react'
import './OrganWiseTest.scss'
import MaleBody from './../MaleBody/MaleBody';
import FemaleBody from './../FemaleBody/FemaleBody';

function OrganWiseTest() {

    const [IsMale,setMale]=useState(true);
    return (
        <div className='container my-4'>

            <div className="text-center">
                <h1 >Organ Wise Test</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga </p>
            </div>


            <div className='row justify-content-center organ-height my-2' >

                <div className='col-lg-5 d-lg-block'>
                    <div className='human-body'>
                        <div className={IsMale?"male ":" disabled male "} onClick={()=>setMale(true)}>
                            <img className='my-2' alt="" src='images/icons/male-new.png' width={25} height={65} />

                        </div>
{IsMale?   <MaleBody />: <div style={{marginLeft:110}}><FemaleBody/></div>}
                     
                        <div className={IsMale?"female disabled":" female "} onClick={()=>setMale(false)}>
                            <img className='my-2' alt="" src='images/icons/female-new.png' width={25} height={65} />

                        </div>

                    </div>


                </div>
                <div className=' col-lg-6 align-self-center overlap' >

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
                                <div className=' col-sm-8'>
                                    <h2 style={{ color: "#00a19f", marginBottom: 0, fontWeight: 'bold' }}>Lung</h2>

                                    <div style={{ width: 55, backgroundColor: "#fdb515", height: 4, marginTop: 6 }}></div>
                                    <div className='my-3'>
                                        <h2>Headline</h2>
                                        <article style={{ lineHeight: 1.2 }}>
                                            Lorem Ipsum Lorem   Lorem Ipsum Lorem Ipsum Lorem Ipsum  Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lo   Lorem Ipsum Lorem Ipsum Lorem Ipsum  Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lovvv  Lorem Ipsum Lorem Ipsum Lorem Ipsum  Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lo  Lorem Ipsum Lorem Ipsum Lorem Ipsum  Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lov

                                        </article>

                                    </div>

                                </div>

                                <div className='col-sm-4'>

                                    <div className='organ-part'>
                                        <div className='circle' >
                                            <div className='center'>
                                                <img className='my-2' alt="" src='male/lungs.png' width={100} height={120} />

                                            </div>

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

export default OrganWiseTest