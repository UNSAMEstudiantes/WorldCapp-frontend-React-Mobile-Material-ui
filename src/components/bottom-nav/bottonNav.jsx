
import { BottomNavigation, BottomNavigationAction } from '@mui/material'
import StorefrontIcon from '@mui/icons-material/Storefront'
import HomeIcon from '@mui/icons-material/Home'
import LogoutIcon from '@mui/icons-material/Logout'
import AccountBoxIcon from '@mui/icons-material/AccountBox'
import PersonIcon from '@mui/icons-material/Person'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Flag } from '@mui/icons-material'


export const BottomNav = () => {

  const [value, setValue] = useState(0)

  return (
    <BottomNavigation
      className='footer'
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue)
      }}
      data-testId='botNav'
    >
      <BottomNavigationAction data-testId='botNavHome' component={Link} to="/home" label="Home" icon={<HomeIcon />} />
      <BottomNavigationAction data-testId='botNavFiguritas' component={Link} to="/figuritas" label="Figuritas" icon={<AccountBoxIcon />} />
      <BottomNavigationAction data-testId='botNavJugadores' component={Link} to="/jugadores" label="Jugadores" icon={<PersonIcon />} />
      <BottomNavigationAction data-testId='botNavPdV' component={Link} to="/puntos-de-venta" label="Puntos de Venta" icon={<StorefrontIcon />} />
      <BottomNavigationAction data-testId='botSelecciones' component={Link} to="/selecciones" label="Selecciones" icon={<Flag />} />
      <BottomNavigationAction data-testId='botNavOut' component={Link} to="/login" label="Logout" icon={<LogoutIcon />} />
    </BottomNavigation>
  )
}
