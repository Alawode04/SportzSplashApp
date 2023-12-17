import './App.css'
import {Route, Routes} from 'react-router-dom'
import NavigationBar from './Component/navbar/NavigationBar'
import Home from './Component/sport/Home'
import News from './Component/news/News'
import Footer from './Component/footer/Footer'
import HighLights from './Component/highlight/HighLights'

function App() {
 
  return (
    <>
       
      <NavigationBar />
    
      <Routes>
        <Route path='/home' element={<Home />} />
        <Route path='/news' element={<News />} />
        <Route path='/highlights' element={<HighLights />} />
      </Routes>

      <Footer />
    </>
  )
}

export default App
