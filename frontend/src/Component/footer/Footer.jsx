import React, { useState } from 'react'

const Footer = () => {

    const [logo, setLogo] = useState(
        {
            image: "frontend/public/Larana__Inc.-removebg-preview.png"
        }
    )
  return (
    <div>
        <img src={logo.image} alt="" />
    </div>
  )
}

export default Footer