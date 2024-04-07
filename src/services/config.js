export function handleError(error) {
    if (error && error.isAxiosError) {
        console.log(error)
        if (!error.response) {
            return `Lo sentimos, pero ocurrió un problema inesperado en el servidor al intentar procesar su solicitud. Contacte con los desarrolladores.`
        }
        const status = error.response.status
        if (status === 0) {
            return "No hay conexión con el backend, revise si el servidor remoto está levantado"
        } else {
            return error.response.data.message
        }
    } else {
        return 'Se ha producido un error desconocido'
    }
}
export const REST_SERVER_URL = 'http://localhost:9000'
export const userId = () => localStorage.getItem('usuId')


