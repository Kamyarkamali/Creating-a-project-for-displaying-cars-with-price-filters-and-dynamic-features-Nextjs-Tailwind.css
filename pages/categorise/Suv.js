import React from 'react'
import carsData from '@/data/carsData'
import CarsModels from '@/Components/Module/CarsModels'
function Suv() {
  const filtered=carsData.filter(car=>car.category==="suv")
  
  return (
    <div>
      <CarsModels data={filtered}/>
    </div>
  )
}

export default Suv