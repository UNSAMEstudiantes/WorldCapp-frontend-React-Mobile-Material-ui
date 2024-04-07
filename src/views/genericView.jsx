/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useEffect, useState } from "react"
import { Alert , Container, Snackbar} from "@mui/material"
import { FloatingButton } from "src/components/boton/botonFlotante"
import { handleError } from "src/services/config"
import GenericSearchBar from "src/components/busqueda/busqueda"
import GenericCard from "src/components/card/genericCard"
import { useNavigate } from 'react-router-dom'
// eslint-disable-next-line react/prop-types
export const GenericCardListComponent = ({ service , contenido , iconoCard , tipoItem}) => {
  const [items, setItems] = useState([])
  const [message, setMessage] = useState(null)
  const [messageType, setMessageType] = useState(null)
  const [open, setOpen] = useState(false)
  const [filtroNombre, setFiltroNombre] = useState("")
  const navigate = useNavigate()

  const buscarItems = async (textoBusquedaNuevo) => {
    try{
      const itemsFiltrados = await service.getItemsFiltrados(textoBusquedaNuevo)
      setItems(itemsFiltrados)
    }
    catch(error){
      onActionCompleted(handleError(error), 'error')
    }
  }
  
  const onActionCompleted = (message, type) => {
      setMessage(message)
      setMessageType(type)
      buscarItems('')
      handleClick()
  }
    
  useEffect(() => {
    buscarItems('')
  }, [])

  const handleClick = () => {
    setOpen(true)
  }

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return
    }
    setOpen(false)
  }

  const goToEditarItem = (elemento) => {
    const tipoElemento = tipoItem.constructor.name.toLowerCase()
    const tipoOperacion = 'actualizar'
    const esDetalles = false
    navigate(`/edit-view`, { state: { elemento, tipoOperacion, tipoElemento, esDetalles } })
  }

  const borrarItem = async (id) => {
    try {
      await service.borrarItem(id)
      onActionCompleted('Item borrado con éxito', 'success')
    } catch (error) {
      onActionCompleted(handleError(error), 'error')
    }
  }

  const cambioFiltroConBusqueda = (value) => {
    setFiltroNombre(value)
    buscarItems(value)
  }

  const dataCrearItem = {
    elemento:{tipoItem},
    tipoOperacion: 'crear',
    tipoElemento: tipoItem.constructor.name.toLowerCase(),
    esDetalles: false
  }

  const goToDetalles = (elemento) => {
    const tipoElemento = elemento.constructor.name.toLowerCase()
    const tipoOperacion = 'actualizar' // es indistinto xq no se va a poder modificar el elemento
    const esDetalles = true
    navigate(`/edit-view`, { state: { elemento, tipoOperacion, tipoElemento, esDetalles } })
  }

  const getNombreElemento = (elemento) => {
    if(elemento.constructor.name.toLowerCase() == "jugador"){
      return elemento.nombre + " " + elemento.apellido
    }else{
      return elemento.nombre
    }
  }

  return (
      <Container className="main" style={{marginBottom: "5rem"}}>
        <GenericSearchBar value={filtroNombre} onChange={cambioFiltroConBusqueda} />
        {items.map(item =>
        <GenericCard key={item.id} titulo={getNombreElemento(item)} 
        content = {contenido(item)} onDelete={() => borrarItem(item.id)} onEdit={() => goToEditarItem(item)} icono={iconoCard} goToDetalles = {() => { goToDetalles(item) }}/>
        )}
        <div>
        <Snackbar open={open} autoHideDuration={3000} onClose={handleClose} anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}>
        <Alert severity={messageType}> {message}</Alert>
        </Snackbar>
        </div>
        <FloatingButton to={"/edit-view"} data={dataCrearItem}/>
      </Container>
  )
}

