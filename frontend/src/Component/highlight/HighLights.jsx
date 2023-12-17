import React from 'react'
import HighLights from './HighLights';


const HighLight = () => {
  return (
    <div className="sportVideo" style={{display: "grid", 
    gridTemplateColumns: "1fr ", 
    gridTemplateRows: "1fr 1fr",
    gap: "70px",
    marginTop: "30px", 
    paddingLeft: "50px", 
    marginBottom: "40px",
    }}>
        
        <iframe width="560" 
        height="315" 
        src="https://www.youtube.com/embed/77PUi13DI3s?si=gUyNsC3AdmYOZsso" 
        title="YouTube video player" 
        frameborder="0"
        allowfullscreen></iframe>

        <iframe width="560" 
        height="315" 
        src="https://www.youtube.com/embed/6WjWo5ZFkfM?si=rQKRhb2aw3IZbYPf" 
        title="YouTube video player" 
        frameborder="0" 
        allowfullscreen></iframe>

        <iframe width="560" 
        height="315" 
        src="https://www.youtube.com/embed/TL0I5jRtneQ?si=dUD30dw8Xtw12Lhb" 
        title="YouTube video player" 
        frameborder="0"  
        allowfullscreen></iframe>


        <h5><button style={{backgroundColor: "rgb(108, 238, 108)", 
        color: "white", 
        border: "3px solid white", 
        borderRadius: "8px", 
        fontSize: "15px"}}>
          Click here</button> 
          to watch more highlights</h5>
    </div>
  )
}


export default HighLight