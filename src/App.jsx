import './assets/css/bootstrap-icons.css'
import './assets/css/bootstrap.min.css'
import './assets/css/templatemo-barber-shop.css'
import About from "./components/about/about"
import Button from "./components/button/button"
import Contact from "./components/contact/contact"
import Feature from "./components/feature/feature"
import Footer from "./components/footer/footer"
import Menu from "./components/menu/menu"
import Navbar from "./components/navbar/navbar"
import Pricelist from "./components/pricelist/pricelist"
import Service from "./components/service/service"
import "./config/Firebase"

const App = () => {
  
  return (
    <>
      <Navbar/>
      <Menu/>
      <Button/>
      <About/>
      <Feature/>
      <Service/>
  
      <Pricelist/>
      <Contact/>
      <Footer/>
    </>
  )
}

export default App
