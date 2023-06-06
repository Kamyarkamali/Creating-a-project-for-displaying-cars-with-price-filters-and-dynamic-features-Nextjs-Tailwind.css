import React from 'react'
import carsData from '@/data/carsData'
import CarsModels from '@/Components/Module/CarsModels'

function Sedan() {
  const filtered=carsData.filter(car=>car.category==="sedan")

  return (
    <div>
      <CarsModels data={filtered}/>
    </div>
  )
}

export default Sedan