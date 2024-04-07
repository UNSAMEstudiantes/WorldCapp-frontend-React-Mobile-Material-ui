import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom'
import LoginView from './views/login'
import { FiguritaComponent } from './views/figuritaView'
import { HomeView } from './views/homeView/homeView'
import PuntoDeVentaComponent from './views/puntoDeVentaView'
import { JugadoresComponent } from './views/jugadorView/jugadoresView'
import LayoutWrap from './views/layoutWrap'
import { useContext } from 'react'
import { Context } from './context/Context'
import { useEffect } from 'react'
import { SeleccionesComponent } from './views/seleccionesView/seleccionesView'
import { EditarViewComponent } from './views/editView'



export const WorldCappRoutes = () => {

  const {changeTitle} = useContext(Context)

  const DoSomethingWrapper = ({ children, title }) => {
    useEffect(() => {
      changeTitle(title)
    }, [title])
    return children
  }


  // SeleccionesComponent


  return (
    <Routes>
      <Route path="/login" element={ <LoginView />} />
      <Route path="/" element={<LayoutWrap />} >
        <Route path="figuritas" element={ <DoSomethingWrapper title="Figuritas"><FiguritaComponent /></DoSomethingWrapper>} />
        <Route path="home" element={ <DoSomethingWrapper title="Home"><HomeView /></DoSomethingWrapper>} />
        <Route path="puntos-de-venta" element={ <DoSomethingWrapper title="Puntos de venta"><PuntoDeVentaComponent /></DoSomethingWrapper>} />
        <Route path="jugadores" element={ <DoSomethingWrapper title="Jugadores"><JugadoresComponent /></DoSomethingWrapper>} />
        <Route path="selecciones" element={ <DoSomethingWrapper title="Selecciones"><SeleccionesComponent/></DoSomethingWrapper>} />
        <Route path="edit-view" element={ <DoSomethingWrapper title="Crear o Editar Elemento"><EditarViewComponent/></DoSomethingWrapper>} />
      </Route>
      <Route path="*" element={<Navigate to="/login" />} />
    </Routes>
  )
}


export const WorldCappRouter = () => {
  return (
    <Router>
      <WorldCappRoutes />
    </Router>
  )
}
