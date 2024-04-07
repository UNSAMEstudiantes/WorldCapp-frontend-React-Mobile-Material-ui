import axios from "axios"
import { Figurita } from "../domain/figurita"
import { REST_SERVER_URL } from "./config"

class FiguritaService{

    figuritaAsJson(figuritaJson){
        return Figurita.fromJson(figuritaJson)
    }
    
    async getItemsFiltrados(busqueda){
        const FiguritaJson = await axios.get(`${REST_SERVER_URL}/busqueda-figuritas?nombre=${busqueda}`)
        const Figuritas = FiguritaJson.data.map(this.figuritaAsJson)
        return Figuritas
    }

    async borrarItem(id){
        await axios.delete(`${REST_SERVER_URL}/busqueda-figuritas/borrar/${id}`)
    }
    
    async actualizarFigurita(figuritaId , figuritaActualizada){
        await axios.put(`${REST_SERVER_URL}/busqueda-figuritas/actualizar/${figuritaId}` , figuritaActualizada.toJson())
    }

    async crearFigurita(figuritaNueva){
        await axios.post(`${REST_SERVER_URL}/crear-figurita` , figuritaNueva.toJson())
    }
}

export const figuritaService = new FiguritaService()