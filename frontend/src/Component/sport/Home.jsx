import { useEffect, useState } from "react"
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import '../Home.css'

const Home = () => {
  
  const [handleSport, setHandleSport] = useState(null)



  const [sportPic, setSportPic] = useState(
    {
    image: "https://media.gettyimages.com/id/497811221/photo/shooting-power.jpg?s=612x612&w=gi&k=20&c=7ln9T2DqT0KGOw48HHR03bxk0FukzINfxIZT-JWzPAY=",
    headline: "Bournemouth: Andoni Iraola's methods are finally working in Premier League but signs were there all along"
  },
  )

  const [sportPics, setSportPics] = useState(
    {
      image: "https://www.shutterstock.com/image-photo/kyiv-ukraine-october-10-2020-260nw-1925144384.jpg",
      headline: "Champions League: Arsenal in need of win against Sevilla in Group B"
    }
  )
 
  const [sportPicture, setSportPicture] = useState(
    {
      image: "https://www.brila.net/wp-content/uploads/2020/09/gettyimages-1228620197-612x612-1.jpg",
      headline: "Liverpool and Man Utd goal involvements: Mohamed Salah 18-0 Rasmus Hojlund"
    }
  )
  const [sportNews, setSportNews] = useState(
    {
      image: "https://i.insider.com/634d7269410f4300181489cb?width=700",
      headline: "Golden Boy Award: the 20 Best U21 Players in World Soccer 2022"
    }
  )

  const [soccer, setSoccer ] = useState(
    {
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlT6yXxAF8pFKkZSNKSeI2Kgt8okf63DGSZw&usqp=CAU",
      headline: "The Fastest Soccer Players In The World (2023) | Jobs In Football"
    }
  )

  const [soccers, setSoccers ] = useState(
    {
      image: "https://cdn.zeebiz.com/sites/default/files/2023/09/19/261288-untitled-design-37.jpg",
      headline: "Mbappé Sits Atop World's Highest-Paid Soccer Players List"
    }
  )

  const [mySportPic, setMySportPic ] = useState(
    {
      image: "https://a57.foxnews.com/static.foxnews.com/foxnews.com/content/uploads/2023/11/1200/675/raphael-dwamena-2.jpg?ve=1&tl=1",
      headline: "Professional soccer player, 28, dies after collapsing on field"
    }
  )

  const [sportz, setSportz] = useState(
    {
      image: "https://www.rescue.org/sites/default/files/styles/portrait_3x4_928px_wide/public/2022-11/Camavinga.png?itok=0Ru6Qdqw",
      headline: "Five famous football players who fled war | International Rescue Committee (IRC)"
    }
  )

  const [skyNews, setSkyNews] = useState(
    {
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGLi-0FX08sv5AgSh1bS1cwEbfwsXmiwc8Mg&usqp=CAU",
      headline: "Cristiano Ronaldo: Soccer star tops Forbes' highest-paid athlete list for 2023"
    }
  )

  const [ourNews, setOurNews] = useState(
    {
      image: "https://a.espncdn.com/photo/2022/1007/r1072269_1296x729_16-9.jpg",
      headline: "Kylian Mbappe beats Lionel Messi, Cristiano Ronaldo to top Forbes rich list -"
    }
  )

  const [sporty, setSporty] = useState(
    {
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSaXLKYM3D5W02_RuWgi03ylTzGF2U6kBNpg&usqp=CAU",
      headline: "Saka voted England's player of the year again | Reuters"
    }
  )

  const [sportee, setSportee] = useState(
    {
      image: "https://www.aljazeera.com/wp-content/uploads/2023/08/2023-08-02T083211Z_689844896_UP1EJ820NPL3Y_RTRMADP_3_SOCCER-WORLDCUP-ZAF-ITA-REPORT-1690965186.jpg?resize=1800%2C1682",
      headline: "Women’s World Cup 2023: Fixtures and match schedule for Round of 16"
    }
  )
  

  const handleSportz = (headline) => {
    console.log("Clicked headline:", headline);

  };

  const renderSportCards = (sportsData) => {
    return sportsData.map((sport, index) => (
      <Card key={index} style={{ width: '15rem' }}>
        <Card.Img variant="top" src={sport.image} />
        <Card.Body>
          <Card.Title>Headline</Card.Title>
          <Card.Text>{sport.headline}</Card.Text>
          <Button variant="success" onClick={() => handleSportz(sport.headline)}>Read More..</Button>
        </Card.Body>
      </Card>
    ));
  };
  

  return (
    <>
    <div className="sport" style={{display: "grid", 
    gridTemplateColumns: "1fr 1fr 1fr 1fr", 
    gridTemplateRows: "1fr 1fr 1fr", 
    gap: "20px", 
    height: "2rem",
    margin: "20px 20px 20px",
    marginBottom: "30px",
    textDecoration: "none"}}> 
    
     
     {renderSportCards([sportPic, sportPics, sportPicture, sportNews, soccer, soccers, mySportPic, sportz, skyNews, ourNews, sporty, sportee])}
    


          <Card style={{ width: '15rem', }}>
        <Card.Img variant="top" src={sportPic.image} />
        <Card.Body>
          <Card.Title>Headline</Card.Title>
          <Card.Text>
            {sportPic.headline}
          </Card.Text>
          <Button variant="success" onClick={handleSportz}>Read More..</Button>
        </Card.Body>
      </Card>

      <Card style={{ width: '15rem' }}>
        <Card.Img variant="top" src={sportPics.image} />
        <Card.Body>
          <Card.Title>Headline</Card.Title>
          <Card.Text>
            {sportPics.headline}
          </Card.Text>
          <Button variant="success">Read More..</Button>
        </Card.Body>
      </Card>

      <Card style={{ width: '15rem' }}>
        <Card.Img variant="top" src={sportPicture.image} />
        <Card.Body>
          <Card.Title>Headline</Card.Title>
          <Card.Text>
            {sportPicture.headline}
          </Card.Text>
          <Button variant="success">Read More..</Button>
        </Card.Body>
      </Card>

      <Card style={{ width: '15rem' }}>
        <Card.Img variant="top" src={sportNews.image} />
        <Card.Body>
          <Card.Title>Headline</Card.Title>
          <Card.Text>
            {sportNews.headline}
          </Card.Text>
          <Button variant="success">Read More..</Button>
        </Card.Body>
      </Card>

      <Card style={{ width: '15rem' }}>
        <Card.Img variant="top" src={soccer.image} />
        <Card.Body>
          <Card.Title>Headline</Card.Title>
          <Card.Text>
            {soccer.headline}
          </Card.Text>
          <Button variant="success">Read More..</Button>
        </Card.Body>
      </Card>

      <Card style={{ width: '15rem' }}>
        <Card.Img variant="top" src={soccers.image} />
        <Card.Body>
          <Card.Title>Headline</Card.Title>
          <Card.Text>
            {soccers.headline}
          </Card.Text>
          <Button variant="success">Read More..</Button>
        </Card.Body>
      </Card>

      <Card style={{ width: '15rem' }}>
        <Card.Img variant="top" src={mySportPic.image} />
        <Card.Body>
          <Card.Title>Headline</Card.Title>
          <Card.Text>
            {mySportPic.headline}
          </Card.Text>
          <Button variant="success">Read More..</Button>
        </Card.Body>
      </Card>

      <Card style={{ width: '15rem' }}>
        <Card.Img variant="top" src={sportz.image} />
        <Card.Body>
          <Card.Title>Headline</Card.Title>
          <Card.Text>
            {sportz.headline}
          </Card.Text>
          <Button variant="success">Read More..</Button>
        </Card.Body>
      </Card>

      <Card style={{ width: '15rem' }}>
        <Card.Img variant="top" src={skyNews.image} />
        <Card.Body>
          <Card.Title>Headline</Card.Title>
          <Card.Text>
            {skyNews.headline}
          </Card.Text>
          <Button variant="success">Read More..</Button>
        </Card.Body>
      </Card>

      <Card style={{ width: '15rem' }}>
        <Card.Img variant="top" src={ourNews.image} />
        <Card.Body>
          <Card.Title>Headline</Card.Title>
          <Card.Text>
            {ourNews.headline}
          </Card.Text>
          <Button variant="success">Read More..</Button>
        </Card.Body>
      </Card>

      <Card style={{ width: '15rem' }}>
        <Card.Img variant="top" src={sporty.image} />
        <Card.Body>
          <Card.Title>Headline</Card.Title>
          <Card.Text>
            {sporty.headline}
          </Card.Text>
          <Button variant="success">Read More..</Button>
        </Card.Body>
      </Card>

      <Card style={{ width: '15rem' }}>
        <Card.Img variant="top" src={sportee.image} />
        <Card.Body>
          <Card.Title>Headline</Card.Title>
          <Card.Text>
            {sportee.headline}
          </Card.Text>
          <Button variant="success">Read More..</Button>
        </Card.Body>
      </Card>

      </div>
</>
  )
}

export default Home