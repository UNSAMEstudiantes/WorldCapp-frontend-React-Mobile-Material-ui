import { fireEvent, render, screen, waitFor, } from '@testing-library/react'
import axios from 'axios'
import { BrowserRouter } from 'react-router-dom'

import { Seleccion } from 'src/domain/seleccion'
import { REST_SERVER_URL } from 'src/services/config'
import { vi, expect, test, beforeEach } from 'vitest'
// import { BrowserRouter } from 'react-router-dom'
import { SeleccionesComponent } from './seleccionesView'

describe('tests de seleccion', () => {
  let spyGetAxios
  const seleccionTest = new Seleccion(
    0,
    "Croacia",
    0,
    "UEFA"
  )

  beforeEach(() => {
    vi.mock('axios')
    spyGetAxios = vi.spyOn(axios, 'get')

    spyGetAxios.mockResolvedValueOnce({
      data: [ seleccionTest ]
    })

  })

  afterEach(() => {
     vi.clearAllMocks()
  })


  test('al cargar la pagina muestra la info de las selecciones', async () => {
    render(
      <BrowserRouter>
        <SeleccionesComponent/>
      </BrowserRouter>
    )

    expect(spyGetAxios).toHaveBeenCalledWith(`${REST_SERVER_URL}/selecciones?nombre=`)

    await waitFor(() => {
        const nombreSeleccion = screen.getByTestId('nombre').textContent
        expect(nombreSeleccion).toBe(seleccionTest.pais)
    })
  })

  test("al hacer click en el boton editar, me redirecciona a editar la seleccion", async() => {
    render(
      <BrowserRouter>
        <SeleccionesComponent/>
      </BrowserRouter>
    )

    await waitFor(() => {
        const botonEditar = screen.getByTestId("botonEditar")
        fireEvent.click(botonEditar)
        
        const seleccionNombreEdit = screen.getByTestId("pais-edit")
        expect(seleccionNombreEdit.value).toBe(seleccionTest.pais)

        const seleccionCopasEdit = screen.getByTestId("copasDelMundo-edit")
        expect(seleccionCopasEdit.value).toBe(seleccionTest.copasDelMundo.toString())

        const seleccionConfederacionEdit = screen.getByTestId("confederacion-edit")
        expect(seleccionConfederacionEdit.value).toBe(seleccionTest.confederacion)
    })
  })

  test("al hacer click en el boton crear, se me abre el modal con valores vacios", async() => {
    render(
      <BrowserRouter>
        <SeleccionesComponent/>
      </BrowserRouter>
    )

    await waitFor(() => {
        const botonCrear = screen.getByTestId("botonCrear")
        fireEvent.click(botonCrear)
        
        const seleccionNombreEdit = screen.getByTestId("pais-edit")
        expect(seleccionNombreEdit.value).toBe("")

        const seleccionCopasEdit = screen.getByTestId("copasDelMundo-edit")
        expect(seleccionCopasEdit.value).toBe("0")

        const seleccionConfederacionEdit = screen.getByTestId("confederacion-edit")
        expect(seleccionConfederacionEdit.value).toBe("")
    })
  })
})