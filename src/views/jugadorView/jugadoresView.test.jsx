import { fireEvent, render, screen, waitFor, } from '@testing-library/react'
import axios from 'axios'
import { BrowserRouter } from 'react-router-dom'

import { Jugador } from 'src/domain/jugador'
import { REST_SERVER_URL } from 'src/services/config'
import { vi, expect, test, beforeEach } from 'vitest'
// import { BrowserRouter } from 'react-router-dom'
import { JugadoresComponent } from './jugadoresView'

describe('tests de jugador', () => {
  let spyGetAxios
  let spyDeleteAxios
  const jugadorTest = new Jugador(
        0,
        'Nicolas',
        'Otamendi',
        75,
        175,
        19,
        'Argentina',
        '1988-02-12',
        100000,
        "Defensor",
        true
      )

  beforeEach(() => {
    vi.mock('axios')
    spyGetAxios = vi.spyOn(axios, 'get')
    spyDeleteAxios = vi.spyOn(axios, 'delete')

    spyDeleteAxios.mockResolvedValueOnce({
        status: 200
    })

    spyGetAxios.mockResolvedValueOnce({
      data: [ jugadorTest ]
    })

  })

  afterEach(() => {
     vi.clearAllMocks()
  })


  test('al cargar la pagina muestra la info de un jugador', async () => {
    render(
      <BrowserRouter>
        <JugadoresComponent/>
      </BrowserRouter>
    )

    expect(spyGetAxios).toHaveBeenCalledWith(`${REST_SERVER_URL}/jugadores?nombre=`)

    await waitFor(() => {
        const nombreApellidoJugador = screen.getByTestId('headerCard').textContent
        expect(nombreApellidoJugador).toBe("Nicolas Otamendi")

        const textDescripcion = screen.getByTestId('fechaNacimiento').textContent
        expect(textDescripcion).toBe('1988-02-12')

        const numeroCamisetaJugador = screen.getByTestId('nroDeCamiseta').textContent
        expect(numeroCamisetaJugador).toBe("19")

        const seleccionJugador = screen.getByTestId('seleccion').textContent
        expect(seleccionJugador).toBe("Argentina")

        const posicionJugador = screen.getByTestId('posicion').textContent
        expect(posicionJugador).toBe("Defensor")

        const alturaJugador = screen.getByTestId('altura').textContent
        expect(alturaJugador).toBe("175cm")

        const pesoJugador = screen.getByTestId('peso').textContent
        expect(pesoJugador).toBe("75kg")
    })
  })

  test("al hacer click en el boton editar, me redirecciona a editar el jugador correspondiente", async() => {
    render(
      <BrowserRouter>
        <JugadoresComponent/>
      </BrowserRouter>
    )

    await waitFor(() => {
        const botonEditar = screen.getByTestId("botonEditar")
        fireEvent.click(botonEditar)

        expect(window.location.pathname).toBe('/edit-view')
    })

    const { state } = window.history
    const jugadorAEditar = state.usr.elemento

    expect(jugadorAEditar.id).toBe(0)
    expect(jugadorAEditar.nombre).toBe("Nicolas")
    expect(jugadorAEditar.apellido).toBe("Otamendi")
  })

//   test("al hacer click en el boton borrar, se borra intenta borrar el jugador", async() => {
//     render(
//       <BrowserRouter>
//         <JugadoresComponent/>
//       </BrowserRouter>
//     )

//     await waitFor(() => {
//         const botonEliminar = screen.getByTestId("botonEliminar")
//         fireEvent.click(botonEliminar)
//     })

//     expect(spyDeleteAxios).toHaveBeenCalledWith(`${REST_SERVER_URL}/jugadores/borrar-jugador/${jugadorTest.id}`)
//   })

    test("al hacer click en el boton +, me redirecciona a crear un jugador en la vista editView", async() => {
        render(
        <BrowserRouter>
            <JugadoresComponent/>
        </BrowserRouter>
        )

        await waitFor(() => {
            const botonCrear = screen.getByTestId("botonCrear")
            fireEvent.click(botonCrear)

            expect(window.location.pathname).toBe('/edit-view')
        })
    })
})