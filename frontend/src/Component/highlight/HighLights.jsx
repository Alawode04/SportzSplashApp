import React, { useState } from 'react'
import '../Highlights.css'
// import NewsCard from '../NewsCard'


const HighLight = () => {

  return (
    <div className="sportVideo" style={{display: "grid", 
    gridTemplateColumns: "1fr 1fr ", 
    gridTemplateRows: "1fr 1fr",
    gap: "70px",
    marginTop: "30px", 
    paddingLeft: "50px", 
    marginBottom: "40px",
    }}>
        
        <iframe width="500" 
        height="315" 
        src="https://www.youtube.com/embed/77PUi13DI3s?si=gUyNsC3AdmYOZsso" 
        title="YouTube video player" 
        frameborder="0"
        allowfullscreen></iframe>

        <iframe width="500" 
        height="315" 
        src="https://www.youtube.com/embed/6WjWo5ZFkfM?si=rQKRhb2aw3IZbYPf" 
        title="YouTube video player" 
        frameborder="0" 
        allowfullscreen></iframe>

        <iframe width="500" 
        height="315" 
        src="https://www.youtube.com/embed/TL0I5jRtneQ?si=dUD30dw8Xtw12Lhb" 
        title="YouTube video player" 
        frameborder="0"  
        allowfullscreen></iframe>

      <iframe width="500" 
      height="315" 
      src="https://www.youtube.com/embed/JU013ovCvmI?si=HA_M5n2qftRKXXNI" 
      title="YouTube video player" 
      frameborder="0" 
      allowFullscreen></iframe>

      <div className='click'>
      
              Click here
             to watch more highlights
        {/* <NewsCard /> */}
      </div> 
    </div>
  )
  }



export default HighLight; 