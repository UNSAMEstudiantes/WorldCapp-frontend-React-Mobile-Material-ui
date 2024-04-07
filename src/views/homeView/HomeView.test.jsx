import { BrowserRouter, } from "react-router-dom"
import { render, waitFor } from "@testing-library/react"
import { expect, test, describe, beforeEach, afterEach, vi } from "vitest"
import { HomeView } from './homeView'
import homeService from "src/services/homeService"
import { HomeData } from "src/domain/HomeData"



  describe('homeView Test', () => {

    vi.mock("src/services/HomeService")
    
    beforeEach(() => {
      homeService.getHomeData.mockResolvedValue(new HomeData(10,2,3,4))
    })

    afterEach(()=>{
      vi.clearAllMocks()
    })


  test('get puntos de venta solo se llama 1 vez', async() => {
    render(
      <BrowserRouter >
        <HomeView />
      </BrowserRouter>
    )
    await waitFor(() => expect(homeService.getHomeData).toHaveBeenCalledTimes(1))
  })

  // test('la cantidad de repetidas es 10', async() => {
  //   render(
  //     <BrowserRouter >
  //       <HomeView />
  //     </BrowserRouter>
  //   )

  //   const cardElement = await screen.findByTestId('card_1')
  //   expect(cardElement).toBeInTheDocument()

    
  // })

})


