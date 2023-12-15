import './App.css'
import {Route, Routes} from 'react-router-dom'
import NavigationBar from './Component/navbar/NavigationBar'
import Home from './Component/sport/Home'
import News from './Component/news/News'
import Footer from './Component/footer/Footer'

function App() {
 
  return (
    <>
       
      <NavigationBar />
      <Footer />
     
      <Routes>
        <Route path='/home' element={<Home />} />
        <Route path='/news' element={<News />} />
      </Routes>
    </>
  )
}

export default App
