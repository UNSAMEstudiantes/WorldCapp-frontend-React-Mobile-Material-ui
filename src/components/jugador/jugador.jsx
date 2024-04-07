import { Box, Typography } from "@mui/material"
import { Accessibility, Flag, Height, Scale } from '@mui/icons-material'
// import { DirectionsRunIcon } from '@mui/icons-material/DirectionsRun'
import PropTypes from 'prop-types'


export const JugadorContent = ({jugador}) => {
    const cotizacionPromesa = () => {
        if(jugador.cotizacion < 20){
            return jugador.cotizacion * 1000000
        }else{
            return jugador.cotizacion
        }
    }

    return (
        <>
            <Box sx={{display: "flex", justifyContent: "center", alignItems: "center", my: 1}}>
                <Typography data-testid = "fechaNacimiento" style={{fontSize: "0.9rem", display: "flex", alignItems: "center"}}>
                    {jugador.fechaNacimiento}
                </Typography>
                {"|"}
                <Typography data-testid = "nroDeCamiseta" style={{fontSize: "0.9rem", display: "flex", alignItems: "center"}}>
                    <Accessibility/>
                    {jugador.nroDeCamiseta}
                </Typography>
                {"|"}
                <Typography data-testid = "seleccion" style={{fontSize: "0.9rem", display: "flex", alignItems: "center"}}>
                    <Flag/>
                    {jugador.seleccion}
                </Typography>
            </Box>
            <Box sx={{display: "flex", justifyContent: "space-around", mb: 1}}>
                <Typography data-testid = "posicion" style={{fontSize: "0.9rem", display: "flex", alignItems: "center"}}>
                    {jugador.posicion}
                </Typography>
                {"|"}
                <Typography data-testid = "altura" style={{fontSize: "0.9rem", display: "flex", alignItems: "center"}}>
                    <Height/>
                    {jugador.altura + "cm"}
                </Typography>
                {"|"}
                <Typography data-testid = "peso" style={{fontSize: "0.9rem", display: "flex", alignItems: "center"}}>
                    <Scale/>
                    {jugador.peso + "kg"}
                </Typography>
            </Box>
            <Typography variant="h5" style={{textAlign: "center", marginTop:"0.2rem", marginBottom:"0.4rem"}}>
                { "$ " + cotizacionPromesa()}
            </Typography>
        </>
    )
}

JugadorContent.propTypes = {
  jugador: PropTypes.shape({
    nombre: PropTypes.string.isRequired,
    apellido: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    nroDeCamiseta: PropTypes.number.isRequired,
    seleccion: PropTypes.string.isRequired,
    posicion: PropTypes.string.isRequired,
    fechaNacimiento: PropTypes.string.isRequired,
    cotizacion: PropTypes.number.isRequired,
    altura: PropTypes.number.isRequired,
    peso: PropTypes.number.isRequired
  }).isRequired,
}