import CarsModels from '@/Components/Module/CarsModels';
import { useRouter } from 'next/router'
import React from 'react'
import carsData from '@/data/carsData';

function PriceCars() {
  const router=useRouter();
  const [min,max]=router.query.slug || []
  const filtered=carsData.filter((item)=>item.price>min && item.price <max)
  console.log(filtered);
  if(!filtered.length) return <h1>Result Is NotFound</h1>
  return (
    <div>
      <CarsModels data={filtered}/>
    </div>
  )
}

export default PriceCars