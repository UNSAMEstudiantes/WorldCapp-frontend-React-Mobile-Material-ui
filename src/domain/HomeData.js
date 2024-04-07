
export class HomeData{
  constructor(){
    this.usuarios = 0
    this.repetidas = 0
    this.ofrecidas = 0
    this.pdv = 0
  }

  static fromJson(homeDataJson){
      const result = Object.assign(new HomeData(),homeDataJson)
      return result
  }

}
