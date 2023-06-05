import React from 'react'

function CarsPages({data}) {
  return (
    <div className='max-w-[1200px] m-auto flex justify-around flex-wrap'>
        {data.map(car=> <p>{car.name}</p>)}
    </div>
  )
}

export default CarsPages