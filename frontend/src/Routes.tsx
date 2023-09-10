import { Route, Routes } from 'react-router-dom'
import { Home } from './Pages'

const RoutesComponent = () => (
  <Routes>
    <Route path='/' Component={ Home } />
  </Routes>
)

export default RoutesComponent
