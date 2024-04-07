export class PuntoDeVenta {
    constructor(){
        this.id = 0
        this.tipo= ''
        this.nombre = ''
        this.direccion = ''
        this.stockSobres = 0 
        this.puntoX = 0
        this.puntoY = 0
        this.pedidosPendientes = 0
        this.precioPorSobre = 0
        this.distancia = 0
        this.tipoDescuento = ''
        this.localidad = ''
        this.altura = 0
    }

    static fromJson(puntoDeVentaJSON){
        const result = Object.assign(new PuntoDeVenta(), puntoDeVentaJSON)
        return result
    }

    
    toJSON(){
        return {
      ...this,

      }
    }
}
    

export default PuntoDeVenta
