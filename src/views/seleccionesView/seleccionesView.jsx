/* eslint-disable no-unused-vars */
import { useState, useEffect } from "react"
import { seleccionService } from "src/services/seleccionService"
import Grid from '@mui/material/Grid'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemText from '@mui/material/ListItemText'
import IconButton from '@mui/material/IconButton'
import DeleteIcon from '@mui/icons-material/Delete'
import EditIcon from '@mui/icons-material/Edit'
import { styled } from '@mui/material/styles'
import { cloneElement } from "react"
import { Container, Snackbar, Alert } from "@mui/material"
import GenericSearchBar from "src/components/busqueda/busqueda"
import { handleError } from "src/services/config"
import BasicModal from "src/components/modalSeleccion/modalSeleccion"
import { FloatingButton } from "src/components/boton/botonFlotante"
import { Seleccion } from 'src/domain/seleccion'


export const SeleccionesComponent = () => {
    const [selecciones, setSelecciones] = useState([])
    const [dense, setDense] = useState(false)
    const [secondary, setSecondary] = useState(false)
    const [filtroNombre, setFiltroNombre] = useState("")
    const [openEditor, setOpenEditor] = useState(false)
    const [seleccionAEditar, setSeleccionAEditar] = useState({})
    const [modalKey, setModalKey] = useState(0)
    const [gestorOperacion, setGestorOperacion] = useState({})


    /* ---- */
    const [message, setMessage] = useState(null)
    const [messageType, setMessageType] = useState(null)
    const [open, setOpen] = useState(false)


    const onActionCompleted = (message, type) => {
      setMessage(message)
      setMessageType(type)
      buscarSelecciones('')
      handleClick()
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
    /* ---- */
    
    const buscarSelecciones = async (textoBusqueda) => {
        try{
            const selecciones = await seleccionService.getSelecciones(textoBusqueda)
            setSelecciones(selecciones)
        }
        catch(error){
            onActionCompleted(handleError(error), 'error')
        }
    }

    const cambioFiltroConBusqueda = (value) => {
        setFiltroNombre(value)
        buscarSelecciones(value)
    }
 
    /* ----------------------------- OPERACIONES ------------------------------ */

    const borrarSeleccion = async(id) => {
        try {
            await seleccionService.borrarSeleccion(id)    
            onActionCompleted('Seleccion borrada con éxito', 'success')
        } catch (error) {
            onActionCompleted(handleError(error), 'error')
        }
    }

    const actualizarSeleccion = async(seleccionActualizada) => {
        try{
            const nuevaSeleccion = Object.assign(new Seleccion(), seleccionActualizada)
            await seleccionService.actualizarSeleccion(nuevaSeleccion)
            onActionCompleted('Seleccion actualizada con éxito', 'success')
        }catch(e){
            onActionCompleted(handleError(error), 'error')
        }
    }

    const crearSeleccion = async (seleccionActualizada) => {
        try{
            const nuevaSeleccion = Object.assign(new Seleccion(), seleccionActualizada)
            await seleccionService.crearSeleccion(nuevaSeleccion)
            onActionCompleted('Seleccion creada con éxito', 'success')
        }catch(e){
            onActionCompleted(handleError(error), 'error')
        }
    }

    /* ----------------------------------------------------------------- */


    useEffect(() => {
        buscarSelecciones("")
    }, [])

    const Demo = styled('div')(({ theme }) => ({
        backgroundColor: theme.palette.background.paper,
    }))

    const abrirEditorSeleccion = (seleccion) => {
        setSeleccionAEditar(seleccion)
        gestorOperacion.operacion = actualizarSeleccion
        setGestorOperacion(gestorOperacion)
        setModalKey((prevKey) => prevKey + 1)
        setOpenEditor(true)
    }

    const abrirCrearSeleccion = () => {
        const nuevaSeleccion = new Seleccion()
        gestorOperacion.operacion = crearSeleccion
        setGestorOperacion(gestorOperacion)
        setSeleccionAEditar(nuevaSeleccion)
        setModalKey((prevKey) => prevKey + 1)
        setOpenEditor(true)
    }

    const closeModal = async() => {
        setOpenEditor(false)
        await buscarSelecciones("")
    }


    return (
        <>
            <Container className="main" style={{marginBottom: "5rem"}}>
                <GenericSearchBar value={filtroNombre} onChange={cambioFiltroConBusqueda}/>
                <Grid item xs={12} md={6}>
                    <Demo>
                        <List dense={dense}>
                            {selecciones.map(seleccion => 
                                <ListItem key={seleccion.id}
                                    secondaryAction={
                                        <>
                                            <IconButton edge="end" aria-label="delete" onClick={() => {borrarSeleccion(seleccion.id)}}>
                                                <DeleteIcon />
                                            </IconButton>
                                            <IconButton data-testid="botonEditar" style={{marginLeft: "1rem"}} edge="end" aria-label="edit" onClick={() => {abrirEditorSeleccion(seleccion)}}>
                                                <EditIcon />
                                            </IconButton>
                                        </>
                                    }
                                    >
                                    <ListItemText
                                        data-testid = "nombre"
                                        primary= {seleccion.pais}
                                        sx={{color: "black"}}
                                        secondary={secondary ? 'Secondary text' : null}
                                    />
                                </ListItem>
                            )}
                            
                        </List>
                    </Demo>
                </Grid>
                <div>
                    <Snackbar open={open} autoHideDuration={3000} onClose={handleClose} anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}>
                        <Alert severity={messageType}> {message}</Alert>
                    </Snackbar>
                </div>
                <div>
                    <BasicModal key={modalKey} openModal={openEditor} seleccion={seleccionAEditar} cerrarModal={() => {closeModal()}} operacion = {gestorOperacion.operacion}/>
                </div>
                <div>
                    <FloatingButton func={ () => {abrirCrearSeleccion()}} />
                </div>
            </Container >
        </>
    )

}
