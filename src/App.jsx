import './App.sass'
import BestSeller from './components/BestSeller'
import Category from './components/Category'
import Designed from './components/Designed'
import Info from './components/Info'
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
    </div>
  )
}

export default App
