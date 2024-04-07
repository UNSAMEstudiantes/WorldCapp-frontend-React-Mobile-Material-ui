import { figuritaService } from "../services/figuritaService"
import { LocalFireDepartment, Print, AccountBox } from '@mui/icons-material'
import {Typography} from '@mui/material'
import { GenericCardListComponent } from "./genericView"
import { Figurita } from "src/domain/figurita"

export const FiguritaComponent = () => {
  const contenido = (figurita) => {
    return (
      <>
      <Typography style={{ display: 'flex' , alignItems: 'center' , justifyContent: 'space-around'}}>
          #{figurita.numeroFigurita}
          {figurita.onFire ? 
          <div style={{display: 'flex' , color: 'red'}}><LocalFireDepartment/>On Fire</div> 
          : 
          <div style={{ display: 'flex', textDecoration: 'line-through'}}>
            <LocalFireDepartment/>
             OnFire
          </div>
          }
          <div style={{display:"flex", alignItems:"center"}}>
            <Print/>{figurita.nivelImpresion}
          </div>
        </Typography>
        <Typography variant="h5" style={{textAlign: "center", marginTop:"0.2rem", marginBottom:"0.4rem"}}>
          { "Valoracion: " + figurita.valoReal}
        </Typography>
      </>
    )
  }
  return (
    <GenericCardListComponent service={figuritaService} contenido={contenido} iconoCard={<AccountBox/>} direccion={'/nueva-figurita'} tipoItem={new Figurita()}/>
  )
}
