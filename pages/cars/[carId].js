import React from 'react'
import { useRouter } from 'next/router'
import carsData from '@/data/carsData';

function CarId() {
    const router=useRouter();
    const {carId}=router.query;
    const carDetailse=carsData[carId-1]
    console.log(carDetailse)
  return (
    <div>CarId</div>
  )
}

export default CarId