import React from 'react'
import './components.css'

const Card = ({image,name,des}) => {
  return (
    <div>
        <div className="cartvector">
            <img style={{'width' : '110px'}} src={image} alt="" />
            <h2>{name}</h2>
            <p>{des}</p>
        </div>
    </div>
  )
}

export default Card