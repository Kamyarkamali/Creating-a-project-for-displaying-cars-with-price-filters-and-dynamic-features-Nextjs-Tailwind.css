import React from 'react'
import Car from '../Module/Car'

function CarsPages({data}) {
  return (
    <div className='max-w-[1200px] m-auto flex justify-around flex-wrap'>
        {data.map(car=>(
            <Car key={car.id} {...car}/>
        ))}
    </div>
  )
}

export default CarsPages