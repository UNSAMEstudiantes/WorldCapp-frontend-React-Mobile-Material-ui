import Checkbox from '@mui/material/Checkbox'
import { TextField , Button , Select , MenuItem , InputLabel} from "@mui/material"
import { useNavigate } from "react-router-dom"
import { useState } from 'react'
import { useEffect } from 'react'
import { jugadorService } from 'src/services/jugadorService'
import { useForm } from 'react-hook-form'
/* eslint-disable react/prop-types */
export const FormFigurita = ({ figurita, funcionSubmit, esDetalles }) =>{

    const navigate = useNavigate()
    const [nivelDeImpresion, setNivelDeImpresion] = useState(figurita.nivelImpresion)
    const [onFire, setEstaOnFire] = useState(figurita.onFire)
    const [jugadores , setJugadores] = useState([])
    const [jugadorId, setJugadorId] = useState(figurita.jugadorId)
    const [mostrarBoton] = useState(esDetalles)

    const {
        register, 
        handleSubmit, 
        formState : { errors }} = useForm({
        defaultValues:{
            figuritaId: figurita ? figurita.id : null , 
            numero: figurita ? figurita.numeroFigurita : "",
            nuevoJugador: figurita ? figurita.jugadorId : '' ,
            nivelDeImpresion : figurita ? figurita.nivelImpresion : "",
            imagen : figurita ? figurita.imagen : "",
            onFire: figurita ? figurita.onFire : false
        }
    })  

    const onSubmit = handleSubmit((data) => {
        funcionSubmit(data)
    })

    const goToFiguritas = () => {
        navigate(`/figuritas`)
      }

    const recibirJugadores = async () =>{
           const jugadores = await jugadorService.getItemsFiltrados('')
           setJugadores(jugadores) 
    } 

    useEffect(()=>{ 
        recibirJugadores()
    }, [figurita])

    return (
        <>
            <form onSubmit={onSubmit}>
                <div style={{display: "flex", flexDirection: "column", color: "black"}}>
                <TextField disabled = {esDetalles} style={{marginBottom:"1rem"}} type="number" label="numero de figurita" variant='standard'
                    {...register("numero", {
                                required: "El numero es requerido"
                            })}
                            error={errors.numero}
                            helperText={errors.numero?.message} />
                            <InputLabel id="demo-simple-select-label" style={{marginLeft: "0", transform: "translate(0, -1.5px) scale(0.75)"}}>Jugador</InputLabel>
                            
                    <Select
                            disabled = {esDetalles}
                            labelId="demo-simple-select-label"
                            {...register("nuevoJugador", {
                                required: "El jugador es requerido"
                            })}
                            value={jugadorId}
                            variant='standard'
                            label="Jugador"
                            onChange={(event) => {
                                setJugadorId(event.target.value)
                            }}
                            style={{marginBottom: "1rem"}}
                            >
                                {jugadores.map(jugador =>
                                    <MenuItem key={jugador.id} value={jugador.id}>{jugador.nombre + " " + jugador.apellido}</MenuItem>
                                )}
                                
                            </Select>
                            <div style={{display: "flex", flexDirection: "row", color: "black", alignItems: "center", marginLeft: "-0.7rem", marginBottom: "1rem"}}>
                        <Checkbox disabled = {esDetalles} {...register("onFire")} checked={figurita ? onFire : false} onChange={(event) => {setEstaOnFire(event.target.checked)}}/> {"OnFire"}
                    </div>
                    <InputLabel id="demo-simple-select-label" style={{marginLeft: "0", transform: "translate(0, -1.5px) scale(0.75)"}}>Nivel de Impresion</InputLabel>
                    <Select
                        disabled = {esDetalles}
                        labelId='demo-simple-select-label'
                            {...register("nivelDeImpresion", {
                                required: "El nivel de impresion es requerido "
                            })}
                            value={nivelDeImpresion}
                            variant='standard'
                            label="Nivel de Impresion"
                            onChange={(event) => {
                                setNivelDeImpresion(event.target.value)
                            }}
                            style={{marginBottom: "1rem"}}
                            >
                                <MenuItem value={"alta"}>Alta</MenuItem>
                                <MenuItem value={"media"}>Media</MenuItem>
                                <MenuItem value={"baja"}>Baja</MenuItem>
                            </Select>
                    <TextField disabled = {esDetalles} label="URL de la imagen" variant='standard'
                     style={{marginBottom:"1rem"}}
                    {...register("imagen", {
                                required: "El URL de la imagen es requerido"
                            })}
                            error={errors.imagen}
                            helperText={errors.imagen?.message} />
                      <div>valoracion base {figurita.valoracion}</div> 
                    <div>valoracion total {figurita.valoReal}</div>
                    <div style={{display: "flex", flexDirection: "column", color: "black"}}>
                        <Button variant="text" onClick={goToFiguritas}>Volver</Button>
                        {!mostrarBoton && ( <Button variant="contained" type='submit'>Guardar</Button> )}
                    </div>
                </div>
            </form>
        </>  
    )
}

