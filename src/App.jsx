import './App.sass'
import BestSeller from './components/BestSeller'
import Designed from './components/Designed'
import NavBar from './components/NavBar'
import SliderCus from './components/SliderCus'


function App() {
  return (
    <div>
      <NavBar/>
      <SliderCus/>
      <Designed/>
      <BestSeller/>
    </div>
  )
}

export default App
