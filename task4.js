export class Player {
    constructor(name, level) {
      this.name = name
      this.level = level      
    }
    info(){
    console.log(`${this.name} has reached Level ${this.level}!`)
  } 
    levelUp(){
      return this.level = this.level + 1
    }
  }
const tara = new Player("tara", 6)
tara.info()
tara.levelUp()
tara.info()