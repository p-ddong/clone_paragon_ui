import './App.sass'
import BestSeller from './components/BestSeller'
import Category from './components/Category'
import Color from './components/Color'
import Designed from './components/Designed'
import Footer from './components/Footer'
import Info from './components/Info'
import LookBetter from './components/LookBetter'
import NavBar from './components/NavBar'
import SliderCus from './components/SliderCus'


function App() {
  return (
    <div>
      <NavBar/>
      <SliderCus/>
      <Designed/>
      <BestSeller/>
      <Category/>
      <Info/>
      {/* <Color/> */}
      <LookBetter/>
      <Footer/>
    </div>
  )
}

export default App
