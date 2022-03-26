import React from 'react'

function Download() {
    return (
        <div className='container my-5 ' style={{
            height: 350, marginTop: 5,
            borderRadius: 10,
            width:"90%",
        
            boxShadow: 'rgb(137 123 123 / 77%) 3px 2px 7px 1px'


        }}>
            <div className='row'>

                <div className="col-md-7 d-none d-md-block " style={{
                    backgroundImage: 'url("images/download-bg.png")',
                    height: '350px',
                    backgroundSize: "contain",
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "90% 350px",

                }}></div>
                <div className="col-md-5">
                    <div className='m-4 '>
                        <div className='text-center mt-5'>
                            <h5>Download</h5>
                            <p style={{ color: "#0cba60", fontWeight: "bold" }}>Nirnayan HealthCare App</p>
                        </div>
                        <p style={{
                            wordBreak: 'break-all',
                            lineHeight: 1.5

                        }}>Lorem ipsum dolor sit amet consectetur  suscipit, adipisci quae. Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio asperiores ullam mollitia deleniti illum nostrum accusantium quo quisquam </p>

                    </div>

                    <div className='d-flex justify-content-center'>
                        <div className='mx-3'><img src='images/icons/google-app.png' width={40} alt="google app"/></div>
                        <div className='mx-3'><img src='images/icons/ios-app.png' width={40} alt="ios app"/></div>

                    </div>

                </div>
            </div>




        </div >
    )
}

export default Download