import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/esm/Button';
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

  const [readMore, setReadMore] = useState(
    {
      image: "https://assets.goal.com/v3/assets/bltcc7a7ffd2fbf71f5/blt72ef736d8745486a/6574db9c7c4467040aa7ecd7/Kylian_Mbappe.jpg?auto=webp&format=pjpg&width=3840&quality=60",
      headline: "Arsenal news: Kylian Mbappe backed as Gunners find out potential Champions League opponents"
    }
  )

  const [moreStories, setMoreStories] = useState(
    {
      image: "https://i2-prod.liverpoolecho.co.uk/incoming/article28269648.ece/ALTERNATES/s615/0_GettyImages-1837323377.jpg",
      headline: "Erling Haaland injury latest as Man City face wait ahead of Crystal Palace"
    }
  )

  const [moreStories2, setMoreStories2] = useState(
    {
      image: "https://media.cnn.com/api/v1/images/stellar/prod/230621042149-01-cristiano-ronaldo-euro-200-apps-062023-restricted.jpg?c=original",
      headline: "Cristiano Ronaldo scores winner in record 200th game for Portugal"
    }
  )
  const [moreStories3, setMoreStories3] = useState(
    {
      image: "https://e0.365dm.com/23/12/2048x1152/skysports-premier-league-burnley_6388558.jpg?20231210113737",
      headline: "Friday marked precisely 18 months since Vincent Kompany was appointed Burnley boss. It has been quite the year-and-a-half for the Belgian at Turf Moor."
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
    <div style={{marginLeft: "10px", marginTop: "10px"}}>
      <h3>Read Next</h3>
    </div>
       
       <div className="sport" style={{display: "grid", 
    gridTemplateColumns: "1fr 1fr", 
    gridTemplateRows: "1fr 1fr 1fr", 
    gap: "70px",
    marginTop: "30px", 
    paddingLeft: "50px", 
    marginBottom: "40px", 
    textDecoration: "none"
     }}>

     <Card style={{ width: '30rem'}}>
        <Card.Img variant="top" src={readMore.image} />
        <Card.Body>
          <Card.Title>Headline</Card.Title>
          <Card.Text>
            {readMore.headline}
          </Card.Text>
          <Button variant="Primary">Read Now</Button>
        </Card.Body>
      </Card>

      <Card style={{ width: '30rem' }}>
        <Card.Img variant="top" src={moreStories.image} />
        <Card.Body>
          <Card.Title>Headline</Card.Title>
          <Card.Text>
            {moreStories.headline}
          </Card.Text>
          <Button variant="">Read Now</Button>
        </Card.Body>
      </Card>

      <Card style={{ width: '30rem' }}>
        <Card.Img variant="top" src={moreStories2.image} />
        <Card.Body>
          <Card.Title>Headline</Card.Title>
          <Card.Text>
            {moreStories2.headline}
          </Card.Text>
          <Button variant="">Read Now</Button>
        </Card.Body>
      </Card>
      <Card style={{ width: '30rem' }}>
        <Card.Img variant="top" src={moreStories3.image} />
        <Card.Body>
          <Card.Title>Headline</Card.Title>
          <Card.Text>
            {moreStories3.headline}
          </Card.Text>
          <Button variant="">Read Now</Button>
        </Card.Body>
      </Card>

      </div>
    </>
  )
}

export default News