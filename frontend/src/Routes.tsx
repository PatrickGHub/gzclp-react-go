import { Route, Routes } from 'react-router-dom'
import { Home, PlateCalculator } from './Pages'

const RoutesComponent = () => (
  <Routes>
    <Route path='/' Component={ Home } />
    <Route path='/plate-calculator' Component={ PlateCalculator } />
  </Routes>
)

export default RoutesComponent
