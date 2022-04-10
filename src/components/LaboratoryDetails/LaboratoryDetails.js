import React from 'react'
import './LaboratoryDetails.scss';
import CardCarousal from './../CardCarousal/CardCarousal';
import EquipmentCarousal from './../EquipmentsCarousal/EquipmentCarousal';
import TeamCarousal from '../TeamCarousal/TeamCarousal';




function LaboratoryDetails() {
    return (
        <div className='container-fluid'>
            <div className='row dept'>
                <div className='col-md-6'>
                    <div className='dept-right'>
                        <h1 style={{ color: "#005a96" }}>Biochemistry</h1>
                        <div className='my-3 '>
                            <i>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s .</i>

                        </div>

                    </div>



                </div>
                <div className='col-md-6 d-none d-md-block' style={{ paddingRight: 0 }}>
                    <img src='images/packages.png' style={{
                        "height": "400px", "width": "100%", "marginTop": "0"
                    }
                    } alt="" />
                </div>

            </div>

            <div className='title-header text-center my-3'>
                <h3>Equipments</h3>

            </div>
            <EquipmentCarousal/>

            <div className='title-header text-center my-3'>
                <h3> Our Team of Doctors</h3>

            </div>
       <TeamCarousal/>


           


            <div className='title-header text-center my-3'>
                <h3>Specialised Tests</h3>

            </div>
            <CardCarousal/>







        </div>
    )
}

export default LaboratoryDetails