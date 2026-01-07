export class Player {
    constructor(name, level,expPoints) {
      this.name = name
      this.level = level     
      this.expPoints = expPoints 
    }
    info(){
    console.log(`${this.name} has reached Level ${this.level}!`)
  } 
    levelUp(){
      return this.expPoints >= 10 ? this.level = this.level + this.expPoints/10 : this.level
      
    }

  }
const tara = new Player("tara", 6 , 50)
tara.info()
tara.levelUp()
tara.info()