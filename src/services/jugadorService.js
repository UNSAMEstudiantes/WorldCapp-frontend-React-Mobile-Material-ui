import axios from "axios"
import { Jugador } from "src/domain/jugador"
import { REST_SERVER_URL } from "./config"

class JugadorService{

    jugadoresAsJson(figuritaJson){
        return Jugador.fromJson(figuritaJson)
    }

    async getItemsFiltrados(valorABuscar){
        const jugadorJson = await axios.get(`${REST_SERVER_URL}/jugadores?nombre=${valorABuscar}`)
        const jugadores = jugadorJson.data.map(this.jugadoresAsJson)
        return jugadores
    }

    async actualizarJugador(jugadorActualizado){
        await axios.put(`${REST_SERVER_URL}/editar-jugador/${jugadorActualizado.id}`, jugadorActualizado.toJSON())
    }

    async borrarItem(id){
        await axios.delete(`${REST_SERVER_URL}/jugadores/borrar-jugador/${id}`)
    }

    async crearJugador(jugador){
        await axios.post(`${REST_SERVER_URL}/crear-jugador`, jugador.toJSON())
    }
   
}

export const jugadorService = new JugadorService()