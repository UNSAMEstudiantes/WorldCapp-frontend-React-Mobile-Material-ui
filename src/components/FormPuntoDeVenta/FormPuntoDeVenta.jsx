
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { Button, Container, InputLabel, MenuItem, Select, Snackbar, TextField } from "@mui/material"
import { useState } from "react"
import { useForm } from "react-hook-form"
import { useNavigate } from "react-router-dom"


export const FormPuntoDeVenta = ({puntoDeVenta, funcionSubmit, esDetalles}) =>{
  const navigate = useNavigate()
  const [tipo, setTipo] = useState(puntoDeVenta.tipo)
  const [tipoDescuento, setTipoDescuento] = useState(puntoDeVenta.tipoDescuento || "")
  const [mostrarBoton, setMostrarBoton] = useState(esDetalles)


  const { register, 
        handleSubmit, 
        formState : { errors }} = useForm({
        defaultValues:{
            id: puntoDeVenta ? puntoDeVenta.id : "",
            nombre: puntoDeVenta ? puntoDeVenta.nombre : "",
            direccion: puntoDeVenta ? puntoDeVenta.direccion: "",
            puntoX:  puntoDeVenta ? puntoDeVenta.puntoX: "",
            puntoY:  puntoDeVenta ? puntoDeVenta.puntoY: "",
            stockSobres:  puntoDeVenta ? puntoDeVenta.stockSobres: "",
            tipo:  puntoDeVenta ? puntoDeVenta.tipo: "",
            pedidosPendientes: puntoDeVenta ? puntoDeVenta.pedidosPendientes: "",
            provincia: puntoDeVenta ? puntoDeVenta.provincia: "",


          }
        })
        
        const onSubmit = handleSubmit((data) => {
        funcionSubmit(data)
      })      

    const goToPuntosDeVenta = () => {
      navigate(`/puntos-de-venta`)
    }


    return (
        <>
        <form onSubmit={onSubmit}>
       <div style={{display: "flex", flexDirection: "column", color: "black"}}>
          <TextField disabled = {esDetalles} inputProps={{"data-testid":"nombre"}} id="standard-basic" label="Nombre" variant="standard" style={{marginBottom: "1rem"}} 
          {...register("nombre", {
          required: "El nombre es requerido" })}
          error={errors.nombre}
          helperText={errors.nombre?.message}
         />

          <TextField disabled = {esDetalles} inputProps={{"data-testid":"direccion"}} id="standard-basic" label="Direccion" variant="standard" style={{marginBottom: "1rem"}} 
          {...register("direccion", {
          required: "La direccion es requerida" })}
          error={errors.direccion}
          helperText={errors.direccion?.message}
        />
        
        <TextField disabled = {esDetalles} inputProps={{"data-testid":"provincia"}} id="standard-basic" label="Provincia" variant="standard" style={{marginBottom: "1rem"}} 
          {...register("provincia", {
          required: "La provincia es requerida" })}
          error={errors.provincia}
          helperText={errors.provincia?.message}
        />
       <TextField disabled={esDetalles} inputProps={{ "data-testid": "puntoX" }} type='text' id="standard-basic" label="Coordenada X" variant="standard" style={{ marginBottom: "1rem" }}
         {...register("puntoX", {
         required: "La coordenada es requerida",
        pattern: {
        value: /^-?\d*\.?\d*$/, 
        message: "Ingrese un número decimal válido"
       }
       })}
       error={errors.puntoX}
       helperText={errors.puntoX?.message}
      />
       <TextField disabled={esDetalles} inputProps={{ "data-testid": "puntoY" }} type='text' id="standard-basic" label="Coordenada Y" variant="standard" style={{ marginBottom: "1rem" }}
        {...register("puntoY", {
        required: "La coordenada es requerida",
        pattern: {
        value: /^-?\d*\.?\d*$/, 
        message: "Ingrese un número decimal válido"
       }
       })}
          error={errors.puntoY}
          helperText={errors.puntoY?.message}
        />
           <TextField disabled = {esDetalles} inputProps={{"data-testid":"stockSobres"}} type='number' id="standard-basic" label="Sobres Disponibles" variant="standard" style={{marginBottom: "1rem"}} 
            {...register("stockSobres", {
            required: "La cantidad de sobres es requerida"
            })}
            error={errors.stockSobres}
            helperText={errors.stockSobres?.message}
            />

            <TextField disabled = {esDetalles} inputProps={{"data-testid":"pedidosPendientes"}} type='number' id="standard-basic" label="Pedidos Pendientes" variant="standard" style={{marginBottom: "1rem"}} 
            {...register("pedidosPendientes", {
            required: "La cantidad de pedidos es requerida"
            })}
            error={errors.pedidosPendientes}
            helperText={errors.pedidosPendientes?.message}
            />
                   
           <InputLabel id="demo-simple-select-label" style={{marginLeft: "0", transform: "translate(0, -1.5px) scale(0.75)"}}>tipo</InputLabel>
             <Select
             disabled = {esDetalles}
              labelId="demo-simple-select-label"
              {...register("tipo", {
               required: "El tipo de negocio es requerido"
               })}
             value={tipo}
             variant='standard'
             label="Tipo de negocio"
             onChange={(event) => {
             setTipo(event.target.value)
              }}
              style={{marginBottom: "1rem"}}
               >
              <MenuItem value={"Kiosko"}>Kiosko</MenuItem>
              <MenuItem value={"Libreria"}>Libreria</MenuItem>
              <MenuItem value={"Supermercado"}>Supermercado</MenuItem>
              </Select>

              <InputLabel id="tipo-descuento-label" style={{ marginLeft: "0", transform: "translate(0, -1.5px) scale(0.75)" }}>Tipo de descuento</InputLabel>
        {tipo === "Supermercado" && (
          <Select
            disabled = {esDetalles}
            labelId="tipo-descuento-label"
            {...register("tipoDescuento", {
              required: "El tipo de descuento es requerido"
            })}
            value={tipoDescuento}
            variant='standard'
            label="Tipo de descuento"
            onChange={(event) => {
              setTipoDescuento(event.target.value)
            }}
            style={{ marginBottom: "1rem" }}
          >
            <MenuItem value={"DescuentoJueves"}>DescuentoJueves</MenuItem>
            <MenuItem value={"DescuentoPrimerosDias"}>DescuentoPrimerosDias</MenuItem>
            <MenuItem value={"DescuentoCompraGrande"}>DescuentoCompraGrande</MenuItem>
            <MenuItem value={"SinDescuento"}>SinDescuento</MenuItem>
          </Select>
        )}
                <div style={{display: "flex", flexDirection: "column", color: "black"}}>
                <Button variant="text" onClick={goToPuntosDeVenta}>Volver</Button>
                {!mostrarBoton && ( <Button variant="contained" type='submit'>Guardar</Button> )}
                 </div>
           </div>
            </form>
        
          </>
        )
        }
            
