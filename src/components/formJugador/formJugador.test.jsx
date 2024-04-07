import { describe, expect, test } from 'vitest'
import { render, screen } from '@testing-library/react'
import { FormJugador } from "./formJugador"
import { BrowserRouter } from 'react-router-dom'


describe('formJugador', () => {

    const jugadorValores = {
        id: 1,
        nombre: "Nicolas",
        apellido: "Otamendi",
        fechaNacimiento: "1988-02-12",
        altura: 183,
        peso: 81,
        nroDeCamiseta: 19,
        seleccion: "Argentina",
        posicion: "Defensor",
        cotizacion: 5000000,
        lider: true
    }
    


    test("El componente se renderiza", () => {
        render(<BrowserRouter><FormJugador jugador={jugadorValores} funcionSubmit={() => {}} esDetalles={false}/></BrowserRouter>)
    })

    test("El valor default del campo nombre, es el mismo que el del jugador que se recibe por props", () => {
        render(<BrowserRouter><FormJugador jugador={jugadorValores} funcionSubmit={() => {}} esDetalles={false}/></BrowserRouter>)
        const nombreJugadorInput = screen.getByTestId("nombre")
        expect(nombreJugadorInput.value).toBe(jugadorValores.nombre)
    })

    test("El valor default del campo apellido, es el mismo que el del jugador que se recibe por props", () => {
        render(<BrowserRouter><FormJugador jugador={jugadorValores} funcionSubmit={() => {}} esDetalles={false}/></BrowserRouter>)
        const apellidoJugadorInput = screen.getByTestId("apellido")
        expect(apellidoJugadorInput.value).toBe(jugadorValores.apellido)
    })

    test("El valor default del campo fechaNacimiento, es el mismo que el del jugador que se recibe por props", () => {
        render(<BrowserRouter><FormJugador jugador={jugadorValores} funcionSubmit={() => {}} esDetalles={false}/></BrowserRouter>)
        const fechaNacimientoJugadorInput = screen.getByTestId("fechaNacimiento")
        expect(fechaNacimientoJugadorInput.value).toBe(jugadorValores.fechaNacimiento)
    })

    test("El valor default del campo altura, es el mismo que el del jugador que se recibe por props", () => {
        render(<BrowserRouter><FormJugador jugador={jugadorValores} funcionSubmit={() => {}} esDetalles={false}/></BrowserRouter>)
        const alturaJugadorInput = screen.getByTestId("altura")
        expect(alturaJugadorInput.value).toBe(jugadorValores.altura.toString())
    })

    test("El valor default del campo peso, es el mismo que el del jugador que se recibe por props", () => {
        render(<BrowserRouter><FormJugador jugador={jugadorValores} funcionSubmit={() => {}} esDetalles={false}/></BrowserRouter>)
        const nombreJugadorInput = screen.getByTestId("peso")
        expect(nombreJugadorInput.value).toBe(jugadorValores.peso.toString())
    })

    test("El valor default del campo nroCamiseta, es el mismo que el del jugador que se recibe por props", () => {
        render(<BrowserRouter><FormJugador jugador={jugadorValores} funcionSubmit={() => {}} esDetalles={false}/></BrowserRouter>)
        const nombreJugadorInput = screen.getByTestId("nroDeCamiseta")
        expect(nombreJugadorInput.value).toBe(jugadorValores.nroDeCamiseta.toString())
    })

    test("El valor default del campo seleccion, es el mismo que el del jugador que se recibe por props", () => {
        render(<BrowserRouter><FormJugador jugador={jugadorValores} funcionSubmit={() => {}} esDetalles={false}/></BrowserRouter>)
        const nombreJugadorInput = screen.getByTestId("seleccion")
        expect(nombreJugadorInput.value).toBe(jugadorValores.seleccion)
    })

    test("El valor default del campo posicion, es el mismo que el del jugador que se recibe por props", () => {
        render(<BrowserRouter><FormJugador jugador={jugadorValores} funcionSubmit={() => {}} esDetalles={false}/></BrowserRouter>)
        const nombreJugadorInput = screen.getByTestId("posicion")
        expect(nombreJugadorInput.value).toBe(jugadorValores.posicion)
    })

    test("El valor default del campo cotizacion, es el mismo que el del jugador que se recibe por props", () => {
        render(<BrowserRouter><FormJugador jugador={jugadorValores} funcionSubmit={() => {}} esDetalles={false}/></BrowserRouter>)
        const nombreJugadorInput = screen.getByTestId("cotizacion")
        expect(nombreJugadorInput.value).toBe(jugadorValores.cotizacion.toString())
    })

    test("El valor default del campo lider, es el mismo que el del jugador que se recibe por props", () => {
        render(<BrowserRouter><FormJugador jugador={jugadorValores} funcionSubmit={() => {}} esDetalles={false}/></BrowserRouter>)
        const nombreJugadorInput = screen.getByTestId("lider")
        expect(nombreJugadorInput.checked).toBe(jugadorValores.lider)
    })
})