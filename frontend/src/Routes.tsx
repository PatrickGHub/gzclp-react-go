import { Route, Routes } from 'react-router-dom'
import { ExerciseSetup, Home, PlateCalculator } from './Pages'

const RoutesComponent = () => (
  <Routes>
    <Route path='/' Component={ Home } />
    <Route path='/exercise-setup' Component={ ExerciseSetup } />
    <Route path='/plate-calculator' Component={ PlateCalculator } />
  </Routes>
)

export default RoutesComponent
