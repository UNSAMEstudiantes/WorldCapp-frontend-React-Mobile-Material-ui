import axios from "axios"
import { Seleccion } from "src/domain/seleccion"
import { REST_SERVER_URL } from "./config"

class SeleccionService{

    seleccionAsJson(figuritaJson){
        return Seleccion.fromJson(figuritaJson)
    }
    
    async getSelecciones(valorABuscar){
        const seleccionesJson = await axios.get(`${REST_SERVER_URL}/selecciones?nombre=${valorABuscar}`)
        const selecciones= seleccionesJson.data.map(this.seleccionAsJson)
        return selecciones
    }

    async borrarSeleccion(id){
        await axios.delete(`${REST_SERVER_URL}/eliminar-seleccion/${id}`)
    }

    async actualizarSeleccion(seleccionActualizada){
        await axios.put(`${REST_SERVER_URL}/editar-seleccion/${seleccionActualizada.id}`, seleccionActualizada.toJSON())
    }

    async crearSeleccion(seleccion){
        await axios.post(`${REST_SERVER_URL}/crear-seleccion`, seleccion.toJSON())
    }
}

export const seleccionService = new SeleccionService()