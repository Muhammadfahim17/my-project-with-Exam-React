import React from 'react'
import './components.css'

const Card4 = ({image,name,image1,des,nameimage1,desimage1}) => {
  return (
    <div>
        <div className="cartclientstar">
            <img src={image} alt="" />
            <h3>{name}</h3>
            <p style={{'color' : '#343D48','lineHeight' : '40px'}}>{des}</p>
            <div className="imageclient">
                <img src={image1} alt="" />
                <div className="textimageclient">
                    <h3 style={{'color' : '#0F2137'}}>{nameimage1}</h3>
                    <p style={{'color' :'#25A0FF','fontWeight'  :'bold'}}>{desimage1}</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Card4