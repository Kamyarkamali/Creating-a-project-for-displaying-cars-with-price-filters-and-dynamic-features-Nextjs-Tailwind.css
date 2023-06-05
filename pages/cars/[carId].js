import React from 'react'
import { useRouter } from 'next/router'
import carsData from '@/data/carsData';
import CarsDetailse from '@/Components/template/CarsDetailse';

function CarId() {
    const router=useRouter();
    const {carId}=router.query;
    const carDetailse=carsData[carId-1]
  return (
    <div>
        <CarsDetailse {...carDetailse}/>
    </div>
  )
}

export default CarId