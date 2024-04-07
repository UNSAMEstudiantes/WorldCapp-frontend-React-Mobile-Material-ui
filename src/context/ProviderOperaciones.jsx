/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { ContextOperaciones } from "./ContextOperaciones"
import { FormJugador } from "src/components/formJugador/formJugador"
import { Jugador } from "src/domain/jugador"
import { jugadorService } from "src/services/jugadorService"
import { FormFigurita } from "src/components/formFigurita/formFigurita"
import { figuritaService } from "src/services/figuritaService"
import { Figurita, FiguritaActualizada } from "src/domain/figurita"
import { FormPuntoDeVenta } from "src/components/FormPuntoDeVenta/FormPuntoDeVenta"
import PuntoDeVenta from "src/domain/puntoDeVenta"
import puntoDeVentaService from "src/services/puntoDeVentaService"


export const ProviderOperaciones =({ children })=>{
  
  
  const value ={
    jugador: {
        actualizar: async (jugadorActualizado) => {
            const jugadorAAactualizar = Object.assign(new Jugador(), jugadorActualizado)
            await jugadorService.actualizarJugador(jugadorAAactualizar)
        },
        crear: async (jugadorNuevo) => {
            const nuevoJugador = Object.assign(new Jugador(), jugadorNuevo)
            await jugadorService.crearJugador(nuevoJugador)
        },
        crearForm: (jugador, funcionSubmit, esDetalles) => {
          return (
              <FormJugador jugador={ jugador } funcionSubmit={ funcionSubmit } esDetalles={ esDetalles }/>
          )
        },
        urlHome : "/jugadores"
    },
    figurita: {
        actualizar: async(figuritaActualizada) => {
          const figuritaId = figuritaActualizada.figuritaId
          delete figuritaActualizada.figuritaId
          const FiguritaAActualizar = Object.assign(new FiguritaActualizada(), figuritaActualizada)
          await figuritaService.actualizarFigurita(figuritaId , FiguritaAActualizar )
        },
        crear: async(figuritaNueva) => {
          const FiguritaACrear = Object.assign(new FiguritaActualizada(), figuritaNueva)
          await figuritaService.crearFigurita(FiguritaACrear)
        },
        crearForm: (figurita, funcionSubmit, esDetalles) => {
          return (
            <FormFigurita figurita={ figurita } funcionSubmit={ funcionSubmit } esDetalles={ esDetalles } />
          )
        },
        urlHome : "/figuritas" 
    },
    puntodeventa: {
        actualizar: async(puntoDeVentaActualizado) => {
         const puntoAAactualizar = Object.assign(new PuntoDeVenta(), puntoDeVentaActualizado)
         await puntoDeVentaService.actualizarPuntoDeVenta(puntoAAactualizar)          
        },
        crear: async(puntoDeVentaNuevo) => {
          const nuevoPuntoDeVenta = Object.assign(new PuntoDeVenta(), puntoDeVentaNuevo)
          await puntoDeVentaService.crearPuntoDeVenta(nuevoPuntoDeVenta)    
        },
          
          crearForm: (puntoDeVenta, funcionSubmit, esDetalles) => {
        return(
          <FormPuntoDeVenta puntoDeVenta = {puntoDeVenta } funcionSubmit={ funcionSubmit } esDetalles= {esDetalles} />)
        },

        urlHome : "/puntos-de-venta" 
    },
  }
  return(
    <ContextOperaciones.Provider value ={value}>
      {children}
    </ContextOperaciones.Provider>
  )
}