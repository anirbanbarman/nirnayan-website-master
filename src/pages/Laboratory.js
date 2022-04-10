import React from 'react'
import DepartmentCarousal from '../components/DepartmentCarousal/DepartmentCarousal'
import Header from '../components/Header/Header'
import LaboratoryDetails from '../components/LaboratoryDetails/LaboratoryDetails'

function Laboratory() {
  return (
   <>
   <Header round/>
   <DepartmentCarousal/>
   <LaboratoryDetails/>
   </>
  )
}

export default Laboratory