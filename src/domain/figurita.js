export class Figurita {
    constructor(){
        this.id = 0
        this.numeroFigurita = 0
        this.nombre = ''
        this.OnFire = ''
        this.valoracion = 0 
        this.peso = 0
        this.altura = 0
        this.nroCamiseta = 0
        this.seleccion = ''
        this.nacimiento = ''
        this.cotizacion = 0
        this.imagen = ''
        this.cedidaPor = ''
        this.posicion= ''
        this.nivelImpresion = ''
        this.valoReal = 0
        this.esPromesa = false
        this.copasDelMundo = 0
        this.anioDeDebut = ''
        this.confederacion = ''
        this.copasConfederacion = 0
        this.lider = false
    }

    static fromJson(figuritaJson){
        const result = Object.assign(new Figurita(),figuritaJson)
        return result
    }
   
}

export class FiguritaActualizada {
    constructor(){
        this.numero = 0
        this.nuevoJugador = 0
        this.Onfire = false
        this.nivelDeImpresion = ""
        this.imagen = ""
    }

    toJson(){
        return {
      ...this,
      }
    }
}