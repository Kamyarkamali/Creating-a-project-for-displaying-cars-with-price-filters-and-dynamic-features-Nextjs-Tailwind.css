import React from 'react'

function CrdDetailse(props) {
    const {name,price,model,year,distance,location,image}=props;
  return (
    <div>
        <img src={image}/>
    </div>
  )
}

export default CrdDetailse