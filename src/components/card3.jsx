import React from 'react'
import './components.css'

const Card3 = ({image,name,des}) => {
  return (
    <div>
        <div className="boxcart">
            <img src={image} alt="" />
            <h2 style={{'lineHeight' : '30px'}}>{name}</h2>
            <p style={{'color' : 'gray','fontWeight' : "bold",'lineHeight' : '30px'}}>{des}</p>
        </div>
    </div>
  )
}

export default Card3