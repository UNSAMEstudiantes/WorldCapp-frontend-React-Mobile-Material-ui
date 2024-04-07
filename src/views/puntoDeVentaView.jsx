import { Typography } from "@mui/material"
import { AccountBox, Place, Storefront } from "@mui/icons-material"
import puntoDeVentaService from "src/services/puntoDeVentaService"
import PuntoDeVenta from "src/domain/puntoDeVenta"
import { GenericCardListComponent } from "./genericView"

export const PuntoDeVentaComponent = () => {
  
  const contenido = (puntoDeVenta) => {
    return (
      <>
        <Typography style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-around', marginTop: "1rem" }}>
          <div style={{ display: "flex", alignItems: "center" }}>
            <Place />{puntoDeVenta.direccion}
          </div>
          {"|"}
          <div style={{ display: "flex", alignItems: "center" }}>
            <AccountBox />{puntoDeVenta.stockSobres}
          </div>
        </Typography>
        <Typography variant="h5" style={{ textAlign: "center", marginTop: "0.5rem", marginBottom: "0.4rem" }}>
          {puntoDeVenta.tipo}
        </Typography>
      </>
    )
  }
  return (
    <GenericCardListComponent service={puntoDeVentaService} contenido={contenido} iconoCard={<Storefront/>} direccion={'/nuevo-punto'} tipoItem={new PuntoDeVenta()}/>
  )
      
}

export default PuntoDeVentaComponent
