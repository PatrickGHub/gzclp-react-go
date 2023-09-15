import { Route, Routes } from 'react-router-dom'
import { WorkoutSetup, Home, PlateCalculator } from './Pages'

const RoutesComponent = () => (
  <Routes>
    <Route path='/' Component={ Home } />
    <Route path='/workout-setup' Component={ WorkoutSetup } />
    <Route path='/plate-calculator' Component={ PlateCalculator } />
  </Routes>
)

export default RoutesComponent
