import { Link } from 'react-router-dom'

export const Navbar = () => (
  <li className='list-none'>
    <Link to='/'>Home</Link>
    <Link className='ml-5' to='/plate-calculator'>Plate Calculator</Link>
  </li>
)