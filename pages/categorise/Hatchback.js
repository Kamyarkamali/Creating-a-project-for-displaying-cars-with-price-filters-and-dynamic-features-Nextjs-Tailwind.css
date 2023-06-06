import React from 'react'
import carsData from '@/data/carsData'
import CarsModels from '@/Components/Module/CarsModels'

function Hatchback() {
  const filtered=carsData.filter(car=>car.category==="hatchback")
  return (
    <div>
      <CarsModels data={filtered}/>
    </div>
  )
}

export default Hatchback