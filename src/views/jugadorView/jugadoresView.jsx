/* eslint-disable no-unused-vars */
import { useState, useEffect } from "react"
import { Container, Snackbar, Alert } from "@mui/material"
import { FloatingButton } from "src/components/boton/botonFlotante"
// import { BottomNav } from "src/components/bottom-nav/bottonNav"
import { jugadorService } from "src/services/jugadorService"
import GenericSearchBar from "src/components/busqueda/busqueda"
import GenericCard from "src/components/card/genericCard"
import { JugadorContent } from "src/components/jugador/jugador"
import {useNavigate} from 'react-router-dom'
import { DirectionsRun } from '@mui/icons-material'
import { handleError } from "src/services/config"
import { Jugador } from "src/domain/jugador"
import { GenericCardListComponent } from "../genericView"


export const JugadoresComponent = () => {
    const contenido = (jugador) => {
        return (<JugadorContent jugador = {jugador}/>)
    }

    return (
        <GenericCardListComponent service={jugadorService} contenido={contenido} iconoCard={<DirectionsRun/>} direccion={'/nueva-figurita'} tipoItem={new Jugador()}/>
    )
    
}