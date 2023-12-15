
import '../News.css'
import Badge from 'react-bootstrap/Badge'
import { useState } from 'react'

const News = () => {

  const [ourNews, setOurNews] = useState(
    {
      newsMainHeadline: "Michael Emenalo: Saudi Pro League won't make first move for Mohamed Salah in January",
      image: "https://cdn.britannica.com/91/200591-050-95794068/Mohamed-Salah-Egyptian-skills-English-Premier-League-2018.jpg",
      newsSubHeadline: "Director of Football of the Saudi Pro League Michael Emenalo believes that it would be hard to convince Mohamed Salah to join the league in January."
    }

  )
  return (
    <>
    <div className='text'style={{textAlign: "center"}}>
      <h2><Badge bg="danger">OUR NEWS</Badge></h2>
    </div> 

    <h2 style={{paddingLeft: "40px", marginTop:"20px"}}>{ourNews.newsMainHeadline}</h2>
    <img src={ourNews.image} alt="" style={{width: "90%", height: "600px", paddingLeft: "70px"}}/>
    <h5 style={{paddingLeft: "40px", marginTop:"20px"}}>{ourNews.newsSubHeadline}</h5>


    <hr />
    <div>
      <h3>Read Next</h3>
    </div>
    </>
  )
}

export default News