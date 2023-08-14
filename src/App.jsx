

import './App.css'
import About from './components/about/About'
import Banner from './components/banner/Banner'
import Contact from './components/contact/Contact'
import Locations from './components/locations/Locations'
import Menu from './components/menu/Menu'
import Navbar from './components/navbar/Navbar'
function App() {

  return (
    <>
    
    <div className="App">
      <Navbar/>
      <Banner/>
      <About/>
      <Menu/>
      <Locations/>
      <Contact/>
    </div>
    
    </>
  )
}

export default App
