import { useRouter } from 'next/router';
import React, { useState } from 'react'

function SearchBar() {
    const [minPrice,setMinPrice]=useState("");
    const [maxPrice,setMaxPrice]=useState("");
    const router=useRouter();

    const clickHnadeler=()=>{
        if(maxPrice && minPrice){
            router.push(`/filter/${minPrice}/${maxPrice}`)
        }else{
            alert("Inter min price and max price")
        }
    }

  return (
    <div className='max-w-[300px] mx-auto flex flex-col py-4 items-center'>
        <div className='mt-3'>
        <input value={minPrice} onChange={(e)=>setMinPrice(e.target.value)} className='outline-none border-none bg-gray-400 mt-4 placeholder:text-white rounded-lg p-[4px]'  placeholder='min-price'/>
        <input value={maxPrice} onChange={(e)=>setMaxPrice(e.target.value)} className='outline-none border-none bg-gray-400 mt-4 placeholder:text-white rounded-lg p-[4px]'  placeholder='max-price'/>
        <button onClick={clickHnadeler} className='px-5 bg-blue-700 ml-4 text-white font-bold p-[5px] rounded-lg'>Search</button>
        </div>
    </div>
  )
}

export default SearchBar