export class Seleccion{
    constructor(id = 0, pais = "", copasDelMundo = 0, confederacion = ""){
        this.id = id
        this.pais = pais
        this.copasDelMundo = copasDelMundo
        this.confederacion = confederacion
    }

    static fromJson(seleccionJSON){
        const result = Object.assign(new Seleccion(), seleccionJSON)
        return result
    }

    toJSON(){
        return {
      ...this,
      }
    }
}