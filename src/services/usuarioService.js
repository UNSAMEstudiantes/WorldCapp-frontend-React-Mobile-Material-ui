import axios from 'axios'
import { REST_SERVER_URL } from './config'

class UsuarioService {
  async validarUsuario(username) {
    const usuarioId = await axios.post(`${REST_SERVER_URL}/login`, { userName: username })
    return usuarioId.data

  }
}

const usuarioService = new UsuarioService()
export default usuarioService
