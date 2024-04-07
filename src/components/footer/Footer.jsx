import { Link, Breadcrumbs, Typography } from '@mui/material'
import FacebookIcon from '@mui/icons-material/Facebook'

export const Footer = () => {

  return (
    <footer className='footer'>
      <Breadcrumbs aria-label="breadcrumb"
      >
        <Link
          underline="hover"
          color="inherit"
          href="https://algo3.uqbar-project.org/"
        >
          <FacebookIcon />
        </Link>
        <Link
          underline="hover"
          color="inherit"
          href="https://algo3.uqbar-project.org/"
        >
          WorldCApp
        </Link>
        <Typography color="text.primary">2023</Typography>
      </Breadcrumbs>
    </footer>

  )
}