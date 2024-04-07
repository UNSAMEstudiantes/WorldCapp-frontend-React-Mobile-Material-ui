import axios from 'axios'
import { REST_SERVER_URL, userId } from './config'
import PuntoDeVenta from 'src/domain/puntoDeVenta'

class PuntoDeVentaService {
 
 
  puntosDeVentaAsJson(puntoDeVentaJson){
    return PuntoDeVenta.fromJson(puntoDeVentaJson)
}
 
  async getItemsFiltrados(busqueda) {
    const puntoDeVentaJson = await axios.get(`${REST_SERVER_URL}/puntosdeventa/${userId()}/Ordenado?tipoOrden=masbaratos&nombreABuscar=${busqueda}`)
    const puntosdeventa = puntoDeVentaJson.data.map(this.puntosDeVentaAsJson)
    return puntosdeventa

  }
  async getCantPdV() {
    const cantPdV = await axios.get(`${REST_SERVER_URL}/puntosdeventa/total-activos`)
    return cantPdV.data
  }

  async borrarItem(idPuntoDeVenta) {
      const usuarioId = userId() 
      await axios.delete(`${REST_SERVER_URL}/puntosdeventa/${usuarioId}/${idPuntoDeVenta}`)
    }

    async actualizarPuntoDeVenta(puntoDeVentaActualizado) {
      console.log('ID a enviar:', puntoDeVentaActualizado.id)
      await axios.put(`${REST_SERVER_URL}/puntosdeventa/editar-punto/${puntoDeVentaActualizado.id}`, puntoDeVentaActualizado.toJSON())
    }

  async crearPuntoDeVenta(puntoDeVenta){
    const usuarioId = userId() 
    await axios.post(`${REST_SERVER_URL}/puntosdeventa/${usuarioId}/crear`, puntoDeVenta.toJSON())
  }
  
}


const puntoDeVentaService = new PuntoDeVentaService()
export default puntoDeVentaService