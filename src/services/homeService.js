import axios from 'axios'
import { REST_SERVER_URL } from './config'
import { HomeData } from 'src/domain/HomeData'

class HomeService {
  
  async getHomeData() {
    const homeDataJson = await axios.get(`${REST_SERVER_URL}/home`)
    const homeData = HomeData.fromJson(homeDataJson)
    return homeData.data
  }

}

const homeService = new HomeService()

export default homeService
