/* eslint-disable no-unused-vars */
import { useState, useEffect } from "react"
import { Container, Snackbar, Alert, Button } from "@mui/material"
import { useNavigate, useLocation } from 'react-router-dom'
import { useContext } from "react"
import { ContextOperaciones } from "src/context/ContextOperaciones"
import { handleError } from "src/services/config"

export const EditarViewComponent = () => {

    /* -------------- SNACKBAR --------------- */


    const [message, setMessage] = useState(null)
    const [messageType, setMessageType] = useState(null)
    const [open, setOpen] = useState(false)


    const onActionCompleted = (message, type) => {
      setMessage(message)
      setMessageType(type)
      handleClick()
      setTimeout(() => {volver()}, 2000)
    }

    const handleClick = () => {
        setOpen(true)
    }

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
        return
        }
        setOpen(false)
    }    

    /* --------------------------------------- */

    const navigate = useNavigate()
    const location = useLocation()

    // --- IMPORTANTE QUE TODO COINCIDA CON EL NOMBRE DE CADA CLAVE QUE TIENE EL OBJETO DEL PROVIDER ---
    const elemento = location.state.elemento // el elemento en cuestion que se va a modificar/crear
    const tipoElemento = location.state.tipoElemento // el tipo de elemento (jugador, figurita o puntoDeVenta) 
    const operacionARealizar = location.state.tipoOperacion // la operacion que se realiza
    const esDetalles = location.state.esDetalles // si es la vista de detalles o no

    const operacion = useContext(ContextOperaciones)[tipoElemento][operacionARealizar]
    const crearForm = useContext(ContextOperaciones)[tipoElemento]["crearForm"]
    const urlHomeElemento = useContext(ContextOperaciones)[tipoElemento]["urlHome"]

    const realizarOperacion = async(elementoNuevo) => {
        try{
            await operacion(elementoNuevo)
            onActionCompleted(`Operacion realizada con exito`, 'success')
        }catch(error){
            onActionCompleted(handleError(error), 'error')
        }
    }

    const volver = () => {
        navigate(urlHomeElemento)
    }

    return (
        <>
            <Container className="main" style={{marginBottom: "5rem"}}>
                {crearForm(elemento, realizarOperacion, esDetalles)}
            </Container >
            <div>
                <Snackbar open={open} autoHideDuration={3000} onClose={handleClose} anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}>
                    <Alert severity={messageType}> {message}</Alert>
                </Snackbar>
            </div>
        </>
    )
    
}
