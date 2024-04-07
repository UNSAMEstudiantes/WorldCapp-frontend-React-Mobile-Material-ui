import { describe, expect, test } from 'vitest'
import { BottomNav } from './bottonNav'
import { render, screen,fireEvent } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'





describe('bottom nav',()=>{
  
  // beforeEach(() => {
  // const MockedLink = vi.fn()
  // vi.mock('react-router-dom', async () => {
  //     const originalRouter = await vi.importActual('react-router-dom')
  //     return {
  //         ...originalRouter,
  //         Link: MockedLink,
  //     }
  // })
  
  // })

  test('el componente renderiza',()=>{
    render(<BrowserRouter><BottomNav/></BrowserRouter>)
  })

  test('clickeo en home, me envia al home',()=>{

    render(<BrowserRouter><BottomNav/></BrowserRouter>)
  
    fireEvent.click(screen.getByTestId('botNavHome'))
    
    expect(window.location.pathname).toBe('/home')
  })
  test('clickeo en figuritas, me envia a la view',()=>{

    render(<BrowserRouter><BottomNav/></BrowserRouter>)
  
    fireEvent.click(screen.getByTestId('botNavFiguritas'))
    
    expect(window.location.pathname).toBe('/figuritas')
  })
  test('clickeo en jugadores, me envia la view de jugadores',()=>{

    render(<BrowserRouter><BottomNav/></BrowserRouter>)
  
    fireEvent.click(screen.getByTestId('botNavJugadores'))
    
    expect(window.location.pathname).toBe('/jugadores')
  })
  test('clickeo en puntos de venta, me envia la view de puntos de venta',()=>{

    render(<BrowserRouter><BottomNav/></BrowserRouter>)
  
    fireEvent.click(screen.getByTestId('botNavPdV'))
    
    expect(window.location.pathname).toBe('/puntos-de-venta')
  })
  test('clickeo en puntos de logOut, me devuelve a la view de login',()=>{

    render(<BrowserRouter><BottomNav/></BrowserRouter>)
  
    fireEvent.click(screen.getByTestId('botNavOut'))
    
    expect(window.location.pathname).toBe('/login')
  })

})