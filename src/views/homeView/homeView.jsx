import { Alert, Container } from "@mui/material"
import { HomeCard } from "src/components/home/HomeCard"
import { HomeCardItem } from "src/domain/HomeCardItem"
import AccountBoxIcon from '@mui/icons-material/AccountBox'
import PersonIcon from '@mui/icons-material/Person'
import StorefrontIcon from '@mui/icons-material/Storefront'
import { useEffect, useState } from "react"
import { handleError } from "src/services/config"
import homeService from "src/services/homeService"
import { HomeData } from "src/domain/HomeData"

export const HomeView = () => {

  const [errorMessage, setErrorMessage] = useState(null)

  useEffect(() => {
    getData()
  }, [])

  const getData = async () => {
    try {
      const cant = await homeService.getHomeData()
      setHomeData(cant)
    } catch (error) {
      setErrorMessage(handleError(error))
    }
  }

  const [homeData, setHomeData] = useState(new HomeData())



  const homeCards = [
    new HomeCardItem(1,'figuritas repetidas', homeData.repetidas, <AccountBoxIcon sx={{ height: 100, width: 100, pl: 1, pb: 1 }} />),
    new HomeCardItem(2,'figuritas ofrecidas', homeData.ofrecidas, <AccountBoxIcon sx={{ height: 100, width: 100, pl: 1, pb: 1, color: 'red' }} />),
    new HomeCardItem(3,'Puntos de venta', homeData.pdv, <StorefrontIcon sx={{ height: 100, width: 100, pl: 1, pb: 1 }} />),
    new HomeCardItem(4,'usuarios activos', homeData.usuarios, <PersonIcon sx={{ height: 100, width: 100, pl: 1, pb: 1 }} />),
  ]






  return (
    <Container className="main" data-testid='cardsContainer'>
      {
        homeCards.map((card) => {
          return (
            <HomeCard
            key={card.id}
            cantidad={card.cantidad}
            nombre={card.nombre}
            icon={card.icon}
            data-testid={'card_'+card.id}
            />
          )
        })
      }
      {errorMessage && <Alert severity="error" style={{ position: 'absolute', bottom: '60px' }}> {errorMessage}</Alert>
      }
    </Container >
  )
}