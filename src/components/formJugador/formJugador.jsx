/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useState, useEffect } from "react"
import { TextField , Button, Select, InputLabel, MenuItem } from "@mui/material"
import Checkbox from '@mui/material/Checkbox'
import dayjs from 'dayjs'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { seleccionService } from "src/services/seleccionService"


export const FormJugador = ({ jugador, funcionSubmit, esDetalles }) => {
    const [mostrarBoton, setMostrarBoton] = useState(esDetalles)
    const [fecha] = useState(dayjs(jugador.fechaNacimiento))
    const [posicion, setPosicion] = useState(jugador.posicion)
    const [esLider, setEsLider] = useState(jugador.lider)
    const [seleccion, setSeleccion] = useState(jugador.seleccion)
    const [selecciones, setSelecciones] = useState([])
    const {
        register, 
        handleSubmit, 
        formState : { errors }} = useForm({
        defaultValues:{
            id: jugador ? jugador.id : "",
            nombre: jugador ? jugador.nombre : "",
            apellido: jugador ? jugador.apellido : "",
            fechaNacimiento: fecha ? fecha.format('YYYY-MM-DD') : "",
            altura: jugador.altura == 0 ? null : jugador.altura,
            peso: jugador.peso == 0 ? null : jugador.peso,
            nroDeCamiseta: jugador.nroDeCamiseta == 0 ? null : jugador.nroDeCamiseta,
            seleccion: jugador ? jugador.seleccion : "",
            posicion: jugador ? jugador.posicion : "",
            cotizacion: jugador.cotizacion == 0 ? null : jugador.cotizacion,
            lider: jugador ? jugador.lider : false
        }
    })

    const navigate = useNavigate()

    const goToJugadores = () => {
        navigate(`/jugadores`)
    }

    const dameSelecciones = async() => {
        const selecciones = await seleccionService.getSelecciones("")
        setSelecciones(selecciones)
    }

    useEffect(()=>{
        dameSelecciones()
    }, [])

    const onSubmit = handleSubmit((data) => {
        funcionSubmit(data)
    })

  return (
        <>
            <form onSubmit={onSubmit}>
                <div style={{display: "flex", flexDirection: "column", color: "black"}}>
                    <TextField disabled = {esDetalles} inputProps={{"data-testid":"nombre"}} id="standard-basic" label="Nombre" variant="standard" style={{marginBottom: "1rem"}} 
                    {...register("nombre", {
                        required: "El nombre es requerido"
                    })}
                    error={errors.nombre}
                    helperText={errors.nombre?.message}
                    />
                    <TextField disabled = {esDetalles} inputProps={{"data-testid":"apellido"}} id="standard-basic" label="Apellido" variant="standard" style={{marginBottom: "1rem"}} 
                    {...register("apellido", {
                        required: "El apellido es requerido"
                    })}
                    error={errors.apellido}
                    helperText={errors.apellido?.message}
                    />
                    <TextField disabled = {esDetalles} inputProps={{"data-testid":"fechaNacimiento"}} type='date' variant='standard' label="Fecha de Nacimiento" style={{marginBottom: "1rem"}}
                    {...register("fechaNacimiento", {
                            required: "La fecha es requerida",
                            validate: (value) => {
                                const fechaNacimiento = dayjs(value)
                                const fechaActual = dayjs()
                                const edad = fechaActual.diff(fechaNacimiento, "year")

                                return edad > 16 || "El jugador no puede tener menos de 16 años"
                            }
                        })}
                    error={!!errors.fechaNacimiento}
                    helperText={errors.fechaNacimiento?.message}
                    />
                    <TextField disabled = {esDetalles} inputProps={{"data-testid":"altura"}} id="standard-basic" type="number" label="Altura (cm)" variant="standard" style={{marginBottom: "1rem"}} 
                    {...register("altura", {
                        required: "La altura es requerida"
                    })}
                    error={errors.altura}
                    helperText={errors.altura?.message}
                    />
                    <TextField disabled = {esDetalles} inputProps={{"data-testid":"peso"}} type='number' id="standard-basic" label="Peso" variant="standard" style={{marginBottom: "1rem"}} 
                    {...register("peso", {
                        required: "El peso es requerido"
                    })}
                    error={errors.peso}
                    helperText={errors.peso?.message}
                    />
                    <TextField disabled = {esDetalles} inputProps={{"data-testid":"nroDeCamiseta"}} type='number' id="standard-basic" label="Numero de camiseta" variant="standard" style={{marginBottom: "1rem"}} 
                    {...register("nroDeCamiseta", {
                        required: "El numero de camiseta es requerido"
                    })}
                    error={errors.nroDeCamiseta}
                    helperText={errors.nroDeCamiseta?.message}
                    />
                    <InputLabel id="demo-simple-select-label" style={{marginLeft: "0", transform: "translate(0, -1.5px) scale(0.75)"}}>Seleccion</InputLabel>
                    <Select disabled = {esDetalles}
                    labelId="demo-simple-select-label"
                    {...register("seleccion", {
                        required: "La seleccion es requerida"
                    })}
                    inputProps={{"data-testid":"seleccion"}}
                    value={seleccion}
                    variant='standard'
                    label="Seleccion"
                    onChange={(event) => {
                        setSeleccion(event.target.value)
                    }}
                    style={{marginBottom: "1rem"}}
                    >
                        {selecciones.map(seleccion =>
                            <MenuItem key={seleccion.id} value={seleccion.pais}>{seleccion.pais}</MenuItem>
                        )}
                        
                    </Select>
                    <InputLabel id="demo-simple-select-label" style={{marginLeft: "0", transform: "translate(0, -1.5px) scale(0.75)"}}>Posicion</InputLabel>
                    <Select disabled = {esDetalles}
                    labelId="demo-simple-select-label"
                    {...register("posicion", {
                        required: "La posicion es requerida"
                    })}
                    inputProps={{"data-testid":"posicion"}}
                    value={posicion}
                    variant='standard'
                    label="Posicion"
                    onChange={(event) => {
                        setPosicion(event.target.value)
                    }}
                    style={{marginBottom: "1rem"}}
                    >
                        <MenuItem value={"Arquero"}>Arquero</MenuItem>
                        <MenuItem value={"Defensor"}>Defensor</MenuItem>
                        <MenuItem value={"Mediocampista"}>Mediocampista</MenuItem>
                        <MenuItem value={"Delantero"}>Delantero</MenuItem>
                    </Select>
                    <TextField disabled = {esDetalles} type="number" inputProps={{"data-testid":"cotizacion"}} id="standard-basic" label="Cotizacion" variant="standard" style={{marginBottom: "1rem"}} 
                    {...register("cotizacion", {
                        required: "La cotizacion es requerida",
                        min:{
                            value:0,
                            message: "El valor no puede ser menor a 0"
                        }
                    })}
                    error={errors.cotizacion}
                    helperText={errors.cotizacion?.message}
                    />

                    <div style={{display: "flex", flexDirection: "row", color: "black", alignItems: "center", marginLeft: "-0.7rem"}}>
                        <Checkbox disabled = {esDetalles} inputProps={{"data-testid":"lider"}} {...register("lider")} checked={jugador ? esLider : false} onChange={(event) => {setEsLider(event.target.checked)}}/> {"Es Lider"}
                    </div>

                    
                    <div style={{display: "flex", flexDirection: "column", color: "black"}}>
                        <Button variant="text" onClick={goToJugadores}>Volver</Button>
                        {!mostrarBoton && ( <Button variant="contained" type='submit'>Guardar</Button> )}
                    </div>
                </div>
            </form>
        </>
    )
}