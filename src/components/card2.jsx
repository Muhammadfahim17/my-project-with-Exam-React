import React from 'react'
import './components.css'

const Card2 = ({image,name,des}) => {
  return (
    <div>
        <div className="cartapp">
            <img src={image} alt="" />
            <div className="textcartapp">
                <h2 style={{'color' : '#0F2137','fontWeight' : 'bold'}}>{name}</h2>
                <p style={{'color' : '#343D48','lineHeight' : '25px'}}>{des}</p>
            </div>
        </div>
    </div>
  )
}

export default Card2