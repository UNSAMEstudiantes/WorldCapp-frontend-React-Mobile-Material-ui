export class Jugador {
    constructor(
        id = 0,
        nombre = '',
        apellido = '',
        peso = 0,
        altura = 0,
        nroDeCamiseta = 0,
        seleccion = '',
        fechaNacimiento = '',
        cotizacion = 0,
        posicion= '',
        lider = false
    ){
        this.id = id
        this.nombre = nombre
        this.apellido = apellido
        this.peso = peso
        this.altura = altura
        this.nroDeCamiseta = nroDeCamiseta
        this.seleccion = seleccion
        this.anioDeDebut = ''
        this.fechaNacimiento = fechaNacimiento
        this.cotizacion = cotizacion
        this.posicion= posicion
        this.lider = lider
    }

    static fromJson(jugadorJSON){
        const result = Object.assign(new Jugador(), jugadorJSON)
        return result
    }

    toJSON(){
        return {
      ...this,
      }
    }
}