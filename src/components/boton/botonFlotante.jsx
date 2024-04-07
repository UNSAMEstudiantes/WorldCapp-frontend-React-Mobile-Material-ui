import Fab from "@mui/material/Fab"
import AddIcon from '@mui/icons-material/Add'
import { Link } from "react-router-dom"
import PropTypes from 'prop-types'

export const FloatingButton = ({ to , func, data }) => {

  const handleButtonClick = () => {
    if(typeof func === "function"){
      func()
    }
  }

  return (
    <Link to={to} state={data}>
      <Fab data-testid="botonCrear" style={{position: 'fixed', bottom: '20px', right: '20px'}} onClick={handleButtonClick}>
        <AddIcon/>
      </Fab>
    </Link>
  )
}

FloatingButton.propTypes = {
  to: PropTypes.string,
  func: PropTypes.func,
  data: PropTypes.object
}

