/* eslint-disable react/prop-types */
import { MemoryRouter, } from "react-router-dom"
import { render } from "@testing-library/react"
import { beforeEach, expect, test, vi } from "vitest"
import { WorldCappRoutes } from "src/routes"
import { Context } from 'src/context/Context'
import homeService from "src/services/homeService"
import { HomeData } from "src/domain/HomeData"



  // const header = screen.getAllByTestId('headerTitle')
  describe('headerTest', () => {
    const contextValue = {
      changeTitle: vi.fn(),
    }

    const TestHeader =({title})=>{
      return (
        
      <MemoryRouter initialEntries={[title]} initialIndex={0} >
       <Context.Provider value={contextValue}>
          <WorldCappRoutes />
        </Context.Provider>
      </MemoryRouter>
      )
    }


    vi.mock("src/services/HomeService")
    
    beforeEach(() => {
      homeService.getHomeData.mockResolvedValue(new HomeData(10,2,3,4))
    })

    afterEach(()=>{
      vi.clearAllMocks()
    })


  test('cuando estoy en home, el titulo del header es home', () => {
      render(
        <TestHeader title ='/home'/>
      )
    expect(contextValue.changeTitle).toHaveBeenCalledWith('Home')
  })

  test('cuando estoy en figueritas, el titulo del header es figueritas', () => {
    render(
      <TestHeader title ='/figuritas'/>
    )
    expect(contextValue.changeTitle).toHaveBeenCalledWith('Figuritas')
  })

  test('cuando estoy en putno de venta, el titulo del header es punto de venta', () => {
    render(
        <TestHeader title ='/puntos-de-venta'/>
    )
    expect(contextValue.changeTitle).toHaveBeenCalledWith('Puntos de venta')
  })
  test('cuando estoy en puntos de venta, el titulo del header es punto de venta', () => {
    render(
        <TestHeader title ='/puntos-de-venta'/>
    )
    expect(contextValue.changeTitle).toHaveBeenCalledWith('Puntos de venta')
  })
  test('cuando estoy en Selecciones, el titulo del header es Selecciones', () => {
    render(
        <TestHeader title ='/selecciones'/>
    )
    expect(contextValue.changeTitle).toHaveBeenCalledWith('Selecciones')
  })
  test('cuando estoy en Jugadores, el titulo del header es Jugadores', () => {
    render(
        <TestHeader title ='/jugadores'/>
    )
    expect(contextValue.changeTitle).toHaveBeenCalledWith('Jugadores')
  })
})
