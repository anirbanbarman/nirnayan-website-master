import React from 'react';
import './OrganWisePage.scss';
import CardCarousal from './../CardCarousal/CardCarousal';
import BlogCarousal from './../BlogCarousal/BlogCarousal';

function OrganWisePage() {
    return (
        <div className='container-fluid organ-bg-page'>
            <div className='container'>
                <div className=' py-5 d-flex justify-content-between align-items-center'>
                    <h1 className='title'>Heart Diseases, Symtoms, Diagnosis
                    <img src='images/vector.png' className='d-none d-sm-inline ray' alt='' />
                    
                    </h1>

                    <div className='position-relative'>
                        <img src='images/round.png' className='d-none d-sm-inline' alt='' style={{ maxWidth: 300, width: '100%' }} />
                        <img src='images/heart.png'   className='organ d-none d-sm-inline' alt='' style={{ maxWidth: 100 }} />

                    </div>


                </div>

                <div className='my-5'>
                    <div className='row m-3'>
                        <div className='col-md-6'>
                            <div className='organ-card  p-4 m-sm-2 m-1'>
                                <h3 style={{ fontWeigth: 'bold' }}>Overview</h3>
                                <div style={{ width: 55, backgroundColor: "#fdb515", height: 4, marginTop: 6 }}></div>
                                <article className='article'>
                                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Optio ad fugiat magni eveniet, ut soluta quos molestiae velit incidunt veritatis laudantium perspiciatis, voluptates numquam unde exercitationem nesciunt saepe officiis. Quam.

                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, vitae sint. Corporis doloremque dolorum provident, hic modi quas explicabo nihil ipsum dolor pariatur, culpa natus? Optio quisquam officiis incidunt! Perferendis.
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, vitae sint. Corporis doloremque dolorum provident, hic modi quas explicabo nihil ipsum dolor pariatur, culpa natus? Optio quisquam officiis incidunt! Perferendis.
                                </article>
                            </div>

                        </div>
                        <div className='col-md-6'>
                            <div className='organ-card p-4  m-sm-2 m-1'>
                                <h3 style={{ fontWeigth: 'bold' }}>Symtoms</h3>
                                <div style={{ width: 55, backgroundColor: "#fdb515", height: 4, marginTop: 6 }}></div>
                                <article className='article'>
                                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Optio ad fugiat magni eveniet, ut soluta quos molestiae velit incidunt veritatis laudantium perspiciatis, voluptates numquam unde exercitationem nesciunt saepe officiis. Quam.

                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, vitae sint. Corporis doloremque dolorum provident, hic modi quas explicabo nihil ipsum dolor pariatur, culpa natus? Optio quisquam officiis incidunt! Perferendis.
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, vitae sint. Corporis doloremque dolorum provident, hic modi quas explicabo nihil ipsum dolor pariatur, culpa natus? Optio quisquam officiis incidunt! Perferendis.
                                </article>
                            </div>
                        </div>

                    </div>
                    <div className='row m-3'>
                        <div className='col-md-6'>
                            <div className='organ-card  p-4 m-sm-2 m-1'>
                                <h3 style={{ fontWeigth: 'bold' }}>Diagnosis</h3>
                                <div style={{ width: 55, backgroundColor: "#fdb515", height: 4, marginTop: 6 }}></div>
                                <article className='article'>
                                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Optio ad fugiat magni eveniet, ut soluta quos molestiae velit incidunt veritatis laudantium perspiciatis, voluptates numquam unde exercitationem nesciunt saepe officiis. Quam.

                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, vitae sint. Corporis doloremque dolorum provident, hic modi quas explicabo nihil ipsum dolor pariatur, culpa natus? Optio quisquam officiis incidunt! Perferendis.
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, vitae sint. Corporis doloremque dolorum provident, hic modi quas explicabo nihil ipsum dolor pariatur, culpa natus? Optio quisquam officiis incidunt! Perferendis.
                                </article>
                            </div>

                        </div>
                        <div className='col-md-6'>
                            <div className='organ-card p-4  m-sm-2 m-1'>
                                <h3 style={{ fontWeigth: 'bold' }}>Overview</h3>
                                <div style={{ width: 55, backgroundColor: "#fdb515", height: 4, marginTop: 6 }}></div>
                                <article className='article'>
                                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Optio ad fugiat magni eveniet, ut soluta quos molestiae velit incidunt veritatis laudantium perspiciatis, voluptates numquam unde exercitationem nesciunt saepe officiis. Quam.

                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, vitae sint. Corporis doloremque dolorum provident, hic modi quas explicabo nihil ipsum dolor pariatur, culpa natus? Optio quisquam officiis incidunt! Perferendis.
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, vitae sint. Corporis doloremque dolorum provident, hic modi quas explicabo nihil ipsum dolor pariatur, culpa natus? Optio quisquam officiis incidunt! Perferendis.
                                </article>
                            </div>
                        </div>

                    </div>

                </div>

                <div className='my-5'>
                    <h3>Related Test</h3>
                    <div style={{ height: 3, backgroundColor: "#fdb515", width: 130 }}></div>
                    <CardCarousal link="test-info" />

                </div>

                
                <div className='my-5'>
                    <h3>Related Articles</h3>
                    <div style={{ height: 3, backgroundColor: "#fdb515", width: 160 }}></div>
                    <BlogCarousal hide={true} />

                </div>
            </div>
        </div>
    )
}

export default OrganWisePage