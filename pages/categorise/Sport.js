import React from 'react'
import carsData from '@/data/carsData'
import CarsModels from '@/Components/Module/CarsModels'

function Sport() {
  const filtered=carsData.filter(car=>car.category==="sport")
  return (
    <div>
      <CarsModels data={filtered}/>
    </div>
  )
}

export default Sport